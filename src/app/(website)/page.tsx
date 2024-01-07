// =============================================================================
// File Name: (website)/page.tsx
// File Description:
// This file contains the code of the Home Page of the website.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { HeroSection } from '../../ui/sections/hero-section';
import { CardsSection } from '../../ui/sections/cards-section';
import { FeaturesSection } from '../../ui/sections/features-section';
import { PricingSection } from '../../ui/sections/pricing-section';
import { CTASection } from '../../ui/sections/cta-section';

// =============================================================================
// Page Props
// =============================================================================
type HomeProps = {}

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
  title: 'Home | Elphie',
}

// =============================================================================
// Page Component
// =============================================================================
export default function HomePage({}: HomeProps) {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection/>

      {/* Cards Section */}
      <CardsSection/>

      {/* Features Section Left */}
      <FeaturesSection imagePosition={'left'}/>

      {/* Features Section Right */}
      <FeaturesSection imagePosition={'right'}/>

      {/* Pricing Section */}
      <PricingSection/>

      {/* CTA Section */}
      <CTASection/>
    </main>
  )
}