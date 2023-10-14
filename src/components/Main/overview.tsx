import Chart from 'react-apexcharts'

const Overview: React.FC = () => {
    const options = {
        chart: {
            id: 'overview-apexchart'
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            },

        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
            }

        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    }
    const series = [
        {
            name: 'Earnings',
            data: [30, 40, 35, 50, 49, 60, 70, 61, 15, 51, 36, 28]
        }
    ]
    return (
        <div id='overview' className="bg-white w-3/5 rounded-lg">

            <div className='flex justify-between items-center m-3'>
                <div>
                    <h1 className='font-semibold text-xl'>Overview</h1>
                    <p className='text-slate-400 font-semibold'>Monthly Earning</p>
                </div>
                <div className='text-slate-400 font-semibold'>
                    <select id="mySelect">
                        <option value="option1">Quarterly</option>
                        <option value="option2">Annually</option>
                    </select>
                </div>
            </div>
            <Chart options={options} series={series} type="bar" />
        </div>

    )
}

export default Overview

