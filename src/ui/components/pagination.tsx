'use client'
import clsx from 'clsx'
import { create } from 'domain'
// =============================================================================
// File Name: ui/components/paginations.tsx
// File Description:
// This file contains the code of the React Component Pagination
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

// =============================================================================
// Components Props
// =============================================================================
type PaginationProps = {
    totalPages: number,
}

// =============================================================================
// React Components
// =============================================================================
export const Pagination = ({totalPages}: PaginationProps) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
  
    return (
        <div className="inline-flex gap-x-2">
            <Link href={createPageURL(currentPage - 1)} aria-disabled={currentPage === 1}
            className={clsx(
                // Normal styles
                'py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-indigo-50 transition-colors duration-[320ms] ease-in-out',
                // Disabled styles
                {'opacity-50 pointer-events-none': currentPage === 1}
            )}>
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Prev
            </Link>

            <Link href={createPageURL(currentPage + 1)}  aria-disabled={currentPage === totalPages}
            className={clsx(
                // Normal styles
                'py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-indigo-50 transition-colors duration-[320ms] ease-in-out',
                // Disabled styles
                {'opacity-50 pointer-events-none': currentPage === totalPages}
            )}>
                Next
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
        </div>
    )
}