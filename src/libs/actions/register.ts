'use server'
// =============================================================================
// File Name: libs/actions/register.ts
// File Description:
// This file contains the code of the Register User Action
// for the Register / Sign up form of the Website
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
    id: z.string(),
    firstname: z.string({}),
    lastname: z.string({}),
    email: z.string({}).email(),
    password: z.string({}).length(8,{}),
    plan: z.enum(['elphie', 'calphie'], {}),
    addressLine1: z.string({}),
    addressLine2: z.string({}),
    county: z.string({}),
    eircode: z.string({}).regex(new RegExp(''), {}),
    cardName: z.string({}),
    cardNumber: z.string({}).regex(new RegExp(''), {}),
    cardExpiry: z.date({}),
    cardCVC: z.string({}).regex(new RegExp(''), {}),
    avatar_url: z.string({}),
    created_at: z.string({}),
    updated_at: z.string({}),
});

// Form Schema Omits ////////////////
const RegisterSchema = FormSchema.omit({
    id: true,
    avatar_url: true,
    created_at: true,
    updated_at: true,
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        firstname?: string[];
        lastname?: string[];
        email?: string[];
        password?: string[];
        plan?: string[];
        addressLine1?: string[];
        addressLine2?: string[];
        county?: string[];
        eircode?: string[];
        cardName?: string[];
        cardNumber?: string[];
        cardExpiry?: string[];
        cardCVC?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const registerUser = async (prevState: State | undefined, formData: FormData) => {
    const validatedFields = RegisterSchema.safeParse(
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
        console.log(validatedFields.data)
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // If needed revalidate and redirect to URL
    redirect('/register/success');
}
