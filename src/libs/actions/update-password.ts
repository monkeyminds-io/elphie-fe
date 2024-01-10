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
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { updateUserPassword } from '../endpoints';
import bcrypt from 'bcrypt';

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
export const updatePassword = async (id: string, prevState: State | undefined, formData: FormData) => {

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
        // Encripting password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(validatedFields.data.password, salt);

        // Update password
        const response = await fetch(updateUserPassword(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newPassword: hashedPassword,
            })
        })

        // Return message if response is not ok
        if(!response.ok) return { message: 'Ups... Failed to update password.' };

    } catch (error) {
        return {
            message: 'Ups... Failed to update password.'
        }
    }

    // If needed revalidate and redirect to URL
    redirect('/login');
}
