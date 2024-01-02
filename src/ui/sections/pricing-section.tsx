// =============================================================================
// File Name: ui/sections/pricing-section.tsx
// File Description:
// This file contains the code for the Pricing Section of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { Section } from '../base/layouts'
import { CardPricing } from '../components/cards'
import { Heading } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'

// Images ////////////////
import checkIcon from '../../../public/icons/check-icon.svg'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const PricingSection = () => {
    return (
        <Section id={'pricing-section'}>

            {/* Title */}
            <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                <Heading level={2} title={'Start for free'}>
                    Start for free & upgrade anytime
                </Heading>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:w-10/12 xl:mx-auto">

                {/* TODO Card Pricing Component */}
                <CardPricing 
                isPopular={false} 
                title={'Calphie'} 
                description={'For families that need a quick start.'} 
                price={{
                    euro: '00',
                    cents: '00'
                }} 
                leftListItems={[
                    {icon: checkIcon, text: 'Add transactions'},
                    {icon: checkIcon, text: 'Manage goals'},
                    {icon: checkIcon, text: 'Unlimited accounts'},
                ]} 
                rightListItems={[
                    {icon: checkIcon, text: 'Add transactions'},
                    {icon: checkIcon, text: 'Manage goals'},
                    {icon: checkIcon, text: 'Unlimited accounts'},
                ]} 
                plan={'calphie'}/>

                {/* Card */}
                <CardPricing 
                isPopular={true} 
                title={'Elphie'} 
                description={'For families that want more control.'} 
                price={{
                    euro: '9',
                    cents: '99'
                }} 
                leftListItems={[
                    {icon: checkIcon, text: 'Add transactions'},
                    {icon: checkIcon, text: 'Manage goals'},
                    {icon: checkIcon, text: 'Unlimited accounts'},
                ]} 
                rightListItems={[
                    {icon: checkIcon, text: 'Add transactions'},
                    {icon: checkIcon, text: 'Manage goals'},
                    {icon: checkIcon, text: 'Unlimited accounts'},
                ]} 
                plan={'calphie'}/>

            </div>
            {/* End Grid */}


            <div className="mt-7 text-center">
                <Paragraph styles={'text-gray-400'}>
                    Prices in USD. Taxes may apply.
                </Paragraph>
            </div>
        </Section>
    )
}