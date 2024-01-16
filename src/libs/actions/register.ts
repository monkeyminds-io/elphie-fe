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
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createBilling, createUser } from '../endpoints';
import bcrypt from 'bcrypt';
import { BillingResponse, UserResponse } from '../definitions';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    firstname: z.string({}).optional(),
    lastname: z.string({}).optional(),
    email: z.string({ 
        required_error: 'Email is a required field.' 
    }).email({  
        message: 'Invalid email address.' 
    }),
    password: z.string({
        required_error: 'Password is a required field.'
    }).regex(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/), {
        message: "Must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special char and be 8 chars long."
    }),
    passwordAgain: z.string({
        required_error: 'Password Again is a required field.'
    }),
    accountType: z.enum(['elphie', 'calphie'], {
        invalid_type_error: 'You must choose a plan.',
    }),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    county: z.string({}).optional(),
    eircode: z.string({}).optional(),
    cardName: z.string({}).optional(),
    cardNumber: z.string({}).optional(),
    cardExpiry: z.string({}).optional(),
    cardCVC: z.string({}).optional(),
    termsAndConditions: z.string({
        required_error: 'You must accept the Terms and Conditions.'
    }),
});

const RegisterUser = FormSchema.refine(
    data => data.password === data.passwordAgain, {
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
        accountType?: string[];
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
        // Encripting password
        const passwordSalt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(validatedFields.data.password, passwordSalt);

        // Creating User
        const userResponse = await fetch(createUser(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: validatedFields.data.firstname,
                lastName: validatedFields.data.lastname,
                email: validatedFields.data.email,
                password: hashedPassword,
                accountType: validatedFields.data.accountType
            })
        });

        // Set Response to JSON format
        const userJson = await userResponse.json() as UserResponse;

        // If response is not OK then send error feedback to user.
        if(!userJson.ok) return { message: userJson.message }

        // Extract data object from Json Response
        const createdUser = userJson.data;

        // If Account type is elphie (Paid account type)
        if(createdUser.accountType === "elphie") {

            // Encrypt Card Number
            let cardNumberSalt;
            let hashedCardNumber
            if(typeof validatedFields.data.cardNumber !== 'undefined') {
                cardNumberSalt = bcrypt.genSaltSync(10);
                hashedCardNumber = bcrypt.hashSync(validatedFields.data.cardNumber, cardNumberSalt);
            }

            // Create Billing Info
            const billingResponse = await fetch(createBilling(), {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: createdUser.id,
                    addressLine1: validatedFields.data.addressLine1,
                    addressLine2: validatedFields.data.addressLine2,
                    county: validatedFields.data.county,
                    eircode: validatedFields.data.eircode,
                    cardName: validatedFields.data.cardName,
                    cardNumber: hashedCardNumber,
                    cardExpiry: validatedFields.data.cardExpiry,
                    cardCVC: validatedFields.data.cardCVC,
                })
            });

            // Set response to Json format
            const billingJson = await billingResponse.json() as BillingResponse;

            // If reponse is not ok return error
            if(!billingJson.ok) return { message: billingJson.message }
        }
        
    } catch (error) {
        // If catch error return error message
        return { message: 'Ups... Failed to create account.', };
    }

    // If needed revalidate and redirect to URL
    redirect('/register/success');
}
