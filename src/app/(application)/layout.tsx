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
export default async function DashboardLayout({
children,
}: {
children: React.ReactNode
}) {
    
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-gray-50`}>
                {/* Sidebar Toggle */}
                <SidebarToggle/>
                {/* Sidebar */}
                <Sidebar/>
                <main className='w-full p-4 sm:p-6 md:p-8 lg:ps-72'>
                    {children}
                </main>
                {/* Preline Script */}
                <PrelineScript />
            </body>
        </html>
    )
}