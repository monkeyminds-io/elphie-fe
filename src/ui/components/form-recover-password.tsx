'use client'
// =============================================================================
// File Name: ui/components/form-recover-passowrd.tsx
// File Description:
// This file contains the code for the Recover Password Form
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { State, findUserByEmail } from '@/libs/actions/recover-password';
import { InputBlock } from '@/ui/elements/inputs'
import { useFormState } from 'react-dom';

// =============================================================================
// React Components
// =============================================================================
export const FormRecoverPassword = () => {

    // Validation
    const initialState: State = { errors: {}, message: null! };
    const [state, dispatch] = useFormState(findUserByEmail, initialState);

    return (
        <form id='form-revocer-password' className="grid gap-y-4" action={dispatch}>
            {/* Form Group */}
            <InputBlock type={'email'} name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
            {/* End Form Group */}

            {/* Submit Button */}
            <button type="submit"
            className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Find account
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