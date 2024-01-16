'use client' // This statement says to NextJS that this is a full Front End component

// =============================================================================
// File Name: ui/components/form-register.tsx
// File Description:
// This file contains the code of the React Component Form Register
// =============================================================================

// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { ChangeEvent } from 'react'
import { useFormState } from 'react-dom'
import { State, registerUser } from '@/libs/actions/register'
import { formatCardExpiryInput, formatCardNumberInput, formatEircodeInput } from '@/libs/utiles'
import { SliderDot, SliderDotsWrapper, Slider, SliderNext, SliderPrev } from './slider'
import { InputBlock, SelectBlock } from '../elements/inputs'
import { Heading } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'

// =============================================================================
// React Components
// =============================================================================
export const FormRegister = () => {

    /**
     * Used to handle the Radio Buttons onChange event to hide or dissplay the Billing Slide depending on Plan Selection
     * if selection is "Elphie Plan" then show slide
     * if selection is "Calphie Plan" then hide slide
     * PARAMS:
     * @param {ChangeEvent<HTMLInputElement>} event
     * RETURNS:
     * @returns {void}
     */
    const handleOnChangePlanInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const checkedValue: string = event?.target.value;
        const billingSlide: HTMLElement | null | undefined = document?.querySelector('#billing-slide')?.parentElement;
        const lastDot: Element | null | undefined = document?.querySelector('.hs-carousel-pagination')?.lastElementChild;
        if(checkedValue === 'elphie') {
            billingSlide?.classList.remove('hidden');
            lastDot?.classList.remove('hidden');
        }
        if(checkedValue === 'calphie') {
            billingSlide?.classList.add('hidden');
            lastDot?.classList.add('hidden');
        }
    }

    // Data Validation object that will receive any errors on Submit in form of messages.
    const initialState: State = { errors: {}, message: null! };

    /**
     * Using the React function useFormState we can pass the function that is responsible for the actual action of the form
     * and an initial state objet to receove the potential errors on submit.
     * Using JavaScript / TypeScript destructuring we create 2 elements:
     *    1 -> The state variable that will contain the potential errors
     *    2 -> The dispatch method / function that points at the actual action function
     */
    const [state, dispatch] = useFormState(registerUser, initialState);

    // This array contains the code of the actual slides for the form multistep
    const slides = [
        <div className='flex flex-col gap-y-4'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 1 of 3: </span>Login information</Paragraph>
            {/* Fields Block */}
            <div className="flex flex-col gap-4 md:flex-row">
                <InputBlock name={'firstname'} label={'First name'} placeholder={'First name'} errors={state?.errors?.firstname}/>
                <InputBlock name={'lastname'} label={'Last name'} placeholder={'Last name'} errors={state?.errors?.lastname}/>
            </div>
            <InputBlock type={'email'} name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
            <InputBlock type={'password'} name={'password'} label={'Password'} placeholder={'Password (Must be 8 characters long)'} errors={state?.errors?.password} />
            <InputBlock type={'password'} name={'passwordAgain'} label={'Password again'} placeholder={'Password again (Must be equal to password)'} errors={state?.errors?.passwordAgain}/>
        </div>,
        <div className='flex flex-col gap-y-4'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 2 of 3: </span>Pick your plan</Paragraph>
            {/* Fields Block */}
            <div className="grid md:grid-cols-2 gap-2">
                <label htmlFor="calphie-option" className="flex flex-col gap-y-4 p-4 w-full bg-white border border-gray-200 rounded-[12px] hover:border-indigo-500 cursor-pointer">
                    <input type="radio" id='calphie-option' name="accountType" value='calphie' onChange={(e) => {handleOnChangePlanInput(e)}}
                    className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
                    <Heading level={3} title={'Calphie plan'}>Calphie</Heading>
                    <Paragraph>No commitments, no card details needed, cancel anytime.</Paragraph>
                    <span className='text-2xl'>Free</span>
                </label>

                <label htmlFor="elphie-option" className="flex flex-col gap-y-4 p-4 w-full bg-white border border-gray-200 rounded-[12px] hover:border-indigo-500 cursor-pointer">
                    <input type="radio" id='elphie-option' name="accountType" value='elphie' onChange={(e) => {handleOnChangePlanInput(e)}}
                    className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
                    <Heading level={3} title={'Calphie plan'}>Elphie</Heading>
                    <Paragraph>Get all the existing and future features to get full control.</Paragraph>
                    <span className='text-2xl'>9,99 € month</span>
                </label>
            </div>
            {/* Errors Block */}
            {state?.errors?.accountType && 
                    <div id={'accountType-error'} aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.errors?.accountType}</p>
                    </div>}
                {/* End Errors Block */}
        </div>,
        <div className='flex flex-col gap-y-4' id='billing-slide'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 3 of 3: </span>Billing information</Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex flex-col gap-y-4 w-full">
                    <Paragraph styles='text-gray-800'>Address info:</Paragraph>
                    <InputBlock name={'addressLine1'} label={'Address line 1'} placeholder={'Address line 1'} errors={state?.errors?.addressLine1} />
                    <InputBlock name={'addressLine2'} label={'Address line 2 (Optional)'} placeholder={'Address line 2 (Optional)'} errors={state?.errors?.addressLine2} />
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <SelectBlock name={'county'} label={'County'} placeholder={'County'} errors={state?.errors?.county} 
                        options={[
                            'Antrim', 'Armagh', 'Carlow', 'Cavan', 'Clare', 'Cork', 'Derry', 'Donegal', 'Down', 'Dublin', 'Fermanagh', 
                            'Galway', 'Kerry', 'Kildare', 'Kilkenny','Laois', 'Leitrim', 'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 
                            'Monaghan', 'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Tyrone', 'Waterford', 'Westmeath', 'Wexford', 'Wicklow',
                        ]} />
                        <InputBlock onChange={(e) => formatEircodeInput(e)} max={8} name={'eircode'} label={'Eircode'} placeholder={'Eircode'} errors={state?.errors?.eircode} />
                    </div>
                </div>
                <div className="hidden border-s border-gray-200 sm:block"></div>
                <div className="flex flex-col gap-y-4 w-full">
                    <Paragraph styles='text-gray-800'>Card info:</Paragraph>
                    <InputBlock name={'cardName'} label={'Card name'} placeholder={'Name in card'} errors={state?.errors?.cardName} />
                    <InputBlock onChange={(e) => formatCardNumberInput(e)} max={19} name={'cardNumber'} label={'Card number'} placeholder={'0000 0000 0000 0000'} errors={state?.errors?.cardNumber} />
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <InputBlock onChange={(e) => formatCardExpiryInput(e)} max={7} name={'cardExpiry'} label={'Card expiry'} placeholder={'00 / 00'} errors={state?.errors?.cardExpiry} />
                        <InputBlock max={3} name={'cardCVC'} label={'Card CVC'} placeholder={'CVC'} errors={state?.errors?.cardCVC} />
                    </div>
                </div>
            </div>
        </div>,
        <div className='flex flex-col gap-y-4 h-full'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Final step: </span>Terms & Conditions</Paragraph>
            <div className='flex flex-col gap-y-4 pt-4 mx-auto h-full max-w-[400px]'>
                <svg className='flex-shrink-0 w-[40px] h-[40px] text-indigo-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12"/>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                </svg>
                <Paragraph>Great!! Now you just need to read and accept the Terms & Conditions and Create your account.</Paragraph>
                {/* Checkbox Terms and Concitions */}
                <label htmlFor="termsAndConditions" className="flex items-center gap-x-1 text-sm text-gray-500 cursor-pointer">
                    <input id="termsAndConditions" name="termsAndConditions" type="checkbox" aria-describedby='termsAndConditions-error'
                    className="shrink-0 me-2 border-gray-200 rounded text-indigo-600 pointer-events-none focus:ring-indigo-500"/>
                    I accept the
                    <Link className="text-indigo-500 font-medium hover:underline" href="/login"> Terms & Conditions</Link>.
                </label>
                {/* End Checkbox */}
                {/* Errors Block */}
                <div id='termsAndConditions-error' aria-live="polite" aria-atomic="true">
                    {state?.errors?.termsAndConditions && state?.errors?.termsAndConditions.map((error: string) => <p className="mt-2 text-sm text-red-500" key={error}>{error}</p>)}
                </div>
                {/* End Errors Block */}
                {/* Submit Button */}
                <button type="submit"
                className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                    Create account
                </button>
                {/* End Submit Button */}
                {/* Errors Block */}
                {state?.message && 
                    <div id={'form-error'} aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>}
                {/* End Errors Block */}
            </div>
        </div>
    ]

    /**
     * Finally we return the form component in TSX format that NextJS transforms / compiles into HTML
     */
    return (
        <form id='form-register' className="mt-8" action={dispatch}>
            <Slider slides={slides} hiddenSlides={[2]}>
                <SliderPrev/>
                <SliderDotsWrapper>
                    <SliderDot isHidden={false}/>
                    <SliderDot isHidden={false}/>
                    <SliderDot isHidden={false}/>
                    <SliderDot isHidden={true}/>
                </SliderDotsWrapper>
                <SliderNext/>
            </Slider>
        </form>
    )
}