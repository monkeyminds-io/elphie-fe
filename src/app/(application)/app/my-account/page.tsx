// =============================================================================
// File Name: (application)/my-account/page.tsx
// File Description:
// This file contains the code of the My Account Page of the applications
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Pagination } from '@/ui/components/pagination'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { Heading, HeadingSmall } from '@/ui/elements/headings'
import { Paragraph } from '@/ui/elements/paragraphs'
import { Search, Link } from 'lucide-react'
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
export default function MyAccountPage() {
    const breadcrumbs = [
        {
            label: 'App',
            href: '#',
            active: false
        },
        {
            label: 'My Account',
            href: '/my-account',
            active: true
        }
    ]
    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            
            {/* Section */}
            <section className="py-4">
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
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                        <form>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                <div className="sm:col-span-3">
                                    <label className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Profile photo
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <div className="flex items-center gap-5">
                                        <span className="inline-flex items-center justify-center h-24 w-24 rounded-lg bg-indigo-200 text-2xl font-semibold text-indigo-800 leading-none overflow-hidden">
                                            {/* TODO {!userAvatar ? 
                                                getUserInitials(userFullName)
                                                : <Image src={userAvatar} alt={`${userFullName} avatar`}/>
                                            } */}
                                            GM
                                        </span>

                                        <div className="flex gap-x-2">
                                            {/* TODO Add hidden file input and click in button click */}
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                                                Upload photo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-3">
                                    <label htmlFor="af-account-full-name" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Full name
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <div className="sm:flex">
                                        <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="First Name"/>
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Last Name"/>
                                    </div>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-3">
                                    <label htmlFor="af-account-email" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Email
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="your@email.com"/>
                                </div>
                                {/* End Col */}
                                
                            </div>
                            {/* End Grid */}

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                Save changes
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                        <form>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                
                                <div className="sm:col-span-3">
                                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Password
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <div className="space-y-2">
                                        <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter current password"/>
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter new password"/>
                                    </div>
                                </div>
                                {/* End Col */}
                                
                            </div>
                            {/* End Grid */}

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                Change password
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                        <form>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                
                                <div className="sm:col-span-3">
                                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Upgrade account
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <div className="space-y-2">
                                        <label htmlFor="calphie-plan"  className="flex rounded-lg shadow-sm">
                                            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500">
                                                <input type="radio" className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500" id="calphie-plan" name="account-type"/>
                                            </span>
                                            <div className="flex flex-row justify-between py-3 px-4 pe-11 w-full border border-gray-200 shadow-sm rounded-e-lg text-sm">
                                                <span>Calphie plan</span>
                                                <span>FREE</span>
                                            </div>
                                        </label>
                                        <label htmlFor="elphie-plan"  className="flex rounded-lg shadow-sm">
                                            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500">
                                                <input type="radio" className="shrink-0 border-gray-200 rounded-full text-indigo-600 focus:ring-indigo-500" id="elphie-plan" name="account-type"/>
                                            </span>
                                            <div className="flex flex-row justify-between py-3 px-4 pe-11 w-full border border-gray-200 shadow-sm rounded-e-lg text-sm">
                                                <span>Elphie plan</span>
                                                <span>€ 9,99 <span className='text-xs text-gray-400'>/month</span></span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                
                            </div>
                            {/* End Grid */}

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                Upgrade account
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
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
                                    <div className="space-y-2">
                                        <input id="af-payment-billing-address" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Street Address"/>
                                        <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Apt, Syuite, Building (Optional)"/>
                                        <div className="grid sm:flex gap-3">
                                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Zip Code"/>
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                                <option selected>City</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                                <option>City 3</option>
                                            </select>
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                                <option selected>State</option>
                                                <option>State 1</option>
                                                <option>State 2</option>
                                                <option>State 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* End Col */}
                                
                            </div>
                            {/* End Grid */}

                            <div className="mt-5 flex justify-end gap-x-2">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                Save address
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center">
                        <form>
                            {/* Grid */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                                
                                <div className="sm:col-span-3">
                                    <label htmlFor="af-account-password" className="inline-block w-[128px] text-sm text-gray-800 mt-2.5">
                                        Payment method
                                    </label>
                                </div>
                                {/* End Col */}

                                <div className="sm:col-span-9">
                                    <div className="space-y-2">
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
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                Change card
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                {/* End Card */}
            </section>
            {/* Table Section */}
        </div>
    )
}