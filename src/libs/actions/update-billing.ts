'use server'
// =============================================================================
// File Name: libs/actions/update-billing.ts
// File Description:
// This file contains the code of the Action Update Billing Information
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { updateBilling as update } from '../endpoints';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    addressLine1: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    addressLine2: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    county: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    eircode: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    cardName: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    cardNumber: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    cardExpiry: z.union([
        z.string().length(0), 
        z.string().regex(new RegExp('^(0[1-9]|1[0-2])[ ]\\/[ ]?([0-9]{4}|[0-9]{2})$'), {
            message: 'Invalid Expiry date.'
        })])
    .optional()
    .transform(value => value === "" ? undefined : value),
    cardCVC: z.union([
        z.string().length(0),
        z.string().regex(new RegExp('^[0-9]{3,4}$'), {
            message: 'Invalid CVC number.'
        })])
    .optional()
    .transform(value => value === "" ? undefined : value),
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
export const updateBilling = async (id: string, prevState: State | undefined, formData: FormData) => {

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
        
        const response = await fetch(update(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: cookies().get('user-id')?.value,
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
        
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // Redirect to same page with success = true
    redirect('/app/my-account?update-success=true');
}
