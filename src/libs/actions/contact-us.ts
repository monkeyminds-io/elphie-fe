'use server'
// =============================================================================
// File Name: libs/actions/contact-us.ts
// File Description:
// This file contains all the code related to the action of the Contact Us form
// of the Website.
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
    firstName: z.string({ 
        invalid_type_error: 'Please, use only text.' 
    }).optional(),
    lastName: z.string({ 
        invalid_type_error: 'Please, use only text.' 
    }).optional(),
    email: z.string({ 
        required_error: 'Email is a required field.' 
    }).email({  
        message: 'Invalid email address.' 
    }),
    phone: z.string().regex(
        new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/), 
        'Invalid phone number.'
    ).optional(),
    message: z.string({
        required_error: 'Message is a required field.'
    })
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const sendMessage = async (prevState: State, formData: FormData) => {
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
        // API call goes here
        console.log(validatedFields);
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // If needed revalidate and redirect to URL
    // revalidatePath('#');
    redirect('/contact-us?success=true');
}
