// =============================================================================
// File Name: paragraphs.tsx
// File Description:
// This file contains the React Components for Paragraphs
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react"

// =============================================================================
// Components Props
// =============================================================================
type ParagraphProps = {
    children: ReactNode,
    styles?: string,
    size?: 'sm' | 'md' | 'lg',
}

// =============================================================================
// React Components
// =============================================================================
export const Paragraph = ({children, styles = '', size = 'md'}: ParagraphProps) => {
    if(size === 'sm') return <p className={`text-[8px] sm:text-xs text-gray-500 ${styles}`}>{children}</p>
    if(size === 'md') return <p className={`text-sm sm:text-base text-gray-500 ${styles}`}>{children}</p>
    if(size === 'lg') return <p className={`text-base sm:text-lg text-gray-500 ${styles}`}>{children}</p>
}