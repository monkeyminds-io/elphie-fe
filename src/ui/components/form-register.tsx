'use client'
// =============================================================================
// File Name: ui/components/form-register.tsx
// File Description:
// This file contains the code of the React Component Form Register
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { InputBlock, SelectBlock } from '../elements/inputs'
import { SliderDot, SliderDotsWrapper, Slider, SliderNext, SliderPrev } from './slider'
import { Paragraph } from '../elements/paragraphs'
import { useFormState } from 'react-dom'
import { State, registerUser } from '@/libs/actions/register'
import { Heading } from '../elements/headings'
import { formatCardExpiryInput, formatCardNumberInput, formatEircodeInput } from '@/libs/utiles'
import { ChangeEvent } from 'react'
import HSCarousel from '@preline/carousel'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormRegister = () => {

    // Local Functions
    const handleOnChangePlanInput = (event: ChangeEvent<HTMLInputElement>) => {
        const checkedValue: string = event?.target.value;
        const billingSlide: HTMLElement | null | undefined = document?.querySelector('#billing-slide')?.parentElement;
        checkedValue === 'calphie' ? billingSlide?.classList.add('hidden') : billingSlide?.classList.remove('hidden');
        const billingDot: Element | undefined = document?.querySelector('.hs-carousel-pagination')?.children[2];
        checkedValue === 'calphie' ? billingDot?.classList.add('hidden') : billingDot?.classList.remove('hidden');
    }

    // Validation
    const initialState : State = { message: null, errors: {} };
    const [state, dispatch] = useFormState(registerUser, initialState);

    // TODO Add responsive styles!!
    const slides = [
        <div className='flex flex-col gap-y-4'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 1 of 3: </span>Login information</Paragraph>
            {/* Fields Block */}
            <div className="flex gap-x-4">
                <InputBlock name={'firstname'} label={'First name'} placeholder={'First name'} errors={state?.errors?.firstname}/>
                <InputBlock name={'lastname'} label={'Last name'} placeholder={'Last name'} errors={state?.errors?.lastname}/>
            </div>
            <InputBlock type={'email'} name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
            <InputBlock type={'password'} name={'password'} label={'Password'} placeholder={'Password (Must be 8 characters long)'} errors={state?.errors?.password} />
            <InputBlock type={'password'} name={'passwordAgain'} label={'Password again'} placeholder={'Password again (Must be equal to password)'} errors={undefined} />
        </div>,
        <div className='flex flex-col gap-y-4'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 2 of 3: </span>Pick your plan</Paragraph>
            {/* Fields Block */}
            <div className="grid sm:grid-cols-2 gap-2">
                <label htmlFor="calphie-option" className="flex flex-col gap-y-4 p-4 w-full bg-white border border-gray-200 rounded-[12px] hover:border-indigo-500 cursor-pointer">
                    <input type="radio" id='calphie-option' name="plan-option" value='calphie' onChange={(e) => {handleOnChangePlanInput(e)}}
                    className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
                    <Heading level={3} title={'Calphie plan'}>Calphie</Heading>
                    <Paragraph>No commitments, no card details needed, cancel anytime.</Paragraph>
                    <span className='text-2xl'>Free</span>
                </label>

                {/* TODO Add onChange if selected set NEXT to goTo(3) */}
                <label htmlFor="elphie-option" className="flex flex-col gap-y-4 p-4 w-full bg-white border border-gray-200 rounded-[12px] hover:border-indigo-500 cursor-pointer">
                    <input type="radio" id='elphie-option' name="plan-option" value='eplhie' onChange={(e) => {handleOnChangePlanInput(e)}}
                    className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
                    <Heading level={3} title={'Calphie plan'}>Elphie</Heading>
                    <Paragraph>Get all the existing and future features to get full control.</Paragraph>
                    <span className='text-2xl'>9,99 € month</span>
                </label>
            </div>
        </div>,
        <div className='flex flex-col gap-y-4' id='billing-slide'>
            {/* Header */}
            <Paragraph styles='font-bold text-gray-800'><span className='text-indigo-500'>Step 3 of 3: </span>Billing information</Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
                <div className="flex flex-col gap-y-4 w-full">
                    <Paragraph styles='text-gray-800'>Address info:</Paragraph>
                    <InputBlock name={'addressLine1'} label={'Address (line 1)'} placeholder={'Address (line 1)'} errors={state?.errors?.addressLine1} />
                    <InputBlock name={'addressLine2'} label={'Address (line 2) OPTIONAL'} placeholder={'Address (line 2) OPTIONAL'} errors={state?.errors?.addressLine2} />
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
            <div className='flex flex-col justify-center gap-y-4 pb-4 mx-auto h-full max-w-[400px]'>
                <svg className='flex-shrink-0 w-[40px] h-[40px] text-indigo-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 10v12"/>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                </svg>
                <Paragraph>Great!! Now you just need to read and accept the Terms & Conditions and Create your account.</Paragraph>
                {/* Checkbox Terms and Concitions */}
                <label htmlFor="accept-terms" className="flex items-center gap-x-1 text-sm text-gray-500 cursor-pointer">
                    <input id="accept-terms" name="accept-terms" type="checkbox" className="shrink-0 me-2 border-gray-200 rounded text-indigo-600 pointer-events-none focus:ring-indigo-500"/>
                    I accept the
                    <Link className="text-indigo-500 font-medium hover:underline" href="/login"> Terms & Conditions</Link>.
                </label>
                {/* End Checkbox */}
                {/* Submit Button */}
                <button type="submit"
                className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                    Create account
                </button>
                {/* End Submit Button */}
            </div>
        </div>
    ]

    return (
        <form className="mt-8">
            <Slider isAbsolute={false} slides={slides}>
                <SliderPrev isAbsolute={false}/>
                <SliderDotsWrapper isAbsolute={false}>
                    <SliderDot/>
                    <SliderDot/>
                    <SliderDot/>
                    <SliderDot/>
                </SliderDotsWrapper>
                <SliderNext isAbsolute={false}/>
            </Slider>
        </form>
    )
}