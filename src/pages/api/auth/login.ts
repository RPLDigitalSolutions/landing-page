import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import * as schema from '../../../db/schema';
import bcrypt from 'bcryptjs';

export const POST: APIRoute = async (context) => {
  const { request, session } = context;
  
  try {
    const body = await request.json();
    const { username, password } = body;
    
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
    await session.set('userId', user.id);
    await session.set('role', user.role);
    await session.set('name', user.name);
    await session.set('sessionId', sessionId);
    
    return new Response(JSON.stringify({ success: true }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};



