// =============================================================================
// File Name: (application)/app/accounts/[id]/edit/page.tsx
// File Description:
// This file contains the code for the Edit Account Page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { getCookie } from '../../../../../../../libs/cookies'
import { Account } from '../../../../../../../libs/definitions'
import { getAccountById } from '../../../../../../../libs/endpoints'
import { AppSection } from '../../../../../../../ui/base/layouts'
import { FormAccounts } from '../../../../../../../ui/components/form-accounts'
import { Metadata } from 'next'

// =============================================================================
// Page Props
// =============================================================================

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

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Accounts", href: "/app/accounts", active: false },
        { label: "Create", href: "/app/accounts/create", active: true },
    ]

    // Setting variables
    const userId = getCookie('user-id')?.value;
    const accountId = params.id;

    // Fetch account
    const response = await fetch(getAccountById(accountId), {cache: 'no-cache'});
    const json = await response.json();
    const account: Account = json.data;

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Create Bank Account'} subheading={'Here you can create a new Bank Account.'} isTableSection={false} createAction={'#'}>
            <FormAccounts id={'form-accounts-update'} action={'update'} buttonText={'Update Account'} userId={userId} accountId={accountId} defaultValues={account}/>
        </AppSection>
    )
}