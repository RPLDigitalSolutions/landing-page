import type { APIRoute } from 'astro';
import { drizzle } from 'drizzle-orm/d1';
import { env } from 'cloudflare:workers';
import * as schema from '../../db/schema';
import bcrypt from 'bcryptjs';

export const POST: APIRoute = async (context) => {
  const { request, locals } = context;
  
  
  // Verify admin session
  const sessionUser = await context.session?.get('role');
  if (sessionUser !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, username, password } = body;

    if (!name || !username || !password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const db = drizzle(env.DB, { schema });

    const newUser = await db.insert(schema.users).values({
      id: crypto.randomUUID(),
      name,
      username,
      password: hashedPassword,
      role: 'user'
    }).returning();

    return new Response(JSON.stringify({ user: newUser[0] }), { status: 200 });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to create user' }), { status: 500 });
  }
};




