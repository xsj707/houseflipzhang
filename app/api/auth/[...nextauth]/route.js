import { handlers } from "@/libs/auth";

// NextAuth v5 requires this catch-all route handler to handle all auth endpoints:
// - /api/auth/signin
// - /api/auth/signout
// - /api/auth/callback/[provider]
// - /api/auth/csrf
// - /api/auth/providers
// - etc.
export const { GET, POST } = handlers;

