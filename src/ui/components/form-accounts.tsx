'use client'
// =============================================================================
// File Name: ui/components/form-accounts.tsx
// File Description:
// This file contains the code of the React Component for the Accounts General Form.
// This form is used for Create and Edit pages.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { accountsCreate, accountsUpdate } from '@/libs/actions/accounts';
import { useFormState } from 'react-dom';
import { AppInput } from '../elements/inputs';

// =============================================================================
// Components Props
// =============================================================================
type FromProps = {
    id: string,
    action: string,
    accountId?: string | null,
    defaultValues?: {
        name: string,
        type: string,
        iban: string,
        balance: string,
        currency: string
    } | null,
    buttonText: string
}
// =============================================================================
// React Components
// =============================================================================
export const FormAccounts = ({id, action, accountId = null, defaultValues = null, buttonText}: FromProps) => {

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Binding the Account Id in the accountsUpdate action
    const accountsUpdateWithId = accountsUpdate.bind(null, accountId !== null ? accountId : undefined)

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(action === 'create' ? accountsCreate : accountsUpdateWithId, initialState);

    return (
        <form id={id} action={dispatch} className='px-6 py-4'>

            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Account name
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                        <AppInput name={"name"} placeholder={"Account Name"} errors={state?.errors?.name} defaultValue={defaultValues ? defaultValues.name : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Account type
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput name={"type"} placeholder={"Account Type"} errors={state?.errors?.type} defaultValue={defaultValues ? defaultValues.type : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Account IBAN
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput name={"iban"} placeholder={"Account IBAN"} errors={state?.errors?.iban} defaultValue={defaultValues ? defaultValues.iban : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Account balance
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput name={"balance"} placeholder={"Account Balance"} errors={state?.errors?.balance} defaultValue={defaultValues ? defaultValues.balance : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="firstname" className="inline-block text-sm text-gray-800 mt-2.5">
                        Account currency
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput name={"currency"} placeholder={"Account Currency"} errors={state?.errors?.currency} defaultValue={defaultValues ? defaultValues.currency : ''}/>
                    </div>
                </div>
                {/* End Col */}

            </div>

            <div className="mt-5 flex justify-end gap-x-2">

                {/* Errors Block */}
                <div aria-live="polite" aria-atomic="true">
                    {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
                </div>
                {/* End Errors Block */}

                {/* Submit Button */}
                <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                {buttonText}
                </button>
            </div>

        </form>
    )
}