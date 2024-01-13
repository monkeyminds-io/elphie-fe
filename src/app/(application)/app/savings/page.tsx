// =============================================================================
// File Name: (application)/savings/page.tsx
// File Description:
// This file contains the code of the Goals Page of the Application
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { getCookie } from '@/libs/cookies'
import { getFilteredSavingsByUserId } from '@/libs/endpoints'
import { EmptyTable } from '@/ui/components/empty-table'
import { Pagination } from '@/ui/components/pagination'
import { Search } from '@/ui/components/search'
import { TableSavings } from '@/ui/components/table'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { HeadingSmall } from '@/ui/elements/headings'
import { Paragraph } from '@/ui/elements/paragraphs'
import { Metadata } from 'next'
import Link from 'next/link'

// =============================================================================
// Page Props
// =============================================================================
type SavingsPageProps = {
    searchParams?: {
        name?: string,
        page?: string,
    }
}

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Savings'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function SavingsPage({searchParams}: SavingsPageProps) {
    
    // Creating Breadcrumbs array
    const breadcrumbs = [
        { label: 'App', href: '#', active: false },
        { label: 'Savings', href: '/app/savings', active: true }
    ];

    // Variables for Paggination
    const ROWS_PER_PAGE = 8;
    const name = searchParams?.name || '';
    const currentPage = searchParams?.page || 1;
    
    const offset = ROWS_PER_PAGE * (Number(currentPage) - 1);
    const limit = offset + ROWS_PER_PAGE;

    const fetchResponse = await fetch(getFilteredSavingsByUserId(Number(getCookie('user-id')?.value), name));
    const jsonResponse = await fetchResponse.json();
    const data = jsonResponse.data;

    const pageData = data.slice(offset, limit);
    const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

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
                            <HeadingSmall level={2} title={'Goals Main'}>Savings Management</HeadingSmall>
                            <Paragraph size='sm'>Here you can manage your Financial Goals.</Paragraph>
                        </div>

                        <div className="inline-flex gap-x-2">
                            <Search queryName={'name'}/>

                            {/* TODO Add User type condition */}
                            <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none" href="/app/savings/create">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                Create
                            </Link>
                        </div>
                    </div>
                    {/* End Header */}

                    {/* Table */}
                    <div className="overflow-x-scroll">
                        {/* TODO Create table loading status */}
                        {/* TODO Create table empty status with type of user condition */}
                        {data.length === 0 ?
                            <EmptyTable item={'Saving'}/>
                            : <TableSavings data={pageData} name={name} currentPage={currentPage.toString()} service={'savings'}/>
                        }
                        
                    </div>
                    {/* End Table */}

                    {/* Footer */}
                    <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">

                        <Paragraph>
                            Page <span className="font-semibold text-gray-800">{currentPage}</span> of <span className="font-semibold text-gray-800">{totalPages}</span>
                        </Paragraph>

                        <Pagination totalPages={totalPages}/>
                    </div>
                    {/* End Footer */}
                </div>
                {/* End Card */}
            </section>
            {/* Table Section */}
        </div>
    )
}