// =============================================================================
// File Name: layouts.tsx
// File Description:
// This file contains all the layout React Components of the project.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react";
import { Breadcrumbs } from "../elements/breadcrumbs";
import { HeadingSmall } from "../elements/headings";
import { Paragraph } from "../elements/paragraphs";
import { Search } from "../components/search";
import Link from "next/link";
import { Pagination } from "../components/pagination";
import { EmptyTable } from "../components/empty-table";
import { Table } from "../components/table";

// =============================================================================
// Components Props
// =============================================================================
type SectionProps = {
    children: ReactNode,
    id: string,
    sectionStyles?: string,
    containerStyles?: string,
}

type AppSectionProps = {
    children: ReactNode,
    breadcrumbs: { label: string, href: string, active: boolean }[],
    heading: string,
    subheading: string,
    currentPage?: string | number,
    totalPages?: number,
    isTableSection: boolean,
    createAction: string,
    userType?: string,
    syncAction?: string
}

// =============================================================================
// React Components
// =============================================================================
export const Section = ({children, id, sectionStyles = '', containerStyles = ''}: SectionProps) => {
    return (
        <section className={`py-8 sm:py-16 lg:py-24 ${sectionStyles}`} id={id}>
            <div className={`container max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ${containerStyles}`}>
                {children}
            </div>
        </section>
    );
}

export const AppSection = ({children, breadcrumbs, heading, subheading, currentPage = "1", totalPages = 1, isTableSection, createAction, userType = 'calphie', syncAction = '#'}: AppSectionProps) => {
    return (
        <section className='flex flex-col gap-4'>

            {/* Breadcrumbs */}
            <Breadcrumbs breadcrumbs={breadcrumbs}/>

            {/* Card Section */}
            <div className="flex flex-col my-4 py-1 min-w-full align-middle bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">

                    {/* Title */}
                    <div className='flex flex-col gap-y-2'>
                        <HeadingSmall level={2} title={'Goals Main'} children={heading}/>
                        <Paragraph size='sm' children={subheading}/>
                    </div>

                    {/* Search */}
                    {isTableSection ? 
                        (<div className="inline-flex gap-x-2">
                            <Search/>
                            {userType === 'calphie' ? 
                                <Link href={createAction} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    Create
                                </Link>
                                : <Link href={syncAction} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none">
                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                    Sync
                                </Link>}
                        </div>)
                    : ''}

                </div>
                {/* End Header */}

                {/* Body */}
                <div className="overflow-x-scroll">
                    {children}
                </div>
                {/* End Body */}

                {/* Footer */}
                {isTableSection ? 
                    (<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 ">

                        <Paragraph>
                            Page <span className="font-semibold text-gray-800">{currentPage}</span> of <span className="font-semibold text-gray-800">{totalPages}</span>
                        </Paragraph>

                        <Pagination totalPages={totalPages}/>
                    </div>)
                : ''}
                {/* End Footer */}

            </div>
            {/* End Card Section */}

        </section>
    )
}
