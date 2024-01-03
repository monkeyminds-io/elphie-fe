// =============================================================================
// File Name: ui/footer.tsx
// File Description:
// This file contains the code of the Footer of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image'
import Link from 'next/link'
import { FooterLink } from './elements/links'
import { Heading } from './elements/headings'

// Images ////////////////
import logoLight from '../../public/brand/logo-light.svg'
import facebookIcon from '../../public/icons/facebook-icon.svg'
import twitterIcon from '../../public/icons/twitter-icon.svg'
import { FormSubscribe } from './components/form-subscribe'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const Footer = () => {
    // Link Arrays ////////////////
    const productLinks = [
        {href: '#', text: 'Pricing'},
        {href: '#', text: 'Features'},
        {href: '#', text: 'Updates'},
    ]

    const companyLinks = [
        {href: '#', text: 'About us'},
        {href: '#', text: 'Blog'},
        {href: '#', text: 'Careers'},
        {href: '/contact-us', text: 'Contact us'},
    ]

    return (
        <footer className="bg-gradient-to-br from-indigo-950 via-indigo-700 to-cyan-400 w-full">
            <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    <div className="col-span-full lg:col-span-1">
                        <Link className="flex items-center gap-x-2 text-xl text-white hover:text-gray-400 transition-colors duration-[320ms] ease-in-out" href="/" aria-label="Brand">
                            <Image src={logoLight} alt={'Elphie logo in Indigo color'}/> Elphie
                        </Link>
                    </div>
                    {/* End Col */}

                    <div className="col-span-1">
                        <Heading level={4} title={'Product'} styles={'text-gray-100'}>Product</Heading>
                        <div className="mt-3 grid space-y-3">
                            {/* Footer Link Element */}
                            {productLinks.map((link, index) => {
                                return <FooterLink href={link.href} text={link.text} key={index}/>
                            })}
                        </div>
                    </div>
                    {/* End Col */}

                    <div className="col-span-1">
                        <Heading level={4} title={'Product'} styles={'text-gray-100'}>Company</Heading>
                        <div className="mt-3 grid space-y-3">
                            {/* Footer Link Element */}
                            {companyLinks.map((link, index) => {
                                return <FooterLink href={link.href} text={link.text} key={index}/>
                            })}
                        </div>
                    </div>
                    {/* End Col */}

                    <div className="col-span-2">
                        <Heading level={4} title={'Product'} styles={'text-gray-100'}>Stay up to date</Heading>
                        
                        {/* Form Subscribe Component */}
                        <FormSubscribe/>
                        
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}

                <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                    <div className="flex justify-between items-center">
                        <p className="text-sm font-light text-gray-200">© 2023 Elphie. All rights reserved.</p>
                    </div>
                    {/* End Col */}

                    {/* Social Brands */}
                    <div>
                        <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                            <Image src={facebookIcon} alt={'Facebook icon'}/>
                        </a>
                        <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
                            <Image src={twitterIcon} alt={'Twitter icon'}/>
                        </a>
                    </div>
                    {/* End Social Brands */}
                </div>
            </div>
        </footer>
    )
}