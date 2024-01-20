// =============================================================================
// File Name: (application)/dashboard/page.tsx
// File Description:
// This file contains the code for the Dashboard Page
// =============================================================================
// =============================================================================
// Page Imports
// =============================================================================
import { Metadata } from 'next'
import { Breadcrumbs } from '@/ui/elements/breadcrumbs'
import { DashboardChart } from '@/ui/chart'
import { Account, Savings, Transaction } from '@/libs/definitions'
import { getFilteredAccountsByUserId, getFilteredSavingsByUserId, getFilteredTransactionsByUserId, getTransactionsBetweenDatesByUserId } from '@/libs/endpoints'
import { cookies } from 'next/headers'
import { euroFormatter } from '@/libs/utiles'

// =============================================================================
// Page Props
// =============================================================================

// =============================================================================
// Page Metadata
// =============================================================================
export const metadata: Metadata = {
    title: 'Dashboard'
}

// =============================================================================
// Page Component
// =============================================================================
export default async function DashboardPage() {

    const breadcrumbs = [
        { label: 'App', href: '#', active: false },
        { label: 'Dashboard', href: '/dashboard', active: true }
    ]

    const userId = cookies().get('user-id')?.value as string;

    // Fetch Accounts
    const accountsResponse = await fetch(getFilteredAccountsByUserId(userId, ''), { cache: "no-cache" });
    const accountsJson = await accountsResponse.json();
    const accounts: Account[] = accountsJson.data;
    let totalBalance = 0.0;
    accounts.forEach(account => totalBalance += parseFloat(account.balance))

    // Fetch Transactions
    const transactionsResponse = await fetch(getFilteredTransactionsByUserId(userId, ''), { cache: "no-cache" });
    const transactionsJson = await transactionsResponse.json();
    const transactions: Transaction[] = transactionsJson.data;
    let totalIncome = 0.0;
    let totalExpensses = 0.0;
    transactions.forEach(transaction => {
        totalIncome += parseFloat(transaction.type === 'credit' ? transaction.amount : '0');
        totalExpensses += parseFloat(transaction.type === 'debit' ? transaction.amount : '0');

    })
    
    let today = new Date(Date.now()).toISOString();
    today = today.slice(0, today.indexOf('T'));
    let start = new Date(Date.now() - (365 * 24 * 60 * 60 * 1000)).toISOString();
    start = start.slice(0, start.indexOf('T'));
    
    const dataResponse = await fetch(getTransactionsBetweenDatesByUserId(userId, start, today), { cache: 'no-cache'});
    const dataJson = await dataResponse.json();
    const data: Transaction[] = dataJson.data;

    const datasets = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    if(data !== null) {
        data?.forEach(transaction => {
            const month = transaction.date.split('-')[1];
            switch(month) {
                case '01':
                    datasets[0] += parseFloat(transaction.amount);
                    break;
                case '02':
                    datasets[1] += parseFloat(transaction.amount);
                    break;
                case '03':
                    datasets[2] += parseFloat(transaction.amount);
                    break;
                case '04':
                    datasets[3] += parseFloat(transaction.amount);
                    break;
                case '05':
                    datasets[4] += parseFloat(transaction.amount);
                    break;
                case '06':
                    datasets[5] += parseFloat(transaction.amount);
                    break;
                case '07':
                    datasets[6] += parseFloat(transaction.amount);
                    break;
                case '08':
                    datasets[7] += parseFloat(transaction.amount);
                    break;
                case '09':
                    datasets[8] += parseFloat(transaction.amount);
                    break;
                case '10':
                    datasets[9] += parseFloat(transaction.amount);
                    break;
                case '11':
                    datasets[10] += parseFloat(transaction.amount);
                    break;
                case '12':
                    datasets[11] += parseFloat(transaction.amount);
                    break;
                default:
                    break;
            }
        })
    }

    // Fetch Savings
    const savingsResponse = await fetch(getFilteredSavingsByUserId(userId, ''), { cache: "no-cache" });
    const savingsJson = await savingsResponse.json();
    const savings: Savings[] = savingsJson.data;
    const totalSavings = typeof savings !== 'undefined' ? savings.length : 0;

    const chartData = {
        labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        datasets: [{ data: datasets }]
    }

    return (
        <section className='flex flex-col gap-8'>

            <Breadcrumbs breadcrumbs={breadcrumbs}/>

            {/* Card Section */}
            <div className="flex flex-col -m-1.5 py-1 min-w-full align-middle">

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    
                    {/* TODO Card */}
                    <div className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total balance</p>
                            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-indigo-600">€ {euroFormatter.format(totalBalance)}</h3>
                        </div>
                    </div>
                    {/* End Card */}

                    {/* Card */}
                    <div className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total income</p>
                            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-indigo-600">€ {euroFormatter.format(totalIncome)}</h3>
                        </div>
                    </div>
                    {/* End Card */}

                    {/* Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Total expensses</p>
                            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-red-600">€ -{euroFormatter.format(totalExpensses)}</h3>
                        </div>
                    </a>
                    {/* End Card */}

                    {/* Card */}
                    <a className="flex md:grid lg:flex gap-y-3 gap-x-5 p-4 md:p-5 relative bg-white hover:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"/><path d="M2 9v1c0 1.1.9 2 2 2h1"/><path d="M16 11h0"/></svg>

                        <div className="grow">
                            <p className="text-xs uppercase tracking-wide font-medium text-gray-800">Active Savings</p>
                            <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-green-600">{totalSavings}</h3>
                        </div>
                    </a>
                    {/* End Card */}

                </div>
                {/* End Grid */}


            </div>
            {/* End Card Section */}
            
            {/* TODO Chart Section */}
            <div className="flex flex-col items-center -m-1.5 p-8 min-w-full max-h-[480px] align-middle bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <DashboardChart data={chartData}/>
            </div>
            {/* End Chart Section */}

        </section>
    )
}