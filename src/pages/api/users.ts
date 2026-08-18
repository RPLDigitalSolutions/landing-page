import type { APIRoute } from 'astro';
import { createAuth } from '../../lib/auth';

export const POST: APIRoute = async ({ request, env }) => {
  const auth = createAuth(env as any);
  
  // Verify admin session
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, username, password } = body;

    if (!name || !username || !password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Call Better Auth internally
    // We generate a dummy email because Better Auth requires it for the core module.
    const email = `${username}@local.app`;

    const result = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        username,
      },
      asResponse: false
    });

    // Return the created user (the API won't pipe the session cookie because we manually respond)
    return new Response(JSON.stringify({ user: result.user }), { status: 200 });
  } catch (error: any) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to create user' }), { status: 500 });
  }
};
