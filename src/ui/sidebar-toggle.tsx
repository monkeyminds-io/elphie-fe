// =============================================================================
// File Name: ui/sidebar-toggle.tsx
// File Description:
// This file contains the code of the Sidebar Toggle React Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from "next/link"
import Image from 'next/image'

// Images ////////////////
import logoIndigo from '@/../public/brand/logo-indigo.svg';

// =============================================================================
// React Components
// =============================================================================
export const SidebarToggle = () => {
    return (
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
            <div className="flex items-center justify-between py-4">

                {/* App Brand Link */}
                <Link className="flex items-center gap-x-2 text-xl text-gray-800 hover:text-gray-500 transition-colors duration-[320ms] ease-in-out" href="/app/dashboard" aria-label="Brand">
                    <Image src={logoIndigo} alt={'Elphie logo in Indigo color'}/> Elphie
                </Link>
                {/* End App Brand Link */}
                
                {/* Navigation Toggle */}
                <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                {/* End Navigation Toggle */}

            </div>
        </div>
    )
}