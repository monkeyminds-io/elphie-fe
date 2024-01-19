// =============================================================================
// File Name: (application)/app/accounts/[id]/edit/page.tsx
// File Description:
// This file contains the code for the Edit Account Page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Account } from '@/libs/definitions'
import { getAccountById } from '@/libs/endpoints'
import { AppSection } from '@/ui/base/layouts'
import { FormAccounts } from '@/ui/components/form-accounts'

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Edit Account'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function EditAccountPage({ params }: { params: { id: string }}) {
    
    // Setting variables
    const accountId = params.id;

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Accounts", href: "/app/accounts", active: false },
        { label: "Edit", href: `/app/accounts/${accountId}/edit`, active: true },
    ]

    // Fetch account
    const response = await fetch(getAccountById(accountId));
    const json = await response.json();
    const account: Account = json.data;

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Create Bank Account'} subheading={'Here you can create a new Bank Account.'} isTableSection={false} createAction={'#'}>
            <FormAccounts id={'form-accounts-update'} action={'update'} buttonText={'Update Account'} accountId={accountId} defaultValues={account}/>
        </AppSection>
    )
}