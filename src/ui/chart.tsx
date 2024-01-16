'use client'
// =============================================================================
// File Name: 
// File Description:
// 
// =============================================================================
// =============================================================================
// Components Imports
// =============================================================================
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartData,
    Point,
 } from 'chart.js';
 import { Line } from 'react-chartjs-2'

// =============================================================================
// Components Props
// =============================================================================

// =============================================================================
// React Components
// =============================================================================
export const DashboardChart = ({ data }: { data: ChartData<"line", (number | Point | null)[], unknown>}) => {

    // Register Chart Controllers
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler,
    )

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            line: {
                tension: 0.2,
                borderWidth: 2,
                borderColor: 'rgb(99 102 241)',
            },
            point: {
                radius: 0,
                hitRadius: 0,
            },
        },
        scales: {
            x: {
                display: true,
                color: '#E5E7EB',
            },
            y: {
                display: true,
                color: '#E5E7EB',
            },
        },
    }

    return (
        <Line data={data} options={options}/>
    )
}