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
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { deleteSavings } from '../endpoints';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    id: z.string(),
});

// Form Schema Omits ////////////////
const actionForm = FormSchema.omit({id: true});

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
export const savingsDelete = async (id: string, name: string) => {
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
        return {success: `Saving ${name} was deleted ok.`}
    } catch (error) {
        return { message: 'Failed to delete Saving.' }
    }
}