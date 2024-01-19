// =============================================================================
// File Name: (application)/app/transactions/[id]/edit/page.tsx
// File Description:
// This file contains the code for the Edit Transaction Page of the App.
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Account, Transaction } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getTransactionById } from '@/libs/endpoints'
import { AppSection } from '@/ui/base/layouts'
import { FormTransactions } from '@/ui/components/form-transactions'
import { cookies } from 'next/headers'

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Edit Transaction'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function EditTransactionPage({ params }: { params: { id: string }}) {
    
    // Setting variables
    const transactionId = params.id;

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Transactions", href: "/app/transactions", active: false },
        { label: "Edit", href: `/app/transactions/${transactionId}/edit`, active: true },
    ]

    // Fetch account
    const response = await fetch(getTransactionById(transactionId));
    const json = await response.json();
    const transaction: Transaction = json.data;

    // Fetch Accounts
    const accountsResponse = await fetch(getFilteredAccountsByUserId(cookies().get('user-id')?.value as string, ''), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const accounts: Account[] | undefined = accountsJson.data;

    return (
        <AppSection breadcrumbs={breadcrumbs} heading={'Edit Transaction'} subheading={'Here you can edit your Transaction.'} isTableSection={false} createAction={'#'}>
            <FormTransactions id={'form-transactions-update'} action={'update'} buttonText={'Update Transaction'} transactionId={transactionId} defaultValues={transaction} accounts={accounts!}/>
        </AppSection>
    )
}