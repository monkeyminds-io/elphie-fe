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
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getCookie } from '../cookies';
import bcrypt from 'bcrypt';
import { getUserById, updateUser as update } from '../endpoints';


// =============================================================================
// Actions Form Schemas
// =============================================================================
const FormSchema = z.object({
    firstname: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    lastname: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
    email: z.string().email({  
            message: 'Invalid email address.' 
        }),
    currentPassword: z.union([z.string().length(0), z.string()])
        .optional()
        .transform(value => value === "" ? undefined : value),
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

const GeneralInfo = FormSchema
.refine(
    async (data) => {
        const response = await fetch(getUserById(getCookie('user-id')?.value as string));
        const json = await response.json();
        const user = json.data;
        if(data.currentPassword === undefined) return true
        return await bcrypt.compare(data.currentPassword, user.password)
    }, {
        message: 'Must match your current password.',
        path: ['currentPassword']
})
.refine(
    async data => { 
        if(data.newPassword === undefined && data.currentPassword !== undefined) return false
        return true
    }, {
        message: "To update password you must specify a valid New Password.",
        path: ['newPassword']
});

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
export const updateUser = async (id: string, prevState: State | undefined, formData: FormData) => {

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
        // Encripting password
        const passwordSalt = bcrypt.genSaltSync(10);
        const hashedPassword = validatedFields.data.newPassword !== undefined ? bcrypt.hashSync(validatedFields.data.newPassword, passwordSalt) : null;

        // Update user
        const response = await fetch(update(id), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: validatedFields.data.firstname !== undefined ? validatedFields.data.firstname : null,
                lastName: validatedFields.data.lastname !== undefined ? validatedFields.data.lastname : null,
                email: validatedFields.data.email !== undefined ? validatedFields.data.email : null,
                password: validatedFields.data.newPassword !== undefined ? hashedPassword : null,
                accountType: validatedFields.data.accountType !== undefined ? validatedFields.data.accountType : null,
            })
        })

        if(!response.ok) return { message: "Ups... Failed to update user." }

    } catch (error) {
        return { message: 'Ups... Failed to update user.' }
    }

    // Redirect to same page with success = true
    redirect('/app/my-account?success=true');
}
