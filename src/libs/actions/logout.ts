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
import { remove } from '../cookies';

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

    remove('session-id');
    remove('user-id');
    redirect(`${process.env.WEBSITE_DOMAIN}/`);
}
