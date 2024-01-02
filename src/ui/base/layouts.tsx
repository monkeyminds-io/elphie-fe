// =============================================================================
// File Name: layouts.tsx
// File Description:
// This file contains all the layout React Components of the project.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { ReactNode } from "react";

// =============================================================================
// Components Props
// =============================================================================
type SectionProps = {
    children: ReactNode,
    id: string,
    sectionStyles?: string,
    containerStyles?: string,
}

// =============================================================================
// React Components
// =============================================================================
export const Section = ({children, id, sectionStyles = '', containerStyles = ''}: SectionProps) => {
    return (
        <section className={`py-8 sm:py-16 lg:py-24 ${sectionStyles}`} id={id}>
            <div className={`container max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ${containerStyles}`}>
                {children}
            </div>
        </section>
    );
}
