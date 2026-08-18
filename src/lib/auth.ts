// Mocking better-auth api to keep compatibility with existing pages
export const createAuth = (env?: any) => {
  return {
    api: {
      getSession: async ({ headers, context }: any) => {
        // In Astro endpoints or pages, we can just pass the session object
        // Actually, Astro components have `Astro.session`. We should pass `Astro.session` directly.
        // Wait, the existing code calls `auth.api.getSession({ headers: Astro.request.headers })`
        // We cannot access Astro.session from just headers.
        return null;
      }
    }
  };
};
