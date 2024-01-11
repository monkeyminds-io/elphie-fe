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
import { getUserByEmail } from '../endpoints';

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

    let id;

    // Action Processes
    try {
        // Get user by email
        const response = await fetch(getUserByEmail(validatedFields.data.email));
        const json = !response.ok ? null : await response.json();
        const user = json !== null ? await json.data : null;

        // If user is not found return error message
        if(!user) return { message: 'Ups.. Failed to find user.' };

        // Else set id to user id
        id = user.id;
        
    } catch (error) {
        return {
            message: 'Ups.. Failed to find user.'
        }
    }

    // Redirect to success page with id
    // TODO In real world and as good preactice for security before redirecting and allowing user to update password
    // We would be sending an email to the provided email address (only if found in DB) with a token to confirm that
    // The user has also access to the given email account.
    redirect(`/recover-password/${id}/success`);
}
