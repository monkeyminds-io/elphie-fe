// =============================================================================
// File Name: ui/components/cards.tsx
// File Description:
// This file contains all the React Card Components.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Link from 'next/link'
import Image from 'next/image'
import { Heading } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'
import { List, ListItemProps } from '../elements/lists'
import { Button } from '../elements/buttons'

// =============================================================================
// Components Props
// =============================================================================
type CardFeatureProps = {
    href: string,
    icon: any,
    title: string,
    text: string,
}

type CardPricingProps = {
    isPopular: boolean, 
    title: string,
    description: string,
    price: {
        euro: string,
        cents: string,
    },
    leftListItems: ListItemProps[],
    rightListItems: ListItemProps[],
    plan: string
}

type CardIconLinkProps = {
    icon: any, 
    title: string, 
    text: string, 
    href: string,
    link: string
}
// =============================================================================
// React Components
// =============================================================================
// Feature Card ////////////////
export const CardFeature = ({href, icon, title, text}: CardFeatureProps) => {
    return (
        <Link 
        className={`
            group flex flex-col justify-center
            p-4 md:p-7
            bg-transparent 
            rounded-[16px]
            transition-colors duration-[320ms] ease-in-out
            hover:bg-indigo-50`}
        href={href}>

            {/* Feature Card Icon */}
            <div className="flex justify-center items-center w-12 h-12 bg-indigo-500 rounded-xl">
                <Image className="flex-shrink-0 w-6 h-6" src={icon} alt={'Card icon'}/>
            </div>

            {/* Feature Card Body */}
            <div className="mt-5">
                <Heading styles={'group-hover:text-gray-600'} level={3} title={title}>{title}</Heading>
                <Paragraph styles={'mt-1'}>{text}</Paragraph>
                <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-indigo-500 decoration-2 group-hover:underline font-medium">
                    Learn more
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
            </div>
        </Link>
    )
}

export const CardPricing = ({isPopular, title, description, price, leftListItems, rightListItems, plan}: CardPricingProps) => {
    return (
        <div className={`
        p-[24px] md:p-[40px]
        relative z-10 
        ${isPopular ? 
            'bg-gradient-to-tr from-indigo-200 to-cyan-100' 
            : 'bg-white border border-gray-100'}
        rounded-[24px]
        shadow-xl shadow-gray-200`}>

            {/* Title */}
            <Heading level={3} title={title}>{title}</Heading>
            <Paragraph>{description}</Paragraph>
            {/* End Title */}

            {/* Popular Tag */}
            {isPopular ?
                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">Most popular</span>
                : ''
            }
            {/* End Popular Tag */}

            {/* Price */}
            <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800">€{price.euro}</span>
                <span className="text-lg font-bold text-gray-800">.{price.cents}</span>
                <span className="ms-3 text-gray-500">EUR / monthly</span>
            </div>
            {/* End Price */}

            {/* Grid */}
            <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">

                {/* Lists */}
                <List listItems={leftListItems}/>
                <List listItems={rightListItems}/>

            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                    <Paragraph>Cancel anytime.</Paragraph>
                    {!isPopular ? <Paragraph size={'sm'}>No card required.</Paragraph> : ''}
                </div>

                <div className="flex justify-end"> 
                    <Button href={`/register?plan=${plan}`}>Get started</Button>
                </div>
            </div>
        </div>
    )
}

export const CardIconLink = ({icon, title, text, href, link}: CardIconLinkProps) => {
    return (
        <div className="flex gap-x-7 py-6">
            <div className='flex-shrink-0 w-6 h-6 mt-1.5 text-indigo-500'>
                <Image src={icon} alt={`${title} icon`}/>
            </div>
            <div className="grow">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{text}</p>
                <a className="group mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-indigo-500 transition duration-[320ms] ease-in-out" href={href}>
                    {link}
                    <svg className="flex-shrink-0 w-2.5 h-2.5 transition duration-[320ms] ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}