import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';
import { getDb } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export const PUT: APIRoute = async (context) => {
  const { request, params, locals, session } = context;
  
  
  // Verify admin session
  const sessionUserRole = await session?.get('role');
  if (sessionUserRole !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const targetUserId = params.id;
  if (!targetUserId) {
    return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
  }

  try {
    const body = await request.json();
    const { name, username } = body;

    if (!name || !username) {
      return new Response(JSON.stringify({ error: 'Name and username are required' }), { status: 400 });
    }

    const db = getDb(env as any);
    
    // Update user in DB
    await db.update(users)
      .set({ name, username })
      .where(eq(users.id, targetUserId));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to update user' }), { status: 500 });
  }
};

export const DELETE: APIRoute = async (context) => {
  const { request, params, locals, session } = context;
  
  
  // Verify admin session
  const sessionUserRole = await session?.get('role');
  if (sessionUserRole !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const targetUserId = params.id;
  if (!targetUserId) {
    return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
  }

  const currentUserId = await session?.get('userId');
  // Prevent user from deleting themselves
  if (targetUserId === currentUserId) {
    return new Response(JSON.stringify({ error: 'Cannot delete your own account' }), { status: 403 });
  }

  try {
    const db = getDb(env as any);
    
    await db.delete(users).where(eq(users.id, targetUserId));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to delete user' }), { status: 500 });
  }
};




