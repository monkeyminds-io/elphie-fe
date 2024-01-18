// =============================================================================
// File Name: ui/components/empty-table.tsx
// File Description:
// This file contains the empty state of a table.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { HeadingSmall } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const EmptyTable = ({ item, createAction, userType }: { item: string, createAction: string, userType: string}) => {

    if(userType === 'elphie') return (
        <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center gap-y-4 mx-auto px-6 py-4">
            <div className="flex justify-center items-center w-[48px] h-[48px] bg-indigo-100 text-indigo-700 rounded-lg">
                <svg  className="flex-shrink-0 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
            </div>

            <HeadingSmall children={'Let\'s get started!!'} level={2} title={`Empty state for ${item}`}/>
            <Paragraph children={`You haven't sync your Bank Accounts yet. Click the button bellow to start sync!!`}/>

            <div className="mt-5 grid sm:flex gap-2">
                <Link href={''} className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                    </svg>
                    Sync bank accounts
                </Link>
            </div>
        </div>
    )

    if(userType === 'calphie') return (
        <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center gap-y-4 mx-auto px-6 py-4">
            <div className="flex justify-center items-center w-[48px] h-[48px] bg-indigo-100 text-indigo-700 rounded-lg">
                <svg  className="flex-shrink-0 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
            </div>

            <HeadingSmall children={'Let\'s get started!!'} level={2} title={`Empty state for ${item}`}/>
            <Paragraph children={`You haven't created any ${item}s yet. Click the button below to add your first!!`}/>

            <div className="mt-5 grid sm:flex gap-2">
                <Link href={createAction} className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/>
                        <path d="M12 5v14"/>
                    </svg>
                    Create first {item.toLowerCase()}
                </Link>
            </div>
        </div>
    )
}