'use server'
// =============================================================================
// File Name: libs/actions/update-password.ts
// File Description:
// This file contains the code of the Action for the Update Password Form 
// of the website
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    password: z.string({
        required_error: 'Password is a required field.'
    }).length(8,{
        message: 'Must be 8 characters.'
    }),
    passwordAgain: z.string({
        required_error: 'Password Again is a required field.'
    }),
}).refine(data => data.password === data.passwordAgain, {
    message: 'Password Again must match Password.',
    path: ['passwordAgain']
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        password?: string[];
        passwordAgain?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const updatePassword = async (prevState: State | undefined, formData: FormData) => {

    // Validate fields
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    // Sending errors if any
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Falied to submit form.',
        }
    }

    // Action Processes
    try {
        // API call goes here
    } catch (error) {
        return {
            message: 'Ups... Failed to update password.'
        }
    }

    // If needed revalidate and redirect to URL
    redirect('/login');
}
