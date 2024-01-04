// =============================================================================
// File Name: contact-us/page.tsx
// File Description:
// This file contains the code of the Contact Us Page of the Website
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Section } from '@/ui/base/layouts'
import { Heading } from '@/ui/elements/headings'
import { Paragraph } from '@/ui/elements/paragraphs'
import { CardIconLink } from '@/ui/components/cards'
import { FormContactUs } from '@/ui/components/form-contact-us'

// Images ////////////////
import supportIcon from '../../../public/icons/support-icon.svg'
import faqIcon from '../../../public/icons/faq-icon.svg'
import emailIcon from '../../../public/icons/email-icon.svg'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Contact Us'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function ContactUsPage() {
    // Icon Cards Array ////////////////
    const cardsArray = [
        {icon: supportIcon, title: 'Customer Support', text: "We're here to help with any question you may have", href: '#', link: 'Contact support'},
        {icon: faqIcon, title: 'FAQ', text: 'Search our FAQ for answers to anything you might ask.', href: '#', link: 'Visit FAQ'},
        {icon: emailIcon, title: 'Contact us by email', text: 'If you wish to write us an email instead please use', href: '#', link: 'support@elphie.app'},
    ]

    return (
        <Section id={'contact-us-section'} containerStyles={'max-w-2xl lg:max-w-5xl mx-auto'}>

            

            {/* Contact Us Block */}
            <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">

                {/* Card */}
                <div className="flex flex-col border border-gray-100 rounded-[16px] p-4 sm:p-6 lg:p-8 shadow-lg">
                    
                    {/* Title */}
                    <Heading level={1} title={'Contact Us'}>Contact us</Heading>
                    <Paragraph styles={'mt-4'}>We'd love to talk about how we can help you.</Paragraph>
                    {/* End title */}

                    {/* Contact Us Form Component */}
                    <FormContactUs/>

                </div>
                {/* End Card */}

                <div className="divide-y divide-gray-200">
                    
                    {/* Cards Icon Link Block */}
                    {cardsArray.map((card, index) => {
                        return <CardIconLink icon={card.icon} title={card.title} text={card.text} href={card.href} link={card.link} key={index}/>
                    })}

                </div>

            </div>
            {/* End Contact Us Block */}

        </Section>
    )
}