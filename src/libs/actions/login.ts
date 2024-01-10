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
import { set } from '../cookies';

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
        const { email, password } = parsedCredentials.data;
        const response = await fetch(getUserByEmail(email));
        const json = !response.ok ? null : await response.json();
        const user = json !== null ? await json.data : null;

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) return { message: "Wrong credentials..." };

        // Set Session ID and User ID Cookies
        // TODO Best practice would be to secure this data in the DB for User analytics
        const sessionId = crypto.randomUUID();
        set({ name: 'session-id', value: sessionId, httpOnly: true, path: '/' });
        set({ name: 'user-id', value: user.id as string, httpOnly: true, path: '/'  });
        
    } catch (error) {
        console.error(error)
        return { message: 'Ups... Failed to login.' };
    }

    // If needed revalidate and redirect to URL
    redirect(`${process.env.WEBSITE_DOMAIN}/dashboard`);
}

