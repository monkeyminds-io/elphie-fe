// =============================================================================
// File Name: contact-us/success/page.tsx
// File Description:
// This file contains the code of the Contact Us Success Page
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Section } from '@/ui/base/layouts'
import { Button } from '@/ui/elements/buttons'
import { Heading } from '@/ui/elements/headings'
import { Paragraph } from '@/ui/elements/paragraphs'
import { Metadata } from 'next'
import { title } from 'process'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Success'
}

// =============================================================================
// Page Component
// =============================================================================
export default function SuccessPage() {
    return (
        <Section id={'contact-us-success'} containerStyles={'flex items-center justify-center pt-[40px]'}>
            <div className="flex flex-col p-4 sm:p-10 w-full sm:max-w-[400px] text-center bg-white shadow-lg border border-gray-50 rounded-[16px]">
                {/* Icon */}
                <span className="mb-4 mx-auto inline-flex justify-center items-center w-[48px] h-[48px] rounded-full border-4 border-green-50 bg-green-100 text-green-500">
                    <svg className="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                </span>
                {/* End Icon */}

                <Heading level={3} title={'Congratulations'}>Congratulations!!</Heading>
                <Paragraph styles={'mt-4'}>Your message was successfully sent. Thanks for getting in touch</Paragraph>

                <div className="mt-6 flex justify-center gap-x-4">
                    <Button children={'Back to home'} href={'/'} styles={'md:w-full'}/>
                </div>
            </div>
        </Section>
    )
}