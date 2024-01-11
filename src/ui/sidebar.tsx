// =============================================================================
// File Name: ui/sidebar.tsx
// File Description:
// This file contains the code for the React Componenet Sidebar
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image'
import Link from 'next/link';
import { LogoutLink, SidebarLink } from './elements/links';
import { Heading } from './elements/headings';
import { Paragraph } from './elements/paragraphs';

// Images ////////////////
import logoIndigo from '@/../public/brand/logo-indigo.svg';
import dashboardIcon from '@/../public/icons/dashboard-icon.svg';
import moneyIcon from '@/../public/icons/money-icon-gray.svg';
import transactionsIcon from '@/../public/icons/transaction-icon.svg';
import accountsIcon from '@/../public/icons/accounts-icon.svg';
import banksIcon from '@/../public/icons/bank-icon-gray.svg';
import userIcon from '@/../public/icons/user-icon-gray.svg';


// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const Sidebar = () => {

    // TODO Create Array with Sidebar Links props to loop through
    const linksProps = [
        {
            href: '/app/dashboard',
            text: 'Dashboard',
            icon: dashboardIcon,
        },
        {
            href: '/app/savings',
            text: 'Savings',
            icon: moneyIcon,
        },
        {
            href: '/app/transactions',
            text: 'Transactions',
            icon: transactionsIcon,
        },
        {
            href: '/app/accounts',
            text: 'Accounts',
            icon: accountsIcon,
        },
        {
            href: '/app/banks',
            text: 'Banks',
            icon: banksIcon,
        },
    ]

    return (
        <nav id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 py-2 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">

            <div className="hs-accordion-group p-6 w-full h-full flex flex-col gap-y-10" data-hs-accordion-always-open>
                
                {/* App Brand Link */}
                <Link className="flex items-center gap-x-2 text-xl text-gray-800 hover:text-gray-500 transition-colors duration-[320ms] ease-in-out" href="/app/dashboard" aria-label="Brand">
                    <Image src={logoIndigo} alt={'Elphie logo in Indigo color'}/> Elphie
                </Link>
                {/* End App Brand Link */}

                <ul className="space-y-1.5 h-full">

                    {linksProps.map((link, index) => {
                        return (
                            <li key={index}>
                                <SidebarLink href={link.href} text={link.text} icon={link.icon}/>
                            </li>
                        )
                    })}

                </ul>


                {/* User */}
                <div className="hs-tooltip inline-block [--trigger:click] sm:[--placement:top]">
                    <div className="hs-tooltip-toggle max-w-xs p-3 flex items-center gap-x-3 bg-white hover:bg-gray-100 rounded-lg transition-colors duration-[320ms] ease-in-out cursor-pointer">
                        
                        {/* TODO Load image dynamically if avatar_path is not null */}
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-xs font-semibold text-white leading-none">
                            AC
                        </span>

                        {/* User Content */}
                        <div className="grow">
                            {/* TODO Update dynamically with user name */}
                            <Heading level={4} title={'User Name'} >
                                Amanda Harvey
                            </Heading>

                            {/* TODO Update dynamically with user email */}
                            <Paragraph size='sm'>
                                amanda@email.com
                            </Paragraph>
                        </div>
                        {/* End User Content */}

                        {/* Popover Content */}
                        <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity inline-block absolute invisible z-50 max-w-xs w-[207px] p-2 bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full" role="tooltip">
                            <ul className="space-y-1.5 h-full">
                                <li>
                                    <SidebarLink href={'/app/my-account'} text={'My Account'} icon={userIcon}/>
                                </li>
                                <li>
                                    <LogoutLink/>
                                </li>
                            </ul>
                        </div>
                        {/* End Popover Content */}
                    </div>
                </div>
                {/* End User */}

            </div>
            
        </nav>
    )
}