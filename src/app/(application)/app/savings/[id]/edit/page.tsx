// =============================================================================
// File Name: (application)/app/savings/[id]/edit/page.tsx
// File Description:
// This file contains the code for the Edit Saving Page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Account, Savings } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getSavingsById } from '@/libs/endpoints'
import { AppSection } from '@/ui/base/layouts'
import { FormSavings } from '@/ui/components/form-savings'
import { cookies } from 'next/headers'

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Edit Saving'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function EditSavingPage({ params }: { params: { id: string }}) {
    
    // Setting variables
    const savingId = params.id;

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Savings", href: "/app/savings", active: false },
        { label: "Edit", href: `/app/savings/${savingId}/edit`, active: true },
    ]

    // Fetch account
    const response = await fetch(getSavingsById(savingId));
    const json = await response.json();
    const saving: Savings = json.data;

    // Fetch Accounts
    const accountsResponse = await fetch(getFilteredAccountsByUserId(cookies().get('user-id')?.value as string, ''), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const accounts: Account[] | undefined = accountsJson.data;

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Edit Saving'} subheading={'Here you can edit your Saving.'} isTableSection={false} createAction={'#'}>
            <FormSavings id={'form-savings-update'} action={'update'} buttonText={'Update Saving'} savingId={savingId} defaultValues={saving} accounts={accounts!}/>
        </AppSection>
    )
}