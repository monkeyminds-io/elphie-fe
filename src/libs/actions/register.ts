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
import { createUser } from '../endpoints';

// =============================================================================
// Actions Form Schemas
// =============================================================================

const regexps = {
    eircode: '/^[ACDEFHKNPRTVWXY]{1}[0-9]{1}[ACDEFHKNPRTVWXY0-9]{1}[ ]{1}[ACDEFHKNPRTVWXY0-9]{4}$/',
    cardNumber: '/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/',
    cardExpiry: '/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/',
    cardCVV: '/^[0-9]{3,4}$/'
}

const FormSchema = z.object({
    id: z.string(),
    firstname: z.string({}).optional(),
    lastname: z.string({}).optional(),
    email: z.string({ 
        required_error: 'Email is a required field.' 
    }).email({  
        message: 'Invalid email address.' 
    }),
    password: z.string({
        required_error: 'Password is a required field.'
    }).length(8,{
        message: 'Must be 8 characters.'
    }),
    passwordAgain: z.string({
        required_error: 'Password Again is a required field.'
    }),
    plan: z.enum(['elphie', 'calphie'], {
        invalid_type_error: 'You must choose a plan.',
    }),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    county: z.string({}).optional(),
    eircode: z.string({}).optional(),
    cardName: z.string({}).optional(),
    cardNumber: z.string({}).optional(),
    cardExpiry: z.string({}).optional(),
    cardCVV: z.string({}).optional(),
    termsAndConditions: z.string({
        required_error: 'You must accept the Terms and Conditions.'
    }),
    avatar_url: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
});

const RegisterUser = FormSchema.omit({
    id: true,
    avatar_url: true,
    created_at: true,
    updated_at: true,
}).refine(data => data.password === data.passwordAgain, {
    message: 'Password Again must match Password.',
    path: ['passwordAgain']
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
        passwordAgain?: string[];
        plan?: string[];
        addressLine1?: string[];
        addressLine2?: string[];
        county?: string[];
        eircode?: string[];
        cardName?: string[];
        cardNumber?: string[];
        cardExpiry?: string[];
        cardCVC?: string[];
        termsAndConditions?: string[];
    };
    message: string;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const registerUser = async (prevState: State | undefined, formData: FormData) => {

    // Validating fields
    const validatedFields = RegisterUser.safeParse(
        Object.fromEntries(formData.entries())
    );

    // Sending errors if any
    if(!validatedFields.success) {
        return { 
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Failed to submit.',
        }
    }
    

    // Action Processes
    try {
        // const response = await fetch(createUser(), {
        //     method: 'POST',
        //     headers: {},
        //     body: ''
        // });

        // if(!response.ok) return { message: 'Ups... Failed to create account.' }
        
    } catch (error) {
        return { message: 'Ups... Failed to create account.', };
    }

    // If needed revalidate and redirect to URL
    redirect('/register/success');
}
