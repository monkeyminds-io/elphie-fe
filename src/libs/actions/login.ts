'use server'
// =============================================================================
// File Name: libs/actions/login.ts
// File Description:
// This file contains the code of the Login Form Action.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../endpoints';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({ 
    email: z.string({
        required_error: 'Email is required.',
    }).email({
        message: 'Invalid email address.'
    }), 
    password: z.string({
        required_error: 'Password is required.',
    }).length(8, {
        message: 'Must be 8 characters long.'
    })
})

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const handleLogin = async (initialState: State | undefined, formData: FormData) => {
    const parsedCredentials = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    // Sending errors if any
    if(!parsedCredentials.success) {
        return {
            message: 'Missing fields. Falied to submit form.',
            errors: parsedCredentials.error.flatten().fieldErrors,
        }
    }

    // Action Processes
    try {
        const { email, password } = parsedCredentials.data;
        const user = await fetch(getUserByEmail(email))
            .then(response => {
                if(!response.ok) return null;
                return response.json();
            })
            .then(data => data);

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (passwordsMatch) {
            // TODO Set session and current user globals
        }
    } catch (error) {
        console.error(error)
        return { message: 'Ups... Failed to login.' }
    }

    // If needed revalidate and redirect to URL
    redirect('/dashboard');
}

