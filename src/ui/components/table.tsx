// =============================================================================
// File Name: ui/components/table.tsx
// File Description:
// This file contains the code of the Table React Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { ReactNode } from 'react'

// =============================================================================
// Components Props
// =============================================================================
type TableProps = {
    children: ReactNode,
    headers: string[],
}

type TableActionsColumnProps = { 
    updateAction: string, 
    deleteAction: () => Promise<{ success: string; message?: undefined; } | { message: string; success?: undefined; }>, 
    formId: string
}
// =============================================================================
// React Components
// =============================================================================
export const Table = ({ children, headers }: TableProps) => {
    return (
        <table className="min-w-full divide-y divide-gray-200 ">

            {/* Table Headers */}
            <thead className="bg-indigo-50">
                <tr>
                    {headers.map((header, index) => {
                        return (
                            <th key={index} scope="col" className="px-6 py-3 text-start">
                                <div className="flex items-center gap-x-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                                    {header}
                                </div>
                            </th>)
                    })}
                    <th scope="col" className="px-6 py-3 text-end"></th>
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
                {children}
            </tbody>
        </table>
    )
}

export const TableColumn = ({ data }: { data: string | undefined }) => {
    return (
        <td className="h-px w-px whitespace-nowrap">
            <div className="px-6 py-3 text-sm text-gray-600">
                {data}
            </div>
        </td>
    )
}

export const TableActionsColumn = ({ updateAction, deleteAction, formId }: TableActionsColumnProps) => {
    return (
        <td className="h-px w-px whitespace-nowrap">
            <div className="hs-dropdown relative inline-block [--placement:bottom-right] px-6 py-1.5">
                {/* Actions Dropdown Button */}
                <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all text-sm">
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="19" cy="12" r="1"/>
                        <circle cx="5" cy="12" r="1"/>
                    </svg>
                </button>

                {/* Actions Options Card */}
                <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-[10rem] z-10 bg-white shadow-2xl rounded-lg p-2 mt-2" aria-labelledby="hs-table-dropdown-1">
                    <div className="py-2 first:pt-0 last:pb-0">
                        <Link href={updateAction} className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                <path d="m15 5 4 4"/>
                            </svg>
                            Edit
                        </Link>
                    </div>
                    <form id={formId} action={deleteAction} className="py-2 first:pt-0 last:pb-0">
                        <button type='submit' className="flex items-center gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 transition-colors duration-300 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 6h18"/>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                <line x1="10" x2="10" y1="11" y2="17"/>
                                <line x1="14" x2="14" y1="11" y2="17"/>
                            </svg>
                            Delete
                        </button>
                    </form>
                </div>
            </div>
        </td>
    )
}