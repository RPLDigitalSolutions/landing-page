import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export function getDb(env: { DB: any }) {
  return drizzle(env.DB, { schema });
}
