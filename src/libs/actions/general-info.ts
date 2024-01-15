'use server'
// =============================================================================
// File Name: libs/actions/general-info.ts
// File Description:
// This file contains the code of the Form Action for the My Account Page 
// General Information Form of the Application part of the project.
// =============================================================================
// =============================================================================
// Actions Imports
// =============================================================================
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Schema, z } from 'zod';
import { getCookie } from '../cookies';
import bcrypt from 'bcrypt';

// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    firstname: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(e => e === "" ? undefined : e),
    lastname: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(e => e === "" ? undefined : e),
    email: z.string().email({  
            message: 'Invalid email address.' 
        }),
    currentPassword: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(e => e === "" ? undefined : e),
    newPassword: z.union([
            z.string().length(0, {
                message: "Must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special char and be 8 chars long."
            }), 
            z.string().regex(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/), {
                message: "Must contain at least 1 lowercase, 1 uppercase, 1 number, 1 special char and be 8 chars long."
            })
        ])
        .optional()
        .transform(e => e === "" ? undefined : e),
    accountType: z.enum(['elphie', 'calphie'], {
        invalid_type_error: 'You must choose a plan.',
    }),
});

const userPassword = getCookie('user-password')?.value;

let GeneralInfo: Schema;

if(typeof userPassword !== 'undefined') {
    GeneralInfo = FormSchema
    .refine(
        async (data) => {
            if(data.currentPassword === undefined) return true
            return await bcrypt.compare(data.currentPassword, userPassword)
        }, {
            message: 'Must match your current password.',
            path: ['currentPassword']
    })
    .refine(
        data => { 
            if(data.newPassword === undefined && data.currentPassword !== undefined) return false
            return true
        }, {
            message: "To update password you must specify a valid New Password.",
            path: ['newPassword']
    });
}

// =============================================================================
// Actions Types
// =============================================================================
export type State = {
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        currentPassword?: string[];
        newPassword?: string[];
        accounType?: string[];
    };
    message?: string | null;
};

// =============================================================================
// Actions Functions
// =============================================================================
export const updateUser = async (prevState: State | undefined, formData: FormData) => {

    // Validate form data
    const validatedFields = await GeneralInfo.safeParseAsync(
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
        // API call goes here

    } catch (error) {
        return { message: 'API ERROR: Failed to perform API call.' }
    }

    // If needed revalidate and redirect to URL
    revalidatePath('/app/my-account');
    redirect('/app/my-account?success=true');
}
