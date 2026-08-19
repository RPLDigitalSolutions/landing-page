import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import * as schema from '../../../db/schema';
import bcrypt from 'bcryptjs';

export const POST: APIRoute = async (context) => {
  const { request, session } = context;
  
  try {
    if (!session) {
      return new Response(JSON.stringify({ error: "Session is not configured" }), { status: 500 });
    }

    const body = await request.json() as any;
    const { username, password, turnstileResponse } = body;
    
    if (!turnstileResponse) {
      return new Response(JSON.stringify({ error: "Turnstile token is missing" }), { status: 400 });
    }

    const turnstileSecret = (env as any).TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      return new Response(JSON.stringify({ error: "Turnstile is not configured on the server" }), { status: 500 });
    }

    const verificationForm = new FormData();
    verificationForm.append('secret', turnstileSecret);
    verificationForm.append('response', turnstileResponse);
    verificationForm.append('remoteip', request.headers.get('cf-connecting-ip') || '');

    const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: verificationForm
    });
    
    const turnstileOutcome = await turnstileResult.json() as any;
    if (!turnstileOutcome.success) {
      return new Response(JSON.stringify({ error: "Turnstile verification failed" }), { status: 403 });
    }
    
    const db = drizzle((env as any).DB, { schema });
    
    const user = await db.query.users.findFirst({
      where: eq(schema.users.username, username)
    });
    
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid username or password" }), { status: 401 });
    }
    
    const isValid = bcrypt.compareSync(password, user.password);
    
    if (!isValid) {
      return new Response(JSON.stringify({ error: "Invalid username or password" }), { status: 401 });
    }
    
    // Generate unique session ID for tracking
    const sessionId = crypto.randomUUID();
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const ipAddress = request.headers.get('cf-connecting-ip') || 'Unknown';
    
    // Track session in D1
    await db.insert(schema.sessions).values({
      id: sessionId,
      userId: user.id,
      userAgent,
      ipAddress
    });

    // Set user info and sessionId in the Astro KV session
    session.set('userId', user.id);
    session.set('role', user.role);
    session.set('name', user.name);
    session.set('sessionId', sessionId);
    
    return new Response(JSON.stringify({ success: true }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};



