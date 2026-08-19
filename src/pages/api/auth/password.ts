import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import * as schema from '../../../db/schema';
import bcrypt from 'bcryptjs';

export const PUT: APIRoute = async (context) => {
  const { request, session } = context;
  
  const userId = await session?.get('userId');
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json() as any;
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const db = drizzle((env as any).DB, { schema });
    
    const user = await db.query.users.findFirst({
      where: eq(schema.users.id, userId)
    });
    
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }
    
    const isValid = bcrypt.compareSync(currentPassword, user.password);
    
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Incorrect current password' }), { status: 401 });
    }
    
    const hashedNewPassword = bcrypt.hashSync(newPassword, 10);
    
    await db.update(schema.users)
      .set({ password: hashedNewPassword })
      .where(eq(schema.users.id, userId));

    return new Response(JSON.stringify({ success: true }));
  } catch (error: any) {
    console.error('Error updating password:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to update password' }), { status: 500 });
  }
};

