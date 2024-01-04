'use client'
// =============================================================================
// File Name: ui/components/form-contact-us.tsx
// File Description:
// This file contains the code for the Contact Us form of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { useFormState } from 'react-dom'
import { InputBlock, TextAreaBlock } from '../elements/inputs'
import { Paragraph } from '../elements/paragraphs'
import { State, handleSendMessage } from '@/libs/actions/contact-us'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormContactUs = () => {
    
    // Form validation
    const initialState: State = { message: null, errors: {} }
    const [state, dispatch] = useFormState(handleSendMessage, initialState);

    return (
        <form className='mt-8' action={dispatch}>
            <div className="grid gap-4">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputBlock type={'text'} name={'firstname'} label={'First Name'} placeholder={'First Name'} errors={state?.errors?.firstname}/>
                    <InputBlock type={'text'} name={'lastname'} label={'Last Name'} placeholder={'Last Name'} errors={state?.errors?.lastname}/>
                </div>
                {/* End Grid */}
                <InputBlock type={'email'} name={'email'} label={'Email'} placeholder={'Email'} errors={state?.errors?.email}/>
                <TextAreaBlock rows={4} name={'message'} label={'Message'} placeholder={'Message'} errors={state?.errors?.message}/>

            </div>
            {/* End Grid */}

            <button type="submit" className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] mt-4 w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Send inquiry
            </button>

            <Paragraph size={'sm'} styles={'mt-3 text-center'}>We'll get back to you in 1-2 business days.</Paragraph>

        </form>
    )
}