import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type ComponentProps = {
    display?: number;
    hide?: number;
}

export function DoughuntChart({ display, hide }: ComponentProps) {


    const data = {
        labels: ['Progress'],
        datasets: [
            {
                data: [display || 100, hide || 0],
                backgroundColor: [
                    '#2e2726',
                    '#b6ada8',
                ],
                borderColor: [
                    'transparent',
                ],
                borderWidth: 2,
                borderRadius: 2
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className="w-32 h-32">
            <Doughnut data={data} options={options}/>
        </div>
    );
}