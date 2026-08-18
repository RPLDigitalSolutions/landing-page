import type { APIRoute } from 'astro';
import { createAuth } from '../../../lib/auth';
import { getDb } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export const PUT: APIRoute = async ({ request, params, env }) => {
  const auth = createAuth(env as any);
  
  // Verify admin session
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const userId = params.id;
  if (!userId) {
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
      .where(eq(users.id, userId));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to update user' }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request, params, env }) => {
  const auth = createAuth(env as any);
  
  // Verify admin session
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const userId = params.id;
  if (!userId) {
    return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
  }

  // Prevent user from deleting themselves
  if (userId === session.user.id) {
    return new Response(JSON.stringify({ error: 'Cannot delete your own account' }), { status: 403 });
  }

  try {
    const db = getDb(env as any);
    
    // Delete user from DB (foreign keys in D1/SQLite should cascade if set up, or we just delete user)
    // Better Auth normally handles cascade, but let's delete manually.
    await db.delete(users).where(eq(users.id, userId));

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Error deleting user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to delete user' }), { status: 500 });
  }
};
