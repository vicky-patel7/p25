import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const options = {
    labels: ["Income", "Expense"],
    color: ["#213ebf", "#fd5e53"],
    chart: {
        with: "50px",
    },
    states: {
        hover: {
            filter: {
                type: "none",
            },
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
        donut: {
            expandOnClick: false,
            donut: {
                lables: {
                    show: false,
                },
            },
        },
    },
    fill: {
        colors: ["#213ebf", "#fd5e53"],
    },
    toolpit: {
        enabled: true,
        theme: "dark",
        style: {
            fontSize: "12px",
            fontFamily: undefined,
            backgroundColor: "#000000",
        },
    },
}


const ChartSummary = ({expense = 100, income = 100}) => {
    return (
        <Chart
            options={options}
            series={[income, expense]}
            type='pie'
            width={'100%'}
            height={"100%"}
        >

        </Chart>
    )
}

ChartSummary.propTypes = {
    expense : PropTypes.number,
    income : PropTypes.number
}

export default ChartSummary;
