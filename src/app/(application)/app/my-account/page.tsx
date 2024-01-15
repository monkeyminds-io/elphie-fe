// =============================================================================
// File Name: (application)/my-account/page.tsx
// File Description:
// This file contains the code of the My Account Page of the applications
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { getCookie } from '@/libs/cookies'
import { User } from '@/libs/definitions'
import { getUserBtId } from '@/libs/endpoints'
import { FormGeneralInfo } from '@/ui/components/form-general-info'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { Heading, HeadingSmall } from '@/ui/elements/headings'
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

    const response = await fetch(getUserBtId(getCookie('user-id')?.value as string));
    const json = await response.json();
    const user: User | null = json !== undefined ? json.data : null;

    return (
            <section className="flex flex-col gap-4">
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

                    {/* TODO Continue getting forms ready!!! */}
                    {/* TODO Add prefiled data from User cookies */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:flex-col border-b border-gray-200 ">

                        <Heading children={'General Information'} level={3} title={'My Account General Information'}/>

                        <FormGeneralInfo user={user}/>
                    </div>


                    <div className="px-6 py-4 grid gap-3 md:flex md:flex-col border-b border-gray-200 ">

                        <Heading children={'Billing Information'} level={3} title={'My Account Billing Information'}/>

                        <form>
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
                                        <input id="af-payment-billing-address" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Street Address"/>
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Apt, Syuite, Building (Optional)"/>
                                        <div className="grid sm:flex gap-3">
                                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Zip Code"/>
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                                <option defaultValue={''}>City</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                                <option>City 3</option>
                                            </select>
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                                <option defaultValue={''}>State</option>
                                                <option>State 1</option>
                                                <option>State 2</option>
                                                <option>State 3</option>
                                            </select>
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
                                        <input id="af-payment-payment-method" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Name on Card"/>
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Card Number"/>
                                        <div className="grid sm:flex gap-3">
                                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Expiration Date"/>
                                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="CVV Code"/>
                                        </div>
                                    </div>
                                </div>
                                {/* End Col */}
                                
                            </div>
                            {/* End Grid */}

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                                Cancel
                                </button>
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                                Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                {/* End Card */}
            </section>
    )
}