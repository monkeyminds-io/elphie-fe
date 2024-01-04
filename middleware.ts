// =============================================================================
// File Name: middleware.ts
// File Description:
// This file contains the code of the Auth Middleware
// =============================================================================
// =============================================================================
// Middleware Imports
// =============================================================================
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// =============================================================================
// Middleware
// =============================================================================
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};