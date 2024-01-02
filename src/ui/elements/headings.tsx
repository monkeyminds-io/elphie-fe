// =============================================================================
// File Name: headings.tsx
// File Description:
// This file contains all the Heading React Components.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react"

// =============================================================================
// Components Props
// =============================================================================
type HeadingProps = {
    children: ReactNode,
    styles?: string,
    level: number,
    title: string,
}

// =============================================================================
// React Components
// =============================================================================
export const Heading = ({children, styles = '', level, title}: HeadingProps) => {
    if(level === 1) return <h1 className={`block font-bold text-gray-800 text-4xl capitalize md:text-5xl lg:text-6xl ${styles}`} title={title}>{children}</h1>
    if(level === 2) return <h2 className={`font-bold text-3xl lg:text-4xl text-gray-800 ${styles}`} title={title}>{children}</h2>
    if(level === 3) return <h3 className={`text-lg font-semibold text-gray-800 ${styles}`} title={title}>{children}</h3>
}