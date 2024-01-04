// =============================================================================
// File Name: auth.config.ts
// File Description:
// This file contains the configuration of the Next Auth Plugin
// =============================================================================
// =============================================================================
// Auth Config Imports
// =============================================================================
import type { NextAuthConfig } from 'next-auth';

// =============================================================================
// Auth Config
// ============================================================================= 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;