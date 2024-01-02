// =============================================================================
// File Name: ui/sections/cards-section.tsx
// File Description:
// This file contains the code of the Cards Section of the Website
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { Section } from '../base/layouts'
import { CardFeature } from '../components/cards'

// Images ////////////////
import bankIcon from '../../../public/icons/bank-icon.svg';
import moneyIcon from '../../../public/icons/money-icon.svg';
import phoneIcon from '../../../public/icons/responsive-icon.svg';
import userIcon from '../../../public/icons/user-icon.svg';

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const CardsSection = () => {
    return (
        <Section id={'cards-section'}>

            {/* Grid 4 Cols Block */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">

                {/* Feature Card */}
                <CardFeature href={'#'} icon={bankIcon} title={'+1.000 banks'} text={'Sync with any bank you use and use up to date real data.'}/>

                {/* Feature Card */}
                <CardFeature href={'#'} icon={moneyIcon} title={'Start for free'} text={'Get started with neither card required or comitment.'}/>

                {/* Feature Card */}
                <CardFeature href={'#'} icon={phoneIcon} title={'Everywhere you go'} text={'Check your finanaces in your phone as you go.'}/>

                {/* Feature Card */}
                <CardFeature href={'#'} icon={userIcon} title={'Easy to use'} text={'User friendly UI that makes it easy to use even for no-techies.'}/>

            </div>
            {/* End Grid 4 Cols Block */}

        </Section>
    )
}