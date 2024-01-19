'use server'
// =============================================================================
// File Name: libs/actions/accounts.ts
// File Description:
// This file contains the code for all the Accounts Service Form actions.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createAccount, deleteAccount } from '../endpoints';
import { getCookie } from '../cookies';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    name: z.string({
        required_error: "Account Name is a required field."
    }),
    type: z.string({
        required_error: "Account Type is a required field."
    }),
    iban: z.string({
        required_error: "Account IBAN is a required field."
    }),
    balance: z.string({
        required_error: "Account Balance is a required field."
    }),
    currency: z.string({
        required_error: "Account Currency is a required field."
    }),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        name?: string[],
        type?: string[],
        iban?: string[],
        balance?: string[],
        currency?: string[],
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const accountsCreate = async (prevState: State | undefined, formData: FormData) => {

    // Validate fields
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    // Sending errors if any
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Falied to submit form.',
        }
    }

    // Action Processes
    try {
        // Add account
        const response = await fetch(createAccount(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: getCookie('user-id')?.value,
                name: validatedFields.data.name,
                type: validatedFields.data.type,
                iban: validatedFields.data.iban,
                balance: parseFloat(validatedFields.data.balance),
                currency: validatedFields.data.currency,
            })
        })
        const json = await response.json();

        if(!json.ok) return { message: "Failed to create account."}

    } catch (error) {
        return { message: 'Failed to create account.' }
    }

    // If needed revalidate and redirect to URL
    revalidatePath('/app/accounts');
    redirect('/app/accounts');
}

export const accountsUpdate = async (id: string | undefined, prevState: State | undefined, formData: FormData) => {

    // Validate fields
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
    } catch (error) {
        return {
            message: 'API ERROR: Failed to perform API call.'
        }
    }

    // If needed revalidate and redirect to URL
    // revalidatePath('#');
    // redirect('#');
}

export const accountsDelete = async (id: string, name: string) => {
    // Action Processes
    try {
        await fetch(deleteAccount(id), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/app/savings');
        return {success: `Account ${name} was deleted ok.`}
    } catch (error) {
        return { message: 'Failed to delete Saving.' }
    }
}
