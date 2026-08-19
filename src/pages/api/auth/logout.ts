import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import * as schema from '../../../db/schema';

export const POST: APIRoute = async (context) => {
  const { session } = context;
  if (!session) {
    return new Response(JSON.stringify({ error: "Session is not configured" }), { status: 500 });
  }

  const sessionId = await session.get('sessionId');

  if (sessionId) {
    const db = drizzle((env as any).DB, { schema });
    await db.delete(schema.sessions).where(eq(schema.sessions.id, sessionId as string));
  }

  session.destroy();
  
  return new Response(JSON.stringify({ success: true }));
};

