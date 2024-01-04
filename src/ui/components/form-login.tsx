'use client'
// =============================================================================
// File Name: ui/component/form-login.tsx
// File Description:
// This file contains the code of the React Login Form Component of the Website.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { handleLogin } from '@/libs/actions/login';
import { useFormState, useFormStatus } from 'react-dom';

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormLogin = () => {

    // Form validation
    const [errorMessage, dispatch] = useFormState(handleLogin, undefined);

    // Form status
    const { pending } = useFormStatus();

    return (
        <form className="grid gap-y-4" action={dispatch}>
            
            {/* Fields Block */}
            {/* <InputBlock name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
            <InputBlock type={'password'} name={'password'} label={'Password'} placeholder={'Password'} errors={state?.errors?.password} /> */}
            <div>
                <label htmlFor='email' className="sr-only">Email</label>
                <input type='email' name='email' id='email' placeholder='Email' required
                className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>
            <div>
                <label htmlFor='password' className="sr-only">Password</label>
                <input type='password' name='password' id='password' placeholder='Password' required
                className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>
            {/* End Fields Block */}

            {/* Forgot Password Link */}
            <a className="text-sm text-indigo-600 hover:underline font-medium" href="/recover-password">Forgot password?</a>

            {/* Submit Button */}
            <button type="submit" aria-disabled={pending}
            className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Go to app
            </button>

            {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </form>
    )
}