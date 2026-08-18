import type { APIRoute } from "astro";
import { getDb } from "../../../db";
import { articles } from "../../../db/schema";
import { desc } from "drizzle-orm";
import { env } from "cloudflare:workers";

export const GET: APIRoute = async (ctx) => {
  const db = getDb(env as any);
  
  try {
    const allArticles = await db.query.articles.findMany({
      orderBy: [desc(articles.createdAt)]
    });
    return new Response(JSON.stringify(allArticles), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const POST: APIRoute = async (ctx) => {
  // Verify auth
  const userId = await ctx.session?.get('userId');
  const role = await ctx.session?.get('role');
  const session = userId ? { user: { id: userId, role: role } } : null;

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const db = getDb(env as any);
  const body = await ctx.request.json();
  const { title, content } = body;

  if (!title || !content) {
    return new Response(JSON.stringify({ error: "Missing title or content" }), { status: 400 });
  }

  try {
    const id = crypto.randomUUID();
    await db.insert(articles).values({
      id,
      title,
      content,
      authorId: session.user.id,
    });
    return new Response(JSON.stringify({ success: true, id }), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
