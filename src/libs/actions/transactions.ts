'use server'
// =============================================================================
// File Name: libs/actions/transactions.ts
// File Description:
// This file contains the code of the Transactions Service Forms Actions.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createTransaction, deleteTransaction, updateTransaction } from '../endpoints';
import { cookies } from 'next/headers';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    accountId: z.string(),
    reference: z.string(),
    amount: z.string(),
    date: z.string(),
});

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        accountId?: string[],
        reference?: string[],
        amount?: string[],
        date?: string[],
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const transactionsCreate = async (prevState: State | undefined, formData: FormData) => {

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
        // Add Transaction
        const response = await fetch(createTransaction(), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: cookies().get('user-id')?.value,
                accountId: validatedFields.data.accountId,
                reference: validatedFields.data.reference,
                amount: validatedFields.data.amount.replace(',', ''),
                date: validatedFields.data.date
            })
        })
        const json = await response.json();

        if(!json.ok) return { message: "Invalid data. Failed to submit form."}

    } catch (error) {
        return { message: 'Server Error. Failed to submit form.' }
    }

    // Redirect to and refresh main Transactions page
    revalidatePath('/app/transactions');
    redirect('/app/transactions');
}

export const transactionsUpdate = async (id: string, prevState: State | undefined, formData: FormData) => {

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
        // Update Transaction
        const response = await fetch(updateTransaction(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accountId: validatedFields.data.accountId,
                reference: validatedFields.data.reference,
                amount: validatedFields.data.amount.replace(',', ''),
                date: validatedFields.data.date
            })
        })
        const json = await response.json();

        console.log(json);

        if(!json.ok) return { message: "Invalid data. Failed to submit form." }

    } catch (error) {
        return { message: 'Server Error. Failed to submit form.' }
    }

    // Redirect to and refresh main Transactions page
    revalidatePath('/app/transactions');
    redirect('/app/transactions');
}

export const transactionsDelete = async (id: string) => {
    // Action Processes
    try {
        await fetch(deleteTransaction(id), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/app/transactions');
        return {success: `Transaction deleted ok.`}
    } catch (error) {
        return { message: 'Failed to delete Transaction.' }
    }
}