'use server'
// =============================================================================
// File Name: libs/actions/savings.ts
// File Description:
// This file contains the actions of the Savings Service forms.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { createSavings, createTransaction, deleteSavings, updateSavings, updateTransaction } from '../endpoints';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    name: z.string(),
    accountId: z.string(),
    targetAmount: z.string(),
    targetDate: z.string(),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {};
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const savingsCreate = async (prevState: State | undefined, formData: FormData) => {

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
        // Add Savings
        const response = await fetch(createSavings(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: cookies().get('user-id')?.value,
                accountId: validatedFields.data.accountId,
                name: validatedFields.data.name,
                targetAmount: validatedFields.data.targetAmount.replace(',', ''),
                targetDate: validatedFields.data.targetDate
            })
        })
        const json = await response.json();

        console.log(json);

        if(!json.ok) return { message: "Invalid data. Failed to submit form."}

    } catch (error) {
        return { message: 'Server Error. Failed to submit form.' }
    }

    // Redirect to and refresh main Savings page
    revalidatePath('/app/savings');
    redirect('/app/savings');
}

export const savingsUpdate = async (id: string, prevState: State | undefined, formData: FormData) => {

    // Validate fields
    const validatedFields = FormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    console.log(validatedFields);

    // Sending errors if any
    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Falied to submit form.',
        }
    }

    // Action Processes
    try {
        // Update Savings
        const response = await fetch(updateSavings(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accountId: validatedFields.data.accountId,
                name: validatedFields.data.name,
                targetAmount: validatedFields.data.targetAmount.replace(',', ''),
                targetDate: validatedFields.data.targetDate
            })
        })
        const json = await response.json();

        console.log(json);

        if(!json.ok) return { message: "Invalid data. Failed to submit form." }

    } catch (error) {
        return { message: 'Server Error. Failed to submit form.' }
    }

    // Redirect to and refresh main Savings page
    revalidatePath('/app/savings');
    redirect('/app/savings');
}

export const savingsDelete = async (id: string) => {
    // Action Processes
    try {
        await fetch(deleteSavings(id), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/app/savings');
        return {success: `Saving deleted ok.`}
    } catch (error) {
        return { message: 'Failed to delete Saving.' }
    }
}