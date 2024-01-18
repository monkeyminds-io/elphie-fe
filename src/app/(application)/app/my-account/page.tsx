// =============================================================================
// File Name: (application)/my-account/page.tsx
// File Description:
// This file contains the code of the My Account Page of the applications
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { getCookie } from '@/libs/cookies'
import { BillingInfo, User } from '@/libs/definitions'
import { getBillingInfoByUserId, getUserById } from '@/libs/endpoints'
import { FormBillingInfoUpdate, FormBillingInfoCreate } from '@/ui/components/form-billing-info'
import { FormDeleteAccount } from '@/ui/components/form-delete-account'
import { FormGeneralInfo } from '@/ui/components/form-general-info'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { Heading, HeadingSmall } from '@/ui/elements/headings'
import { AppInput } from '@/ui/elements/inputs'
import { Paragraph } from '@/ui/elements/paragraphs'
import { Metadata } from 'next'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'My Account'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function MyAccountPage() {

    const breadcrumbs = [
        { label: 'App', href: '#', active: false },
        { label: 'My Account', href: '/my-account', active: true }
    ]

    const userResponse = await fetch(getUserById(getCookie('user-id')?.value as string), {cache: 'no-cache'});
    const userJson = await userResponse.json();
    const user: User = userJson.data;

    // Fetch Billing Info object
    const billingResponse = await fetch(getBillingInfoByUserId(user.id), {cache: 'no-cache'});
    const billingJson = await billingResponse.json();
    const billing: BillingInfo = billingJson.ok ? billingJson.data : null;

    return (
            <section className="flex flex-col gap-8">
                {/* Breadcrumbs */}
                <Breadcrumbs breadcrumbs={breadcrumbs}/>

                {/* Card */}
                <div className="flex flex-col -m-1.5 py-1 min-w-full align-middle bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                    {/* Header */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                        <div className='flex flex-col gap-y-2'>
                            <HeadingSmall level={2} title={'Goals Main'}>My Account</HeadingSmall>
                            <Paragraph size='sm'>Here you can manage your Account data.</Paragraph>
                        </div>
                    </div>
                    {/* End Header */}

                    <div className="px-6 py-4 grid gap-3 md:flex md:flex-col border-b border-gray-200 ">
                        <Heading children={'General Information'} level={3} title={'My Account General Information'}/>
                        <FormGeneralInfo user={user}/>
                    </div>

                    {user.accountType === 'elphie' && (
                        <div className="px-6 py-4 grid gap-3 md:flex md:flex-col border-b border-gray-200 ">
                            <Heading children={'Billing Information'} level={3} title={'My Account Billing Information'}/>
                            {billingJson.ok ? 
                                <FormBillingInfoUpdate billing={billing}/>
                                : <FormBillingInfoCreate userId={user.id}/>
                            }
                        </div>
                    )}

                    <div className="px-6 py-4 grid gap-3 md:flex md:flex-col">
                        <Heading children={'Delete account'} level={3} title={'My Account Delete account'}/>
                        <FormDeleteAccount userId={user.id} email={user.email}/>
                    </div>
                    
                </div>
                {/* End Card */}
            </section>
    )
}