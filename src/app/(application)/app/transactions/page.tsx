// =============================================================================
// File Name: (application)/transactions/page.tsx
// File Description:
// This file contains the code of the Transactions Page of the Application
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { transactionsDelete } from '@/libs/actions/transactions'
import { Account, Transaction, User } from '@/libs/definitions'
import { getUserById, getFilteredTransactionsByUserId, getAccountById, getFilteredAccountsByUserId } from '@/libs/endpoints'
import { euroFormatter } from '@/libs/utiles'
import { AppSection } from '@/ui/base/layouts'
import { EmptyTable } from '@/ui/components/empty-table'
import { TableColumn, TableActionsColumn, Table } from '@/ui/components/table'
import { Loading } from '@/ui/loading'
import { Metadata } from 'next'
import { cookies } from 'next/headers'
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
    title: 'Transactions'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function TransactionsPage({searchParams}: PageProps) {

    // Setting the breadcrumbs array
    const breadcrumbs = [
        { label: "App", href: "#", active: false },
        { label: "Transactions", href: "/app/transactions", active: true }
    ]

    // TODO Headers array
    const headers = ['Account', 'Reference', 'Incomes', 'Expensses', 'date']

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
    const accounts: Account[] = accountsJson.data;

    // Fetch Transactions
    const transactionsResponse = await fetch(getFilteredTransactionsByUserId(user.id, query), { cache: "no-cache" });
    const transactionsJson = await transactionsResponse.json();
    const rawTransactions: Transaction[] = transactionsJson.data;

    // Prepare data for pagination display
    const transactions: Transaction[] = transactionsJson.ok ? rawTransactions.slice(offset, limit) : [];
    const totalPages = Math.ceil(rawTransactions === undefined ? 0 : rawTransactions.length / ROWS_PER_PAGE);

    return (
        <AppSection 
        breadcrumbs={breadcrumbs} 
        heading={'Transactions Management'} 
        subheading={'Here you can manage your bank transactions and have a full view of your finances.'} 
        isTableSection={true} 
        createAction={'/app/transactions/create'}
        currentPage={currentPage}
        totalPages={totalPages}>
            {transactions.length === 0 ?
                <EmptyTable item={"Transaction"} createAction={'/app/transactions/create'} userType={user.accountType}/>
                : <Suspense fallback={<Loading/>}>
                    <Table headers={headers}>
                        {transactions.map(async (transaction, index) => {
                            const amount = parseFloat(transaction.amount);
                            const account = accounts.find(account => account.id === transaction.accountId);
                            return  (<tr key={index}>

                                        {/* Name Column */}
                                        <TableColumn data={account!.name}/>
                                        
                                        {/* Name Column */}
                                        <TableColumn data={transaction.reference}/>

                                        {/* Creadits Column */}
                                        <TableColumn styles={'text-green-500'} data={transaction.type === 'credit' ?  `€ ${euroFormatter.format(amount).toString()}` : ''}/>

                                        {/* Debits Column */}
                                        <TableColumn styles={'text-red-500'} data={transaction.type === 'debit' ? `€ ${euroFormatter.format(amount).toString()}` : ''}/>

                                        {/* Last Update Column */}
                                        <TableColumn data={new Date(transaction.date).toDateString()}/>
                                        
                                        {/* Actions Column */}
                                        <TableActionsColumn updateAction={`/app/transactions/${transaction.id}/edit`} deleteAction={'transaction'} formId={'form-delete-transaction'} deleteId={transaction.id}/>
                                    </tr>)})}
                    </Table>
                </Suspense>
            } 
        </AppSection>
    )
}