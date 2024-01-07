'use server'
// =============================================================================
// File Name: libs/actions/recover-password.ts
// File Description:
// This file contains the code of the Action for the Recover PAssword Form
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
    email: z.string({ 
        required_error: 'Email is a required field.' 
    }).email({  
        message: 'Invalid email address.' 
    }),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        email?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const findUserByEmail = async (prevState: State | undefined, formData: FormData) => {
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
            message: 'Ups.. Failed to find user.'
        }
    }

    // If needed revalidate and redirect to URL
    redirect('/recover-password/success');
}
