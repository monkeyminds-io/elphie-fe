// =============================================================================
// File Name: (website)/login/page.tsx
// File Description:
// This file contains the code of the Login Page of the Website
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Section } from '@/ui/base/layouts'
import { FormLogin } from '@/ui/components/form-login'
import { HeadingSmall } from '@/ui/elements/headings'
import { Paragraph } from '@/ui/elements/paragraphs'
import { Metadata } from 'next'
import Link from 'next/link'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Login'
}

// =============================================================================
// Page Component
// =============================================================================
export default function LoginPage() {
    return (
        <main>
            <Section id={'login-section'} containerStyles={'pt-[24px]'}>

            {/* Login Card */}
            <div className="p-4 sm:p-6 lg:p-8 w-full max-w-md mx-auto bg-white border border-gray-100 rounded-[16px] shadow-lg">

                {/* Title */}
                <div className="text-center">
                    <HeadingSmall level={1} title={'Login'}>Login</HeadingSmall>
                    <Paragraph size={'sm'} styles={'mt-4'}>
                        Don't have an account yet?<span> </span>
                        <Link className="text-indigo-500 font-medium hover:underline" href="/register">Sign up here</Link>
                    </Paragraph>
                </div>
                {/* End Title */}

                {/* Form */}
                <FormLogin/>
            </div>
            </Section>
        </main>
    )
}