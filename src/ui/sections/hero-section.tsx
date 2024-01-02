// =============================================================================
// File Name: ui/sections/hero-section.tsx
// File Description:
// This file contains the code for the Hero Section of the Website.
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { Section } from '../base/layouts'
import { Heading } from '../elements/headings'
import { Paragraph } from '../elements/paragraphs'
import { Button } from '../elements/buttons'

// =============================================================================
// React Components
// =============================================================================
export const HeroSection = () => {
    return (
        <Section id={'hero-section'} containerStyles={'pt-[80px]'}>

            {/* Announcement Banner */}
            <div className="flex justify-center">
                <a className="inline-flex items-center gap-x-2 bg-white border border-gray-100 text-xs text-gray-500 p-2 px-3 rounded-full transition hover:border-indigo-500" href="/#plans-section">
                Explore our Amazing Plans
                <span className="flex items-center gap-x-1">
                    <span className="border-s border-gray-200 text-indigo-500 ps-2">Explore</span>
                    <svg className="flex-shrink-0 w-4 h-4 text-indigo-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
                </a>
            </div>
            {/* End Announcement Banner */}

            {/* Title */}
            <div className="mt-5 max-w-[800px] text-center mx-auto">
                <Heading level={1} title={'Get control over your family finances'}>
                    Get control over your <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">family finances</span>
                </Heading>
            </div>
            {/* End Title */}

            {/* Paragraph */}
            <div className="mt-5 max-w-[400px] text-center mx-auto">
                <Paragraph size={'lg'}>By using Elphie apps you'll be able to control your family finances like never before.</Paragraph>
            </div>
            {/* End Paragraph */}

            {/* Buttons */}
            <div className="mt-8 gap-3 flex justify-center">
                <Button href={'/register'}>Create account now!</Button>
            </div>
            {/* End Buttons */}

        </Section>
    )
}