// =============================================================================
// File Name: (website)/recover-password/page.tsx
// File Description:
// This file contains the code of the Recover Password Page of the Website
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Section } from '@/ui/base/layouts'
import { FormRecoverPassword } from '@/ui/components/form-recover-password';
import { Metadata } from 'next'
import { State, findUserByEmail } from '@/libs/actions/recover-password';
import { InputBlock } from '@/ui/elements/inputs'
import { useFormState } from 'react-dom';
import { HeadingSmall } from '@/ui/elements/headings';
import { Paragraph } from '@/ui/elements/paragraphs';
import Link from 'next/link';

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Recover Password'
}

// =============================================================================
// Page Component
// =============================================================================
export default function RecoverPasswordPage() {
    return (
        <main>
            <Section id={'recover-password-section'}>
                <div className="p-4 sm:p-6 lg:p-8 w-full max-w-md mx-auto bg-white border border-gray-100 rounded-[16px] shadow-lg">
                    <div className="text-center">
                        <HeadingSmall level={1} title={'Login'}>Forgot password?</HeadingSmall>
                        <Paragraph size={'sm'} styles={'mt-4'}>
                        Remember your password?<span> </span>
                        <Link className="text-indigo-500 font-medium hover:underline" href="/login">Sign in here</Link>
                        </Paragraph>
                    </div>

                    <div className="mt-5">
                        {/* Form */}
                        <FormRecoverPassword/>
                        {/* End Form */}
                    </div>
                </div>
            </Section>
        </main>
    )
}