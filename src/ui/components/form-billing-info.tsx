'use client'
// =============================================================================
// File Name: ui/components/form-billing-info.tsx
// File Description:
// This file contains the code of the React component Billing Info Form
// of the My Account Page
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { MouseEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { useFormState } from 'react-dom'
import { formatCardExpiryInput, formatCardNumberInput, formatEircodeInput } from '@/libs/utiles'
import { AppInput, AppSelect } from '../elements/inputs'
import { updateBilling } from '@/libs/actions/update-billing'
import { BillingInfo } from '@/libs/definitions'
import { createBilling } from '@/libs/actions/create-billing'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormBillingInfoUpdate = ({ billing }: { billing: BillingInfo}) => {

    // Set success message
    const searchParams = useSearchParams();
    const updateSuccess = searchParams.get('update-success') || false;

    // EVENT HANDLERS ////////////////
    /**
     * Used to handle on click event of the cancel button
     */
    const handleCancel = (event: MouseEvent) => {
        event.preventDefault();
        const form: HTMLFormElement | null = document?.querySelector('#form-billing-info');
        if(form !== null) form.reset();
    }

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Adding the user Id to the updateUser action
    const  updateBillingWithId = updateBilling.bind(null, billing.id);

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(updateBillingWithId, initialState);

    return (
        <form id='form-billing-info' action={dispatch}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                
                <div className="sm:col-span-3">
                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                        Billing address
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:space-y-4">

                        <AppInput 
                        name={'addressLine1'} 
                        placeholder={'Address line 1'} 
                        errors={state?.errors?.addressLine1}
                        defaultValue={billing !== null ? billing.addressLine1 : ''}/>

                        <AppInput 
                        name={'addressLine2'} 
                        placeholder={'Address line 2 (Optional)'} 
                        errors={state?.errors?.addressLine2} 
                        defaultValue={billing !== null ? billing.addressLine2 : ''}/>

                        <div className="grid sm:flex gap-3">

                            <AppSelect 
                            name={'county'} 
                            optionsValue={[
                                'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 
                                'Galway', 'Kerry', 'Kildare', 'Kilkenny','Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
                                'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
                            ]} 
                            optionsText={[
                                'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 
                                'Galway', 'Kerry', 'Kildare', 'Kilkenny','Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
                                'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
                            ]}
                            errors={state?.errors?.county} 
                            defaultValue={billing !== null ? billing.county : ''}/>

                            <AppInput 
                            name={'eircode'} 
                            placeholder={'Eircode'} 
                            defaultValue={billing !== null ? billing.eircode : ''}
                            errors={state?.errors?.eircode} 
                            max={8} 
                            isUppercase={true} 
                            onChange={(e) => formatEircodeInput(e)}/>

                        </div>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                        Payment method
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:space-y-4">

                        <AppInput 
                        name={'cardName'} 
                        placeholder={'Name in card'} 
                        errors={state?.errors?.cardName}/>

                        <AppInput 
                        name={'cardNumber'} 
                        placeholder={'Card number'} 
                        errors={state?.errors?.cardNumber} 
                        onChange={(e) => formatCardNumberInput(e)} 
                        max={19}/>

                        <div className="grid sm:flex gap-3">

                            <AppInput 
                            name={'cardExpiry'} 
                            placeholder={'Expiry date'} 
                            errors={state?.errors?.cardExpiry} 
                            onChange={(e) => formatCardExpiryInput(e)} 
                            max={7}/>

                            <AppInput 
                            name={'cardCvc'} 
                            placeholder={'CVC'} 
                            errors={state?.errors?.cardCVC} 
                            max={3}/>

                        </div>
                    </div>
                </div>
                {/* End Col */}
                
            </div>
            {/* End Grid */}

            <div className="mt-5 flex justify-end gap-x-2">

                {/* Success Block */}
                <div aria-live="polite" aria-atomic="true">
                    {updateSuccess && <p className="mt-2 text-sm text-green-500">Changes saved successfully!!</p>}
                </div>
                {/* End Success Block */}

                {/* Errors Block */}
                <div aria-live="polite" aria-atomic="true">
                    {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
                </div>
                {/* End Errors Block */}

                <button type="button" onClick={(e) => handleCancel(e)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Cancel
                </button>

                <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Save changes
                </button>
            </div>
        </form>
    )
}

export const FormBillingInfoCreate = ({ userId }: { userId: string}) => {

    // Set success message
    const searchParams = useSearchParams();
    const createSuccess = searchParams.get('create-success');

    // EVENT HANDLERS ////////////////
    /**
     * Used to handle on click event of the cancel button
     */
    const handleCancel = (event: MouseEvent) => {
        event.preventDefault();
        const form: HTMLFormElement | null = document?.querySelector('#form-billing-info');
        if(form !== null) form.reset();
    }

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState = { errors: {}, message: null! };

    // Adding the user Id to the updateUser action
    const  createBillingWithId = createBilling.bind(null, userId);

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(createBillingWithId, initialState);

    return (
        <form id='form-billing-info' action={dispatch}>
            {/* Grid */}
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                
                <div className="sm:col-span-3">
                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                        Billing address
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:space-y-4">

                        <AppInput 
                        name={'addressLine1'} 
                        placeholder={'Address line 1'} 
                        errors={state?.errors?.addressLine1}/>

                        <AppInput 
                        name={'addressLine2'} 
                        placeholder={'Address line 2 (Optional)'} 
                        errors={state?.errors?.addressLine2}/>

                        <div className="grid sm:flex gap-3">

                            <AppSelect 
                            name={'county'} 
                            optionsValue={[
                                'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 
                                'Galway', 'Kerry', 'Kildare', 'Kilkenny','Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
                                'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
                            ]} 
                            optionsText={[
                                'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 
                                'Galway', 'Kerry', 'Kildare', 'Kilkenny','Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
                                'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
                            ]}
                            errors={state?.errors?.county}/>

                            <AppInput 
                            name={'eircode'} 
                            placeholder={'Eircode'}
                            errors={state?.errors?.eircode} 
                            max={8} 
                            isUppercase={true} 
                            onChange={(e) => formatEircodeInput(e)}/>

                        </div>
                    </div>
                </div>
                {/* End Col */}

                <div className="sm:col-span-3">
                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                        Payment method
                    </label>
                </div>
                {/* End Col */}

                <div className="sm:col-span-9">
                    <div className="space-y-2 sm:space-y-4">

                        <AppInput 
                        name={'cardName'} 
                        placeholder={'Name in card'} 
                        errors={state?.errors?.cardName}/>

                        <AppInput 
                        name={'cardNumber'} 
                        placeholder={'Card number'} 
                        errors={state?.errors?.cardNumber} 
                        onChange={(e) => formatCardNumberInput(e)} 
                        max={19}/>

                        <div className="grid sm:flex gap-3">

                            <AppInput 
                            name={'cardExpiry'} 
                            placeholder={'Expiry date'} 
                            errors={state?.errors?.cardExpiry} 
                            onChange={(e) => formatCardExpiryInput(e)} 
                            max={7}/>

                            <AppInput 
                            name={'cardCVC'} 
                            placeholder={'CVC'} 
                            errors={state?.errors?.cardCVC} 
                            max={3}/>

                        </div>
                    </div>
                </div>
                {/* End Col */}
                
            </div>
            {/* End Grid */}

            <div className="mt-5 flex justify-end gap-x-2">

                {/* Success Block */}
                <div aria-live="polite" aria-atomic="true">
                    {createSuccess && <p className="mt-2 text-sm text-green-500">Changes saved successfully!!</p>}
                </div>
                {/* End Success Block */}

                {/* Errors Block */}
                <div aria-live="polite" aria-atomic="true">
                    {state?.message && <p className="mt-2 text-sm text-red-500">{state.message}</p>}
                </div>
                {/* End Errors Block */}

                <button type="button" onClick={(e) => handleCancel(e)}
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Cancel
                </button>

                <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                Save changes
                </button>
            </div>
        </form>
    )
}