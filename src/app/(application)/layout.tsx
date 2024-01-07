// =============================================================================
// File Name: (application)/layout.tsx
// File Description:
// This file contains the code of the Dashboard Layout
// that will be used for the Application Pages
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import { Metadata } from 'next'
import { PrelineScript } from '@/ui/base/preline-script'
import { Sidebar } from '@/ui/sidebar';
import { inter } from '@/libs/fonts';
import '@/styles/globals.css'

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
            <PrelineScript />
        </html>
    )
}