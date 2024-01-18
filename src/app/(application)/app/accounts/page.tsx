// =============================================================================
// File Name: (application)/app/accounts/page.tsx
// File Description:
// This file contains the code for the Accounts Page of the app
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { accountsDelete } from '@/libs/actions/accounts'
import { getCookie } from '@/libs/cookies'
import { Account, User } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getUserById } from '@/libs/endpoints'
import { euroFormatter } from '@/libs/utiles'
import { AppSection } from '@/ui/base/layouts'
import { EmptyTable } from '@/ui/components/empty-table'
import { Table, TableActionsColumn, TableColumn } from '@/ui/components/table'
import { Metadata } from 'next'

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
    const userResponse = await fetch(getUserById(getCookie('user-id')?.value as string), {cache: 'no-cache'});
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
                <EmptyTable item={"Saving"} createAction={'/app/savings/create'} userType={user.accountType}/>
                : <Table headers={headers}>
                    {accounts.map((account, index) => {
                        return  (<tr key={index}>
                                    
                                    {/* Name Column */}
                                    <TableColumn data={account.name}/>

                                    {/* Type Column */}
                                    <TableColumn data={account.type}/>

                                    {/* Iban Column */}
                                    <TableColumn data={account.iban.match(/.{1,4}/g)?.join(' ').toString()}/>

                                    {/* Balance Column */}
                                    <TableColumn data={euroFormatter.format(parseFloat(account.balance))}/>

                                    {/* Last Update Column */}
                                    <TableColumn data={account.updatedOn === null ? new Date(account.createdOn).toDateString() : new Date(account.updatedOn).toDateString()}/>
                                    
                                    {/* Actions Column */}
                                    <TableActionsColumn updateAction={`/app/accounts/${user.id}-${account.id}/edit`} deleteAction={accountsDelete.bind(null, account.id, account.name)} formId={'form-delete-account'}/>
                                </tr>)})}
                </Table>
            } 
        </AppSection>
    )
}