// =============================================================================
// File Name: libs/actions/login.ts
// File Description:
// This file contains the code of the Login Form Action.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';

// =============================================================================
// Actions Functions
// =============================================================================
export const handleLogin = async (initialState: string | undefined, formData: FormData) => {

    // Action Processes
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }

    // If needed revalidate and redirect to URL
    // revalidatePath('#');
    // redirect('#');
}
