// =============================================================================
// File Name: dashboard/layout.tsx
// File Description:
// This file contains the code of the Dashboard Layout
// that will be used for the Application Pages
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import PrelineScript from '@/ui/base/preline-script'
import { Metadata } from 'next'
import { inter } from '../../libs/fonts';
import '../../styles/globals.css'
import { Sidebar } from '@/ui/sidebar';

// =============================================================================
// Layout Props
// =============================================================================

// =============================================================================
// Layout Metadata
// =============================================================================
export const metadata: Metadata = {
    title: {
      template: '%s | Elphie App',
      default: 'Elphie App',
    },
}

// =============================================================================
// Layout Component
// =============================================================================
export default function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {
return (
        <html lang='en'>
            <body className={inter.className}>
                {/* Sidebar */}
                <Sidebar/>
                {children}
            </body>
            {/* TODO Remove preline script */}
            <PrelineScript />
        </html>
    )
}