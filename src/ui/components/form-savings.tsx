'use client'
// =============================================================================
// File Name: ui/components/form-savings.tsx
// File Description:
// This file contains the code of the React Component for the Savings General Form.
// This form is used for Create and Edit pages.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { savingsCreate, savingsUpdate } from '@/libs/actions/savings';
import { useFormState } from 'react-dom';
import { AppInput, AppInputGroup, AppSelect } from '../elements/inputs';
import { euroFormatter } from '@/libs/utiles';
import { Account } from '@/libs/definitions';

// =============================================================================
// Components Props
// =============================================================================
type FromProps = {
    id: string,
    action: string,
    savingId?: string | null,
    defaultValues?: {
        accountId: string,
        name: string,
        targetAmount: string,
        targetDate: string,
    } | null,
    buttonText: string,
    accounts: Account[]
}
// =============================================================================
// React Components
// =============================================================================
export const FormSavings = ({id, action, savingId = null, defaultValues = null, buttonText, accounts}: FromProps) => {

    const accountIds = accounts.map(account => account.id)
    const accountNames = accounts.map(account => account.name)

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Binding the Account Id in the savingsUpdate action
    const savingsUpdateWithId = savingsUpdate.bind(null, savingId!)

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(action === 'create' ? savingsCreate : savingsUpdateWithId, initialState);

    return (
        <form id={id} action={dispatch} className='px-6 py-4'>

            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-4 sm:gap-6">

                <div className="sm:col-span-3">
                    <label htmlFor="accountId" className="inline-block text-sm text-gray-800 mt-2.5">
                        Saving account
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                        <AppSelect name={'accountId'} optionsValue={accountIds} optionsText={accountNames} errors={state?.errors?.accountId} defaultValue={defaultValues ? defaultValues.accountId : 'Select account to link'}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="name" className="inline-block text-sm text-gray-800 mt-2.5">
                        Savings name
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput name={"name"} placeholder={"Savings name"} errors={state?.errors?.name} defaultValue={defaultValues ? defaultValues.name : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="targetAmount" className="inline-block text-sm text-gray-800 mt-2.5">
                        Target amount
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInputGroup name={"targetAmount"} placeholder={"Target amount"} errors={state?.errors?.targetAmount} defaultValue={defaultValues ? euroFormatter.format(parseFloat(defaultValues.targetAmount)) : ''}/>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="targetDate" className="inline-block text-sm text-gray-800 mt-2.5">
                        Target date
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:flex sm:space-y-0">
                    <AppInput type={'date'} name={"targetDate"} placeholder={"Transaction date"} errors={state?.errors?.targetDate} defaultValue={defaultValues ? defaultValues.targetDate : ''}/>
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