// =============================================================================
// File Name: (application)/app/transactions/create/page.tsx
// File Description:
// This file contains the code of the Create Account page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { AppSection } from '@/ui/base/layouts'
import { FormTransactions } from '@/ui/components/form-transactions'
import { Account } from '@/libs/definitions'
import { getFilteredAccountsByUserId } from '@/libs/endpoints'
import { cookies } from 'next/headers'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Create Transaction'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function CreateTransactionPage() {

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Transactions", href: "/app/transactions", active: false },
        { label: "Create", href: "/app/transactions/create", active: true },
    ]

    // Fetch Accounts
    const accountsResponse = await fetch(getFilteredAccountsByUserId(cookies().get('user-id')?.value as string, ''), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const accounts: Account[] | undefined = accountsJson.data;

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Create Transaction'} subheading={'Here you can create a new Transaction.'} isTableSection={false} createAction={'#'}>
            <FormTransactions id={'form-transactions-create'} action={'create'} buttonText={'Create Transaction'} accounts={accounts!}/>
        </AppSection>
    )
}