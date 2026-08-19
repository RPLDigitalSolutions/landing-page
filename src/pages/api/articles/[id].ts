import type { APIRoute } from "astro";
import { getDb } from "../../../db";
import { articles } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { env } from "cloudflare:workers";

export const PUT: APIRoute = async (ctx) => {
  const userId = await ctx.session?.get('userId');
  const role = await ctx.session?.get('role');
  const session = userId ? { user: { id: userId, role: role } } : null;

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const id = ctx.params.id;
  if (!id) return new Response(JSON.stringify({ error: "Missing ID" }), { status: 400 });

  const db = getDb(env as any);
  const body = await ctx.request.json() as any;
  const { title, content } = body;

  try {
    await db.update(articles)
      .set({ title, content, updatedAt: new Date() })
      .where(eq(articles.id, id));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async (ctx) => {
  const userId = await ctx.session?.get('userId');
  const role = await ctx.session?.get('role');
  const session = userId ? { user: { id: userId, role: role } } : null;

  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const id = ctx.params.id;
  if (!id) return new Response(JSON.stringify({ error: "Missing ID" }), { status: 400 });

  const db = getDb(env as any);
  try {
    await db.delete(articles).where(eq(articles.id, id));
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const GET: APIRoute = async (ctx) => {
  const db = getDb(env as any);
  const id = ctx.params.id;
  if (!id) return new Response(JSON.stringify({ error: "Missing ID" }), { status: 400 });

  try {
    const article = await db.query.articles.findFirst({
      where: eq(articles.id, id)
    });
    if (!article) return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
    
    return new Response(JSON.stringify(article), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
