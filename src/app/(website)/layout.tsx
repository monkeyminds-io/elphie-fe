// =============================================================================
// File Name: app/layout.tsx
// File Description:
// This file contains the code of the website Layout Component.
// =============================================================================
// =============================================================================
// Layout Imports
// =============================================================================
import type { Metadata } from 'next'
import { inter } from '../../libs/fonts';
import '../../styles/globals.css'
import PrelineScript from '@/ui/base/preline-script';
import { ReactNode } from 'react';
import { Navbar } from '@/ui/navbar';
import { Footer } from '@/ui/footer';

// =============================================================================
// Layout Props
// =============================================================================
type LayoutProps = {
  children: ReactNode,
}

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
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <Navbar/>
        </header>
        {children}
        <Footer/>
      </body>
      {/* TODO Remove preline script */}
      <PrelineScript />
    </html>
  )
}