import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { drizzle } from 'drizzle-orm/d1';
import { eq, and, not } from 'drizzle-orm';
import * as schema from '../../../db/schema';

export const POST: APIRoute = async (context) => {
  const { request, session } = context;
  
  // Verify admin session
  const sessionUserRole = await session?.get('role');
  const currentSessionId = await session?.get('sessionId');
  if (sessionUserRole !== 'admin') {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { sessionId, allOthers } = body;

    const db = drizzle((env as any).DB, { schema });
    const kv = (env as any).landing_page_session;
    
    if (allOthers) {
      // Revoke all other sessions for this user
      const currentUserId = await session?.get('userId');
      const otherSessions = await db.query.sessions.findMany({
        where: and(eq(schema.sessions.userId, currentUserId), not(eq(schema.sessions.id, currentSessionId)))
      });
      
      for (const s of otherSessions) {
        await db.delete(schema.sessions).where(eq(schema.sessions.id, s.id));
        if (kv) await kv.delete(s.id);
      }
    } else if (sessionId) {
      // Revoke a specific session
      await db.delete(schema.sessions).where(eq(schema.sessions.id, sessionId));
      if (kv) await kv.delete(sessionId);
    } else {
      return new Response(JSON.stringify({ error: 'Session ID is required' }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }));
  } catch (error: any) {
    console.error('Error revoking session:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to revoke session' }), { status: 500 });
  }
};

