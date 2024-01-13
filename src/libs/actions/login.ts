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
import { setCookie } from '../cookies';

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
            errors: parsedCredentials.error.flatten().fieldErrors,
            message: 'Falied to submit form.',
        }
    }

    // Action Processes
    try {
        // Get user by email
        const { email, password } = parsedCredentials.data;
        const response = await fetch(getUserByEmail(email));
        const json = await response.json();

        // Set user object
        const user = await json.data;
        if(user === null) return  { message: 'Ups... Failed to fetch User.' }

        // Check password
        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) return { message: "Wrong credentials..." };

        // Set Session ID and User Data Cookies
        const sessionId = crypto.randomUUID();
        setCookie('session-id', sessionId);
        Object.entries(user).forEach(([key, value]) => {
            setCookie(`user-${key}`, value as string);
        })

    } catch (error) {
        console.error(error)
        return { message: 'Ups... Failed to login.' };
    }

    // If needed revalidate and redirect to URL
    redirect(`${process.env.WEBSITE_DOMAIN}/app/dashboard`);
}

