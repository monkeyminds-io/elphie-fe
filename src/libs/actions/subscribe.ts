'use server'
// =============================================================================
// File Name: libs/actions/subscribe.ts
// File Description:
// This file contains the code of the Subscribe Form Action.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { z } from 'zod';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    subscriberEmail: z.string({
        required_error: 'Email is required field.'
    }).email({
        message: 'Invalid email addres.'
    }),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        subscriberEmail?: string[];
    };
    message?: string | null;
    success?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const handlingSubscriber = async (prevState: State | undefined, formData: FormData) => {
    
    // Validating form data
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    // Sending errors if any
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Falied to submit form.',
        }
    }

    // Action Processes
    try {
        // TODO API call goes here
        
        return {
            success: 'Thanks for subscribing!',
        }
        
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }
}
