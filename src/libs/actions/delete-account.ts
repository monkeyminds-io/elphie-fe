'use server'
// =============================================================================
// File Name: libs/actions/delete-account.ts
// File Description:
// This file contains the code of the Delete Account Form Action.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { deleteBilling, deleteUser, getBillingInfoByUserId } from '../endpoints';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    accountEmail: z.string(),
    confirmEmail: z.string({
        required_error: 'You must add your email to delete the account.'
    }).email({
        message: 'Invalid email.'
    }),
}).refine(data => data.confirmEmail === data.accountEmail, {
    message: 'This is not the account email.',
    path: ['confirmEmail']
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        confirmEmail?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const deleteAccount = async (userId: string, prevState: State | undefined, formData: FormData) => {

    // Validate fields data
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
        const billingResponse = await fetch(getBillingInfoByUserId(userId));
        const billingJson = await billingResponse.json();

        if(billingJson.ok) {
            const billing = billingJson.data;
            const deleteBillingResponse = await fetch(deleteBilling(billing.id), {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const deleteBillingJson = await deleteBillingResponse.json();

            if(!deleteBillingJson.ok) return { message: deleteBillingJson.message }
        }
        
        const userResponse = await fetch(deleteUser(userId), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const userJson = await userResponse.json();

        if(!userJson.ok) return { message: userJson.message }


    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // Redirect to Home page
    redirect(`${process.env.WEBSITE_DOMAIN}/`);
}
