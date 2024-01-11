// =============================================================================
// File Name: (application)/goals/page.tsx
// File Description:
// This file contains the code of the Goals Page of the Application
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
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
    title: 'Goals'
}

// =============================================================================
// Page Component
// =============================================================================
export default function GoalsPage() {
    
    const breadcrumbs = [
        {
            label: 'App',
            href: '#',
            active: false
        },
        {
            label: 'Savings',
            href: '/app/savings',
            active: true
        }
    ];

    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            
            {/* Table Section */}
            <section className="py-4">
                {/* Card */}
                <div className="flex flex-col -m-1.5 overflow-x-auto py-1 min-w-full align-middle bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                        <div className='flex flex-col gap-y-2'>
                            <HeadingSmall level={2} title={'Goals Main'}>Savings Management</HeadingSmall>
                            <Paragraph size='sm'>Here you can manage your Financial Goals.</Paragraph>
                        </div>

                        <div className="inline-flex gap-x-2">

                            {/* TODO Create search action to filter table as per search input */}
                            <form action="" id='form-goals-search'>
                                <label htmlFor="icon" className="sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <svg className="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    </div>
                                    <input type="text" id="icon" name="icon" className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search"/>
                                </div>
                            </form>

                            <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="/app/savings/create">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                Create
                            </a>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* TODO Create Table component */}
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-indigo-50">
                            <tr>
                                {/* TODO Create TableHeaderColumn component */}
                                <th scope="col" className="px-6 py-3 text-start">
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Name
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3 text-start">
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Saved
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3 text-start">
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Target
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3 text-start">
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        Remaining
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3 text-start">
                                    <div className="flex items-center gap-x-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                                        By date
                                        </span>
                                    </div>
                                </th>

                                <th scope="col" className="px-6 py-3 text-end">
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">

                        <tr>
                            {/* TODO Create TableRowColumn component */}
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-sm text-gray-600">
                                    Christmas Holidays
                                </div>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-sm text-green-600">
                                    € 25.000
                                </div>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-sm text-gray-600">
                                    € 50.000
                                </div>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-sm text-red-600">
                                    € -25.000
                                </div>
                            </td>

                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-3 text-sm text-gray-600">
                                    22 Dec, 2024
                                </div>
                            </td>
                            
                            <td className="h-px w-px whitespace-nowrap">
                                <div className="px-6 py-1.5">
                                    <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                        <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all text-sm">
                                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                        </button>
                                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2" aria-labelledby="hs-table-dropdown-1">
                                            <div className="py-2 first:pt-0 last:pb-0">
                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500" href="#">
                                                    Rename
                                                </a>
                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500" href="#">
                                                    Regenrate Key
                                                </a>
                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500" href="#">
                                                    Disable
                                                </a>
                                                </div>
                                                <div className="py-2 first:pt-0 last:pb-0">
                                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500" href="#">
                                                    Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>

                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Node</span>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <div className="flex items-center gap-x-2">
                                <img className="inline-block h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description"/>
                                <div className="grow">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">David Harrison</span>
                                </div>
                                </div>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Copy Key
                                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                                </button>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-green-200">
                                <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                </svg>
                                Warning
                                </span>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">20 Dec, 09:27</span>
                            </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                            <div className="px-6 py-1.5">
                                <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                                <button id="hs-table-dropdown-2" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                                </button>
                                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-table-dropdown-2">
                                    <div className="py-2 first:pt-0 last:pb-0">
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Rename
                                    </a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Regenrate Key
                                    </a>
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        Disable
                                    </a>
                                    </div>
                                    <div className="py-2 first:pt-0 last:pb-0">
                                    <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 dark:text-red-500 dark:hover:bg-gray-700" href="#">
                                        Delete
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    {/* End Table */}

                    {/* Footer */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">

                        {/* TODO Update count dinamically with Goals data */}
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-800">6</span> results
                        </p>

                        {/* TODO Create component and functionality for Pagination */}
                        <div className="inline-flex gap-x-2">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                Prev
                            </button>

                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                                Next
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </section>
            {/* End Table Section */}
        </div>
    )
}