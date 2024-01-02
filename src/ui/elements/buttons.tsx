// =============================================================================
// File Name: buttons.tsx
// File Description:
// This file contains all the Button React Components.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from "next/link"
import { ReactNode } from "react"

// =============================================================================
// Components Props
// =============================================================================
type ButtonProps = {
    children: ReactNode,
    level?: string,
    href: string,
}

// =============================================================================
// React Components
// =============================================================================
export const Button = ({children, level = 'primary', href}: ButtonProps) => {
    return (
        <Link 
        className={
            `inline-flex justify-center items-center gap-x-3
            py-[16px] px-[32px]
            w-full md:w-auto
            text-white text-center text-xs uppercase font-medium
            bg-gradient-to-tr from-indigo-500 to-cyan-400 bg-[position:_0%_0%] bg-[size:_200%]
            rounded-[16px]
            transition-all duration-[320ms] ease-in-out
            hover:bg-[position:_100%_100%] 
            focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-white`
        }
        href={href}>
            {children}
        </Link>
    )
}