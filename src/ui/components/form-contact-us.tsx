// =============================================================================
// File Name: ui/components/form-contact-us.tsx
// File Description:
// This file contains the code for the Contact Us form of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { Paragraph } from '../elements/paragraphs'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const FormContactUs = () => {
    return (
        // TODO Set Action for Form Submit
        <form className='mt-8'>
            <div className="grid gap-4">
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="contact-us-firstname" className="sr-only">First Name</label>
                        <input type="text" name="contact-us-firstname" id="contact-us-firstname" className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First Name"/>
                    </div>

                    <div>
                        <label htmlFor="contact-us-lastname" className="sr-only">Last Name</label>
                        <input type="text" name="contact-us-lastname" id="contact-us-lastname" className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Last Name"/>
                    </div>
                </div>
                {/* End Grid */}

                <div>
                    <label htmlFor="contact-us-email" className="sr-only">Email</label>
                    <input type="email" name="contact-us-email" id="contact-us-email" autoComplete="email" className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Email"/>
                </div>

                <div>
                    <label htmlFor="contact-us-phone" className="sr-only">Phone Number</label>
                    <input type="text" name="contact-us-phone" id="contact-us-phone" className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Phone Number"/>
                </div>

                <div>
                    <label htmlFor="contact-us-message" className="sr-only">Details</label>
                    <textarea id="contact-us-message" name="contact-us-message" rows={4} className="block p-[16px] w-full text-sm border-gray-200 rounded-[16px] placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Details"></textarea>
                </div>
            </div>
            {/* End Grid */}

            <button type="submit" className="inline-flex justify-center items-center gap-x-3 py-[16px] px-[32px] mt-4 w-full text-white text-center text-xs uppercase font-medium bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%] rounded-[16px] transition-all duration-[320ms] ease-in-out hover:bg-[position:_100%_100%] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white">
                Send inquiry
            </button>

            <Paragraph size={'sm'} styles={'mt-3 text-center'}>We'll get back to you in 1-2 business days.</Paragraph>

        </form>
    )
}