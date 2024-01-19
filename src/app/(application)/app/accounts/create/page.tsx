// =============================================================================
// File Name: (application)/app/accounts/create/page.tsx
// File Description:
// This file contains the code of the Create Account page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { getCookie } from '@/libs/cookies'
import { AppSection } from '@/ui/base/layouts'
import { FormAccounts } from '@/ui/components/form-accounts'
import { Metadata } from 'next'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Create Account'
}

// =============================================================================
// Page Component
// =============================================================================
export default function CreateAccountPage() {

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Accounts", href: "/app/accounts", active: false },
        { label: "Create", href: "/app/accounts/create", active: true },
    ]

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Create Bank Account'} subheading={'Here you can create a new Bank Account.'} isTableSection={false} createAction={'#'}>
            <FormAccounts id={'form-accounts-create'} action={'create'} buttonText={'Create Account'}/>
        </AppSection>
    )
}