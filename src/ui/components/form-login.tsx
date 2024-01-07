'use client'
// =============================================================================
// File Name: ui/component/form-login.tsx
// File Description:
// This file contains the code of the React Login Form Component of the Website.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { State, handleLogin } from '../../libs/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import { InputBlock } from '../elements/inputs';

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormLogin = () => {

    // Form validation
    const initialState: State = { message: null, errors: {} }
    const [state, dispatch] = useFormState(handleLogin, initialState);

    return (
        <form id='form-login' className="grid gap-y-4 mt-5" action={dispatch}>
            
            {/* Fields Block */}
            <InputBlock name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
            <InputBlock type={'password'} name={'password'} label={'Password'} placeholder={'Password'} errors={state?.errors?.password} />
            {/* End Fields Block */}

            {/* Forgot Password Link */}
            <a className="text-sm text-indigo-600 hover:underline font-medium" href="/recover-password">Forgot password?</a>

            {/* Submit Button */}
            <button type="submit"
            className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Go to app
            </button>

            {/* TODO Implement a global errors modal component */}
            {/* { state?.message && <ModalError message={state?.message}/> } */}
            
        </form>
    )
}