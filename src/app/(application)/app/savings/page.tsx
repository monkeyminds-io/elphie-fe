// =============================================================================
// File Name: (application)/savings/page.tsx
// File Description:
// This file contains the code of the Goals Page of the Application
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { savingsDelete } from '@/libs/actions/savings'
import { Account, Savings, User } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getFilteredSavingsByUserId, getUserById } from '@/libs/endpoints'
import { euroFormatter } from '@/libs/utiles'
import { AppSection } from '@/ui/base/layouts'
import { EmptyTable } from '@/ui/components/empty-table'
import { Table, TableActionsColumn, TableColumn } from '@/ui/components/table'
import { Loading } from '@/ui/loading'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Suspense } from 'react'


// =============================================================================
// Page Props
// =============================================================================
type SavingsPageProps = {
    searchParams?: {
        query?: string,
        page?: string,
    }
}

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Savings'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function SavingsPage({searchParams}: SavingsPageProps) {
    
    // Creating Breadcrumbs array
    const breadcrumbs = [
        { label: 'App', href: '#', active: false },
        { label: 'Savings', href: '/app/savings', active: true }
    ];

    // Headers array
    const headers = ['Name', 'Saved', 'Target', 'Remaining', 'Target date']

    // Variables for Paggination
    const ROWS_PER_PAGE = 8;
    const query = searchParams?.query || '';
    const currentPage = searchParams?.page || 1;
    
    // Set Offset and Limit for Paggination
    const offset = ROWS_PER_PAGE * (Number(currentPage) - 1);
    const limit = offset + ROWS_PER_PAGE;

    // Fetch User
    const userResponse = await fetch(getUserById(cookies().get('user-id')?.value as string), {cache: 'no-cache'});
    const userJson = await userResponse.json();
    const user: User = userJson.data;

    // Fetch Accounts
    const accountsResponse = await fetch(getFilteredAccountsByUserId(user.id, ''), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const accounts: Account[] | undefined = accountsJson.data;

    // Fetch Savings
    const savingsResponse = await fetch(getFilteredSavingsByUserId(user.id, query), { cache: "no-cache" });
    const savingsJson = await savingsResponse.json();
    const rawSavings: Savings[] | undefined = savingsJson.data;

    // Prepare data for pagination display
    const savings: Savings[] = rawSavings === undefined ? [] : rawSavings.slice(offset, limit);
    const totalPages = Math.ceil(rawSavings === undefined ? 0 : rawSavings.length / ROWS_PER_PAGE);

    // TODO Use map to add new properties currentAmount and remiainingAmount to each saving object of the savings array.
    
    return (
        <AppSection 
        breadcrumbs={breadcrumbs} 
        heading={'Savings Management'} 
        subheading={'Here you can review your saving goals and manage your progress.'} 
        isTableSection={true} 
        createAction={'/app/savings/create'}
        currentPage={currentPage} 
        totalPages={totalPages}> 
            {savings.length === 0 ?
                <EmptyTable item={"Saving"} createAction={'/app/savings/create'} userType={user.accountType}/>
                : <Suspense fallback={<Loading/>}>
                    <Table headers={headers}>
                        {savings.map((saving, index) => {
                            const account = accounts!.find(account => account.id === saving.accountId);
                            return  (<tr key={index}>
                                    {/* Name Column */}
                                    <TableColumn data={saving.name}/>

                                    {/* current Amount Column */}
                                    <TableColumn styles={'text-green-500'} data={`€ ${euroFormatter.format(parseFloat(account!.balance))}`}/>

                                    {/* Target Amount Column */}
                                    <TableColumn data={`€ ${euroFormatter.format(parseFloat(saving.targetAmount))}`}/>

                                    {/* Remaining Column */}
                                    <TableColumn styles={'text-red-500'} data={`€ ${euroFormatter.format(parseFloat(account!.balance) - parseFloat(saving.targetAmount))}`}/>

                                    {/* Target Date Column */}
                                    <TableColumn data={new Date(saving.targetDate).toDateString()}/>
                                    
                                    {/* Actions Column */}
                                    <TableActionsColumn updateAction={`/app/savings/${saving.id}/edit`} deleteAction={'savings'} formId={'form-delete-saving'} deleteId={saving.id}/>
                                </tr>)})}
                    </Table>
                </Suspense>
            } 
        </AppSection>
    )
}
