// =============================================================================
// File Name: links.tsx
// File Description:
// This file contains all the Link React Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react"
import Link from 'next/link'

// =============================================================================
// Components Props
// =============================================================================
// NAV LINK PROPS ////////////////
type NavLinkProps = {
    href: string,
    text: string,
}

// =============================================================================
// React Components
// =============================================================================
// NAV LINK COMPONENT ////////////////
export const NavLink = ({href, text}: NavLinkProps) => {
    return <Link className="text-gray-500 hover:text-gray-400 transition-colors duration-[320ms] ease-in-out md:py-6" href={href}>{text}</Link>
}