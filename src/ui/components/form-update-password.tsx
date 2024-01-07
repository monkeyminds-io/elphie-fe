'use client'
// =============================================================================
// File Name: libs/components/form-update-password.tsx
// File Description:
// This file contains the code of the React Component Update Password Form.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { State, updatePassword } from "@/libs/actions/update-password";
import { useFormState } from "react-dom";
import { InputBlock } from "../elements/inputs";

// =============================================================================
// React Components
// =============================================================================
export const FormUpdatePassword = () => {

    // Validation
    const initialState: State = { errors: {}, message: null! };
    const [state, dispatch] = useFormState(updatePassword, initialState);

    return (
        <form id='form-update-password' className="grid gap-y-4" action={dispatch}>
            
            {/* Form Group */}
            <InputBlock type={'password'} name={'password'} label={'Password'} placeholder={'Password (Must be 8 characters long)'} errors={state?.errors?.password} />
            <InputBlock type={'password'} name={'passwordAgain'} label={'Password again'} placeholder={'Password again (Must be equal to password)'} errors={state?.errors?.passwordAgain} />
            {/* End Form Group */}

            {/* Submit Button */}
            <button type="submit"
            className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Update password
            </button>
            {/* End Submit Button */}
            
            {/* Errors Block */}
            {state?.message && 
                <div id={'form-error'} aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>}
            {/* End Errors Block */}
            
        </form>
    )
}