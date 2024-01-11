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
import { SidebarToggle } from '@/ui/sidebar-toggle';

// =============================================================================
// Layout Props
// =============================================================================

// =============================================================================
// Layout Metadata
// =============================================================================
export const metadata: Metadata = {
    title: {
        template: '%s | Elphie',
        default: 'Elphie'
      },
      description: 'Elphie is a new generation family buget and finance control app.',
      icons: {
        icon: '/brand/logo-gradient-16x16.svg',
      }
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
            {/* TODO Style body to be flex row */}
            <body className={`${inter.className} bg-gray-50`}>
                {/* Sidebar Toggle */}
                <SidebarToggle/>
                {/* Sidebar */}
                <Sidebar/>
                <main className='w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72'>
                    {children}
                </main>
            </body>
            <PrelineScript />
        </html>
    )
}