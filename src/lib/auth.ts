import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { username } from 'better-auth/plugins';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from '../db/schema';

export function createAuth(env: { DB: any }) {
  const db = drizzle(env.DB, { schema });
  return betterAuth({
    baseURL: (env as any).BETTER_AUTH_URL || 'http://localhost:4321',
    database: drizzleAdapter(db, {
      provider: 'sqlite',
      schema: {
        user: schema.users,
        session: schema.sessions,
        account: schema.accounts,
        verification: schema.verifications
      }
    }),
    plugins: [
      username()
    ],
    databaseHooks: {
      user: {
        create: {
          before: async (user) => {
            // Prevent public/auto sign-ups (e.g. from Google OAuth)
            // Only allow users created by the admin (which use @local.app dummy emails or the seed admin)
            if (!user.email.endsWith('@local.app') && user.email !== 'admin@system.local') {
              throw new Error("Public sign-up is disabled. Accounts must be created by an administrator.");
            }
            return { data: user };
          }
        }
      }
    },
    emailAndPassword: {
      enabled: true, // Required for password handling, even if using username plugin
    },
    socialProviders: {
      ...((env as any).GOOGLE_CLIENT_ID ? {
        google: {
          clientId: (env as any).GOOGLE_CLIENT_ID,
          clientSecret: (env as any).GOOGLE_CLIENT_SECRET,
        }
      } : {})
    }
  });
}
