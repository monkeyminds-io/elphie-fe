'use client'
// =============================================================================
// File Name: components/navbar.tsx
// File Description:
// This file contains the code for the Navbar Component
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image'

// IMAGES ////////////////
import logoIndigo from '../../public/brand/logo-gradient.svg';
import { NavLink } from './elements/links';

// =============================================================================
// Components Props
// =============================================================================
type NavbarProps = {}

// =============================================================================
// React Components
// =============================================================================
export const Navbar = ({}: NavbarProps) => {

    const toggleNavbarStyles: Function = () => {
        if(typeof document !== 'undefined') {
            const navbar : HTMLElement | null = document.querySelector('[data-element="navbar"]');
            if(navbar !== null) {
                window.onscroll = () => {
                    window.scrollY > 0
                    ? navbar.classList.add('bg-white', 'shadow-lg', 'border-gray-100')
                    : navbar.classList.remove('bg-white', 'shadow-lg', 'border-gray-100');
                }
            }
        }
    }

    if (typeof window !== 'undefined') toggleNavbarStyles();

    return (
        <nav className="mt-6 relative max-w-[85rem] w-full border border-transparent rounded-[16px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto transition-all duration-[320ms] ease-in-out" aria-label="Global" data-element="navbar">
            <div className="flex items-center justify-between">
                
                {/* BrandLink Component */}
                <a className="flex items-center gap-x-2 text-xl text-gray-800 hover:text-gray-500 transition-colors duration-[320ms] ease-in-out " href="/" aria-label="Brand">
                    <Image src={logoIndigo} alt={'Elphie logo in Indigo color'}/> Elphie
                </a>

                {/* NavBurger Component */}
                <div className="md:hidden">
                    <button type="button" className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6"/>
                            <line x1="3" x2="21" y1="12" y2="12"/>
                            <line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                        <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"/>
                            <path d="m6 6 12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">

                    {/* NavLink Component */}
                    <NavLink href={'/register'} text={'Create Account'}/>
                    <NavLink href={'/contact-us'} text={'Contact Us'}/>

                    {/* NavLoginBtn Component */}
                    <a className="flex items-center gap-x-2 text-gray-500 hover:text-indigo-600 transition-colors duration-[320ms] ease-in-out md:border-s md:border-gray-300 md:my-6 md:ps-6" href="/login">
                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        Log in
                    </a>
                </div>
            </div>
        </nav>
    )
}