// =============================================================================
// File Name: ui/elements/breadcrumbs.tsx
// File Description:
// This file contains the code of the Reac Component Breadcrumbs
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react'

// =============================================================================
// Components Props
// =============================================================================
export type BreadcrumbProps = {
    label: string;
    href: string;
    active?: boolean;
}

// =============================================================================
// React Components
// =============================================================================
export const Breadcrumbs = ({breadcrumbs}: {breadcrumbs: BreadcrumbProps[]}) => {
    return (
        <nav aria-label='Breadcrumb'>
            <ol className="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                    <li className="inline-flex items-center" key={index}>
                        <Link className={clsx(
                            'flex items-center text-sm hover:text-indigo-600 focus:outline-none focus:text-indigo-600',
                            breadcrumb.active ? 'text-indigo-700' : 'text-gray-500')} 
                            href={breadcrumb.href} 
                            aria-current={breadcrumb.active}>
                                {breadcrumb.active ? <h1>{breadcrumb.label}</h1> : breadcrumb.label}
                        </Link>
                        {index < breadcrumbs.length - 1 ? (
                            <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"/>
                            </svg>) : null}
                        
                    </li>
                ))}
            </ol>
        </nav>
    )
}