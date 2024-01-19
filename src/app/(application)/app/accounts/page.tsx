// =============================================================================
// File Name: (application)/app/accounts/page.tsx
// File Description:
// This file contains the code for the Accounts Page of the app
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Account, User } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getUserById } from '@/libs/endpoints'
import { euroFormatter } from '@/libs/utiles'
import { AppSection } from '@/ui/base/layouts'
import { accountsDelete } from '@/libs/actions/accounts'
import { Table, TableActionsColumn, TableColumn } from '@/ui/components/table'
import { EmptyTable } from '@/ui/components/empty-table'
import { Loading } from '@/ui/loading'
import { Suspense } from 'react'

// =============================================================================
// Page Props
// =============================================================================
type PageProps = {
    searchParams?: {
        query?: string,
        page?: string,
    }
}

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Accounts'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function AccountsPage({searchParams}: PageProps) {

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Accounts", href: "/app/accounts", active: true }
    ]

    // Headers array
    const headers = ['Name', 'Type', 'IBAN', 'Balance', 'Last Update']

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
    const accountsResponse = await fetch(getFilteredAccountsByUserId(user.id, query), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const rawAccounts: Account[] | undefined = accountsJson.data;

    // Prepare data for pagination display
    const accounts: Account[] = rawAccounts === undefined ? [] : rawAccounts.slice(offset, limit);
    const totalPages = Math.ceil(rawAccounts === undefined ? 0 : rawAccounts.length / ROWS_PER_PAGE);

    return (
        <AppSection 
        breadcrumbs={breadcrumbs} 
        heading={'Accounts Management'} 
        subheading={'Here you can manage your bank accounts and have a full view of your finances.'} 
        isTableSection={true} 
        createAction={'/app/accounts/create'}
        currentPage={currentPage}
        totalPages={totalPages}>
            {accounts.length === 0 ?
                <EmptyTable item={"Account"} createAction={'/app/accounts/create'} userType={user.accountType}/>
                : <Suspense fallback={<Loading/>}>

                    <Table headers={headers}>
                        {accounts.map((account, index) => {
                            return  (<tr key={index}>
                                        
                                        {/* Name Column */}
                                        <TableColumn data={account.name}/>

                                        {/* Type Column */}
                                        <TableColumn data={account.type}/>

                                        {/* Iban Column */}
                                        <TableColumn data={account.iban.match(/.{1,4}/g)?.join(' ').toString()}/>

                                        {/* Balance Column */}
                                        <TableColumn data={`€ ${euroFormatter.format(parseFloat(account.balance))}`}/>

                                        {/* Last Update Column */}
                                        <TableColumn data={account.updatedOn === null ? new Date(account.createdOn).toDateString() : new Date(account.updatedOn).toDateString()}/>
                                        
                                        {/* Actions Column */}
                                        <TableActionsColumn updateAction={`/app/accounts/${account.id}/edit`} deleteAction={'account'} formId={'form-delete-account'} deleteId={account.id}/>
                                    </tr>)})}
                    </Table>
                </Suspense>
            } 
        </AppSection>
    )
}