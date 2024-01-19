'use server'
// =============================================================================
// File Name: libs/actions/create-billing.ts
// File Description:
// This file contains the code of the Action Create Billing Information
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createBilling as create } from '../endpoints';
import bcrypt from 'bcrypt';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    addressLine1: z.string({
        required_error: 'Address line 1 is a required field.'
    }),
    addressLine2: z.string().optional(),
    county: z.string().min(1).optional(),
    eircode: z.string().optional(),
    cardName: z.string({
        required_error: 'Name in Card is a required field.'
    }),
    cardNumber: z.string({
        required_error: 'Card Number is a required field.'
    }),
    cardExpiry: z.string({
        required_error: 'Expiry is a required field.'
    }).regex(new RegExp('^(0[1-9]|1[0-2])[ ]\\/[ ]?([0-9]{4}|[0-9]{2})$'), {
        message: 'Invalid Expiry date.'
    }),
    cardCVC: z.string({
        required_error: 'Card CVC is a required field.'
    }).regex(new RegExp('^[0-9]{3,4}$'), {
        message: 'Invalid CVC number.'
    }),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
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
export const createBilling = async (userId: string, prevState: State | undefined, formData: FormData) => {

    // Validate input data
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
        // Encrypt Card Number
        let cardNumberSalt;
        let hashedCardNumber
        if(typeof validatedFields.data.cardNumber !== 'undefined') {
            cardNumberSalt = bcrypt.genSaltSync(10);
            hashedCardNumber = bcrypt.hashSync(validatedFields.data.cardNumber, cardNumberSalt);
        }
        
        const response = await fetch(create(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: userId,
                addressLine1: validatedFields.data.addressLine1,
                addressLine2: validatedFields.data.addressLine2,
                county: validatedFields.data.county,
                eircode: validatedFields.data.eircode,
                cardName: validatedFields.data.cardName,
                cardNumber: hashedCardNumber,
                cardExpiry: validatedFields.data.cardExpiry,
                cardCVC: validatedFields.data.cardCVC,
            })
        })

        const json = await response.json();

        if(!json.ok) return { message: json.message }
        
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // Redirect to same page with success = true
    redirect('/app/my-account?create-success=true');
}
