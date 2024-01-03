// =============================================================================
// File Name: ui/sections/cta-section.tsx
// File Description:
// This file contains the code of the CTA Section of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image'
import { Section } from '../base/layouts'
import { Button } from '../elements/buttons'
import { Heading } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'

// Images ////////////////
import buyingToys from '../../../public/images/buying-toys.jpg'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const CTASection = () => {
    return (
        <Section id={'cta-section'}>
            <div className="grid grid-cols-12 gap-2 sm:gap-6 p-[24px] md:p-[40px] bg-gradient-to-tr from-indigo-200 to-cyan-100 rounded-[24px] shadow-xl shadow-gray-200">
                <div className="col-span-4 space-y-6 sm:space-y-8">
                    {/* Title */}
                    <div className="space-y-2 md:space-y-4">
                        <Heading styles={'mb-5'} level={2} title={'Register now'}>
                        Don't wait any longer
                        </Heading>
                        <Paragraph>
                        Get control over your family finances now and enjoy the rest of your life.
                        </Paragraph>
                    </div>
                    {/* End Title */}
                    <Button href={'/register'}>Create account now</Button>
                </div>

                <div className="col-span-8">
                    {/* TODO Insert image of mobile with app */}
                    <Image className="w-full h-80 object-cover rounded-xl" src={buyingToys} alt={'Photo by Surface at Unsplash'}/>
                </div>
            </div>
        </Section>
    )
}