import Chart from 'react-apexcharts';

const Customers: React.FC = () => {
    const series = [44, 55, 41];
    const options = {
        chart: {
            type: 'donut'
        },
        labels: ['Product 1', 'Product 2', 'Product 3']
    };

    return (
        <div id='customers' className="bg-white w-2/5 rounded-lg flex items-center justify-center">
            <Chart options={options as ApexCharts.ApexOptions} series={series} type="donut" width="400px" />
        </div>
    );
};

export default Customers;
