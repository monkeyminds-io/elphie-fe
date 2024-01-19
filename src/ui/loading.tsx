// =============================================================================
// File Name: ui/loading.tsx
// File Description:
// This file contains the code of the Loading component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from 'react'
import { HeadingSmall } from './elements/headings'
import { Paragraph } from './elements/paragraphs'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const Loading = () => {
    return (
        <div className="max-w-sm w-full min-h-[400px] flex flex-col justify-center gap-y-4 mx-auto px-6 py-4">

            <div className="animate-spin inline-block mb-4 w-10 h-10 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full dark:text-indigo-500" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
            <HeadingSmall children={'Loading data...'} level={2} title={`Loading`}/>
            <Paragraph children={`We are fetching the data from the Database.`}/>


        </div>
    )
}   