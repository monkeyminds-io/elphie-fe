'use server'
// =============================================================================
// File Name: libs/actions/contact-us.ts
// File Description:
// This file contains all the code related to the action of the Contact Us form
// of the Website.
// =============================================================================
// =============================================================================
// Action Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { stringify } from 'querystring';
import { z } from 'zod';
import { sendEmail } from '../endpoints';

// =============================================================================
// Action Form Schemas
// =============================================================================
const FormSchema = z.object({
    firstname: z.string({ 
        invalid_type_error: 'Please, use only text.' 
    }).optional(),
    lastname: z.string({ 
        invalid_type_error: 'Please, use only text.' 
    }).optional(),
    email: z.string({ 
        required_error: 'Email is a required field.' 
    }).email({  
        message: 'Invalid email address.' 
    }),
    message: z.string({
        required_error: 'Message is a required field.'
    })
});

// =============================================================================
// Action Types
// =============================================================================
export type State = {
    errors?: {
        firstname?: string[];
        lastname?: string[];
        email?: string[];
        message?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const handleSendMessage = async (initialState: State, formData: FormData) => {
    // Validate form data
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    // Sending errors if any
    if(!validatedFields.success) {
        return { errors: validatedFields.error.flatten().fieldErrors }
    }

    // Action Processes
    try {
        const response = await fetch(sendEmail(), {
            method: 'POST',
            headers: {},
            body: '',
        });

        if(!response.ok) return { message: 'Ups... Failed to send email.' }
    } catch (error) {
        console.error(error);
        return { message: 'Ups... Failed to send email.' }
    }

    // If needed revalidate and redirect to URL
    redirect('/contact-us/success');
}
