'use client'
// =============================================================================
// File Name: links.tsx
// File Description:
// This file contains all the Link React Components
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { userLogout } from '@/libs/actions/logout';
import clsx from 'clsx'

// IMAGES ////////////////
import logoutIcon from '@/../public/icons/logout-icon.svg';

// =============================================================================
// Components Props
// =============================================================================
// NAV LINK PROPS ////////////////
type LinkProps = {
    href: string,
    text: string,
    icon?: string | StaticImport,
}

// =============================================================================
// React Components
// =============================================================================
// NAV LINK COMPONENT ////////////////
export const NavLink = ({href, text}: LinkProps) => {

    const pathname = usePathname();

    return (
        <Link 
        className={clsx(
            // Normal styles
            `text-gray-400 hover:text-indigo-500 transition-colors duration-[320ms] ease-in-out md:py-6`,
            // Active styles
            { 'text-indigo-500': pathname === href, })} 
        href={href}>
            {text}
        </Link>
    )
}

export const FooterLink = ({href, text}: LinkProps) => {
    return (
        <Link 
        className="inline-flex gap-x-2 text-gray-400 hover:text-gray-100 transition-colors duration-[320ms] ease-in-out"
        href={href}>
            {text}
        </Link>
    )
}

export const SidebarLink = ({href, icon, text}: LinkProps) => {
    
    const pathname = usePathname();

    return (
        <Link className={clsx(
                // Normal styles
                'w-full flex items-center gap-x-4 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-[320ms] ease-in-out',
                // Active styles
                {'bg-indigo-100': pathname === href}
        )} 
        href={href}>
            {typeof icon !== 'undefined' ? <Image className='w-[18px]' src={icon} alt={`${text} icon`}/> : ''}
            {text}
        </Link>
    )
}



export const LogoutLink = () => {

    return (
        <form action={userLogout}>
            <button type="submit" className={'w-full flex items-center gap-x-4 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-[320ms] ease-in-out'}>
                <Image className='w-[18px]' src={logoutIcon} alt={'Logout icon'}/>
                Logout
            </button>
        </form>
    )
}