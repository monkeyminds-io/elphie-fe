'use client'
// =============================================================================
// File Name: ui/components/search.tsx
// File Description:
// This file contains the code of the React Component Search for the Application
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const Search = () => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch : Function = useDebouncedCallback((query : string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        query ? params.set('query', query) : params.delete('name');
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="w-full md:w-auto">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg className="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.3-4.3"/>
                    </svg>
                </div>
                <input type="text" id="search" name="search" placeholder="Search"
                onChange={(e) => {handleSearch(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
                className="py-2 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"/>
            </div>
        </div>
    )
}