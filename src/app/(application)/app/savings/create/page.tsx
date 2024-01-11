// =============================================================================
// File Name: (application)/app/goals/create/page.tsx
// File Description:
// This file contains the code of the Create Goal Page
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { Metadata } from 'next'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Goal Create'
}

// =============================================================================
// Page Component
// =============================================================================
export default function GoalCreatePage() {

    const breadcrumbs = [
        {
            label: 'App',
            href: '#',
            active: false
        },
        {
            label: 'Savings',
            href: '/app/savings',
            active: false
        },
        {
            label: 'Create',
            href: '/app/goals/create',
            active: true
        }
    ];

    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            
            <section className="py-4">

            </section>
        </div>
    )
}