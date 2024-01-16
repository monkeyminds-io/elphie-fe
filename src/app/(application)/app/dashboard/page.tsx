// =============================================================================
// File Name: (application)/dashboard/page.tsx
// File Description:
// This file contains the code for the Dashboard Page
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { DashboardChart } from '@/ui/chart'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Dashboard'
}

// =============================================================================
// Page Component
// =============================================================================
export default function DashboardPage() {

    const breadcrumbs = [
        { label: 'App', href: '#', active: false },
        { label: 'Dashboard', href: '/dashboard', active: true }
    ]

    const data = {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        datasets: [{ data: [18000, 51000, 60000, 38000, 88000, 50000, 40000, 52000, 88000, 80000, 60000, 70000] }]
    }

    return (
        <section className='flex flex-col gap-8'>

            <Breadcrumbs breadcrumbs={breadcrumbs}/>

            {/* Card Section */}
            <div className="flex flex-col -m-1.5 py-1 min-w-full align-middle">

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    
                    {/* TODO Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total users</p>
                            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-indigo-600">72,540</h3>
                            <div className="mt-1 flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                from <span className="font-semibold text-gray-800">70,104</span>
                                </p>
                                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                                    <svg className="inline-block w-3 h-3 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <span className="inline-block">
                                        12.5%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total users</p>
                            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-indigo-600">72,540</h3>
                            <div className="mt-1 flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                from <span className="font-semibold text-gray-800">70,104</span>
                                </p>
                                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                                    <svg className="inline-block w-3 h-3 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <span className="inline-block">
                                        12.5%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total users</p>
                            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-indigo-600">72,540</h3>
                            <div className="mt-1 flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                from <span className="font-semibold text-gray-800">70,104</span>
                                </p>
                                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                                    <svg className="inline-block w-3 h-3 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <span className="inline-block">
                                        12.5%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total users</p>
                            <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-indigo-600">72,540</h3>
                            <div className="mt-1 flex justify-between items-center">
                                <p className="text-sm text-gray-500">
                                from <span className="font-semibold text-gray-800">70,104</span>
                                </p>
                                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                                    <svg className="inline-block w-3 h-3 self-center" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <span className="inline-block">
                                        12.5%
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                    {/* End Card */}

                </div>
                {/* End Grid */}


            </div>
            {/* End Card Section */}
            
            <div className="flex flex-col -m-1.5 p-8 min-w-full max-h-[480px] align-middle bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <DashboardChart data={data}/>
            </div>

        </section>
    )
}