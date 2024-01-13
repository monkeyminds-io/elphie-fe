'use server'
// =============================================================================
// File Name: libs/actions/logout.ts
// File Description:
// This file contains the code for the Logout action
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { removeCookie } from '../cookies';

// =============================================================================
// Actions Form Schemas
// =============================================================================

// =============================================================================
// Actions Types
// =============================================================================

// =============================================================================
// Actions Functions
// =============================================================================
export const userLogout = async (formData: FormData) => {

    // Remove all Cookies
    if(typeof document !== 'undefined') {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            removeCookie(cookie.substring(0, cookie.indexOf('=')));
        })
    } 

    // Redirect to Home page
    redirect(`${process.env.WEBSITE_DOMAIN}/`);
}
