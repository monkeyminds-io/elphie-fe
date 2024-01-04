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
import { z } from 'zod';

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
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    // Sending errors if any
    if(!validatedFields.success) {
        return {
            message: 'Missing fields. Falied to submit form.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Action Processes
    try {
        // TODO API call goes here
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // If needed revalidate and redirect to URL
    redirect('/contact-us/success');
}
