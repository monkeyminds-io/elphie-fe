'use client'
// =============================================================================
// File Name: ui/components/form-delete-account.tsx
// File Description:
// This file contains the code of the React component Form Delete Account.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { AppInput } from '../elements/inputs'
import { useFormState } from 'react-dom';
import { deleteAccount } from '@/libs/actions/delete-account';

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormDeleteAccount = ({ userId, email }: { userId: string, email: string }) => {

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Adding the user Id to the updateUser action
    const deleteAccountWithId = deleteAccount.bind(null, userId);

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(deleteAccountWithId, initialState);

    return (
        <form id='form-delete-account' action={dispatch}>

            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                
                <div className="sm:col-span-3">
                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                        Delete account
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="flex gap-x-2 sm:gap-x-4">
                        <input type="email" name={'accountEmail'} id={'accountEmail'} defaultValue={email} className='hidden' />
                        <AppInput name={'confirmEmail'} placeholder={'Confirm email'} errors={state?.errors?.confirmEmail} type={'email'}/>
                    </div>
                </div>
                {/* End Col */}
                
            </div>
            {/* End Grid */}

            <div className="mt-5 flex justify-end gap-x-2">
                
                {/* Errors Block */}
                <div aria-live="polite" aria-atomic="true">
                    {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
                </div>
                {/* End Errors Block */}

                {/* Submit Button */}
                <button type="submit" className="py-2 px-3 flex items-center justify-center gap-x-2 min-w-[160px] text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Delete account
                </button>
            </div>

        </form>
    )
}