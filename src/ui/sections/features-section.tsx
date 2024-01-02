// =============================================================================
// File Name: ui/sections/features-section.tsx
// File Description:
// This file contains the code for the Features Section of the website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import Image from 'next/image'
import { Section } from '../base/layouts'
import { Heading } from '../elements/headings';
import { Paragraph } from '../elements/paragraphs';
import { List } from '../elements/lists';

// Images ////////////////
import lookingFutureImage from '../../../public/images/looking-at-the-future.jpg';
import bookingHolidaysImage from '../../../public/images/booking-next-holidays.jpg';
import relaxDanceImage from '../../../public/images/relax-family-dance.jpg';
import takeControl from '../../../public/images/taking-control-or-not.jpg';
import checkIcon from '../../../public/icons/check-icon.svg';

// =============================================================================
// Components Props
// =============================================================================
type FeaturesSectionProps = {
    imagePosition: string;
}

// =============================================================================
// React Components
// =============================================================================
export const FeaturesSection = ({imagePosition}: FeaturesSectionProps) => {
    if(imagePosition === 'left') {
        return(
            <Section id={'features-section-left'} >
    
                {/* Grid Container */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
    
                    <div className="lg:col-span-7">
                        {/* Grid */}
                        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                        <div className="col-span-3">
                            <Image className="rounded-xl" src={relaxDanceImage} alt="Photo by Surface at Unsplash."/>
                        </div>
        
                        <div className="col-span-5">
                            <Image className="rounded-xl" src={bookingHolidaysImage} alt="Photo by Surface at Unsplash."/>
                        </div>
        
                        <div className="col-span-4">
                            <Image className="rounded-xl" src={lookingFutureImage} alt="Photo by Surface at Unsplash."/>
                        </div>
                        </div>
                        {/* End Grid */}
                    </div>
                    {/* End Col */}
        
                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <Heading level={2} title={'Manage your money'}>
                                    Manage your money with ease from your home
                                </Heading>
                                <Paragraph>
                                    Stop worring so much about money and let Elphie help with your finances. Relax by getting full control.
                                </Paragraph>
                            </div>
                            {/* End Title */}
            
                            {/* List */}
                            <List listItems={[
                                {icon: checkIcon, text:'Less stressing– more enjoying'}, 
                                {icon: checkIcon, text: 'Save as you live your life'},
                                {icon: checkIcon, text: 'Create budgets efficiently'}
                            ]}/>
                            {/* End List */}
                        </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </Section>
        )
    }

    if(imagePosition === 'right') {
        return (
            <Section id={'features-section-right'}>
            {/* Grid */}
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">

                {/* Col */}
                <div className="mt-5 sm:mt-10 lg:mt-0 space-y-6 sm:space-y-8 lg:col-span-1">
                    {/* Title */}
                    <div className="space-y-2 md:space-y-4">
                        <Heading level={2} title={'Taking control'}>
                            Taking control is easy.
                            <br />
                            Or should be...
                        </Heading>
                        <Paragraph>
                            Even if you're getting some little help from your kids, while doing some yoga, and the connection is dropping, you just need to follow 3 simple steps.
                        </Paragraph>
                    </div>
                    {/* End Title */}
                    
                    {/* List */}
                    <List listItems={[
                        {icon: checkIcon, text:'Create a free account'}, 
                        {icon: checkIcon, text: 'Connect all your bank accounts'},
                        {icon: checkIcon, text: 'Take control & enjoy your life'}
                    ]}/>
                </div>
                {/* End Col */}

                {/* Col */}
                <div className="aspect-w-16 aspect-h-7 lg:col-span-2">
                    <Image className="w-full object-cover rounded-xl" src={takeControl} alt="Photo by Surface at Unsplash"/>
                </div>
                {/* End Col */}

            </div>
            {/* End Grid */}
        </Section>
        )
    }
    
}