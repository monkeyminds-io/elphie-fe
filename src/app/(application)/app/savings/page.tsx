// =============================================================================
// File Name: (application)/savings/page.tsx
// File Description:
// This file contains the code of the Goals Page of the Application
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { savingsDelete } from '@/libs/actions/savings'
import { getCookie } from '@/libs/cookies'
import { Account, Savings, User } from '@/libs/definitions'
import { deleteSavings, getAccountById, getFilteredSavingsByUserId, getUserById } from '@/libs/endpoints'
import { euroFormatter } from '@/libs/utiles'
import { AppSection } from '@/ui/base/layouts'
import { EmptyTable } from '@/ui/components/empty-table'
import { Table, TableActionsColumn, TableColumn } from '@/ui/components/table'
import { Metadata } from 'next'


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
    const headers = ['Name', 'Current amount', 'Target amount', 'Remaining amount', 'Target date']

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
                : <Table headers={headers}>
                    {savings.map((saving, index) => {

                        return  (<tr key={index}>
                                    {/* Name Column */}
                                    <TableColumn data={saving.name}/>

                                    {/* current Amount Column */}
                                    {/* TODO Display linked account balance */}
                                    <TableColumn data={'€€25,000.00'}/>

                                    {/* Target Amount Column */}
                                    <TableColumn data={euroFormatter.format(parseFloat(saving.targetAmount))}/>

                                    {/* Remaining Column */}
                                    {/* TODO Calculate with accountBalance - targetAmount */}
                                    <TableColumn data={'-€25,000.00'}/>

                                    {/* Target Date Column */}
                                    <TableColumn data={saving.targetDate}/>
                                    
                                    {/* Actions Column */}
                                    <TableActionsColumn updateAction={`/app/savings/${saving.id}/edit`} deleteAction={savingsDelete.bind(null, saving.id, saving.name)} formId={'form-delete-saving'}/>
                                </tr>)})}
                </Table>
            } 
        </AppSection>
    )
}
