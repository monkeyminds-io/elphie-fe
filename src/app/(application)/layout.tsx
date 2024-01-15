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
import { User } from '@/libs/definitions';
import { getCookie } from '@/libs/cookies';

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

    const user: User = {
        id: getCookie('user-id')?.value as string,
        firstname: getCookie('user-firstName')?.value as string,
        lastname: getCookie('user-lastName')?.value as string,
        email: getCookie('user-email')?.value as string,
        password: getCookie('user-password')?.value as string,
        account_type: getCookie('user-accountType')?.value as string,
        avatarPath: getCookie('user-avatarPath')?.value as string,
        created_on: getCookie('user-createdOn')?.value as string,
        updated_on: getCookie('user-updatedOn')?.value as string,
    }
    
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-gray-50`}>
                {/* Sidebar Toggle */}
                <SidebarToggle/>
                {/* Sidebar */}
                <Sidebar user={user}/>
                <main className='w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72'>
                    {children}
                </main>
            </body>
            <PrelineScript />
        </html>
    )
}