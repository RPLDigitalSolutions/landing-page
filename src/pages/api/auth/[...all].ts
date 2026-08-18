import type { APIRoute } from "astro";
import { createAuth } from "../../../lib/auth";
import { env } from "cloudflare:workers";

export const ALL: APIRoute = async (ctx) => {
  const auth = createAuth(env as any);
  return auth.handler(ctx.request);
};
