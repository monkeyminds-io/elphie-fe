// =============================================================================
// File Name: images.tsx
// File Description:
// This file contains all the React Components that relate to images.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react"

// =============================================================================
// Components Props
// =============================================================================
type ImageWrapperProps = {
    children: ReactNode,
    styles?: string,
}
// =============================================================================
// React Components
// =============================================================================
export const ImageWrapper = ({children, styles = ''}: ImageWrapperProps) => {
    return (
        <div className={`flex flex-row overflow-hidden ${styles}`}>
            {children}
        </div>
    )
}
