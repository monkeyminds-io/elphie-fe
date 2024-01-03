'use client'
// =============================================================================
// File Name: links.tsx
// File Description:
// This file contains all the Link React Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx'


// =============================================================================
// Components Props
// =============================================================================
// NAV LINK PROPS ////////////////
type LinkProps = {
    href: string,
    text: string,
}

// =============================================================================
// React Components
// =============================================================================
// NAV LINK COMPONENT ////////////////
export const NavLink = ({href, text}: LinkProps) => {

    const pathname = usePathname();

    return (
        <Link 
        className={clsx(
            // Normal styles
            `text-gray-400 hover:text-indigo-500 transition-colors duration-[320ms] ease-in-out md:py-6`,
            // Active styles
            { 'text-indigo-500': pathname === href, })} 
        href={href}>
            {text}
        </Link>
    )
}

export const FooterLink = ({href, text}: LinkProps) => {
    return (
        <Link 
        className="inline-flex gap-x-2 text-gray-400 hover:text-gray-100 transition-colors duration-[320ms] ease-in-out"
        href={href}>
            {text}
        </Link>
    )
}