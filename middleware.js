// Middleware removed - authentication not needed for this project
// If middleware is needed in the future, add it here

// Empty middleware - no authentication needed
export function middleware(request) {
  // No middleware logic needed
}

export const config = {
  // Don't match any routes - middleware disabled
  matcher: [],
};
