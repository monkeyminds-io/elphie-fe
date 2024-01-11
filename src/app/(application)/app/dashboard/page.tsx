// =============================================================================
// File Name: (application)/dashboard/page.tsx
// File Description:
// This file contains the code for the Dashboard Page
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
    title: 'Dashboard'
}

// =============================================================================
// Page Component
// =============================================================================
export default function DashboardPage() {

    const breadcrumbs = [
        {
            label: 'App',
            href: '#',
            active: false
        },
        {
            label: 'Dashboard',
            href: '/dashboard',
            active: true
        }
    ]
    return (
        <div className='flex flex-col gap-4'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
        </div>
    )
}