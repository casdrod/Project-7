// *********************
// Chart.js
// *********************

/* ****Create Chart Function**** */
var doChart = function(o, d) {
    if (typeof(o) != 'undefined' && o.length > 0) {
        return new Chart(o, d);
    } else {
        return null;
    }
}
/* ********************** */
/* ****Chart Options**** */
/* ********************* */

/* ****Line Chart**** */
const lineChart__options = {
    responsive: true,
    title: {
        display: false
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                // offsetGridLines: true
            }
        }],
        yAxes: [{
            gridLines: {
                // offsetGridLines: true
            },
            ticks: {
                min: 250,
                max: 2500,
                stepSize: 250,
                beginAtZero: true
            }
        }]
    }
}


/* **** Bar Chart**** */
const barChart__options = {
    responsive: true,
    title: {
        display: false
    },
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            gridLines: {
                offsetGridLines: true
            },
            ticks: {
                min: 50,
                max: 250,
                stepSize: 50,
                beginAtZero: false
            }
        }]
    }
}

var dntChart__options = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 25
        }
    },
    scales: {
        xAxes: [{
            display: false,
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: true
            }
        }]
    }
}


/* ****************** /
/* ****Chart Data**** */
/* ****************** */

/* **** Line Charts **** */
const weekly__lineChart__data = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        label: '',
        data: [750, 1100, 1500, 1250, 1750, 1350, 2000, 1000, 1750, 1000, 800],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const hourly__lineChart__data = {
    labels: ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'],
    datasets: [{
        label: '',
        data: [500, 720, 1000, 600, 1650, 1200, 1000, 800, 1200, 1500, 900],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const daily__lineChart__data = {
    labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
    datasets: [{
        label: '',
        data: [850, 1200, 1300, 1250, 1550, 1050, 700],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

const monthly__lineChart__data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        label: '',
        data: [1000, 900, 1600, 1350, 1100, 700, 950, 1500, 1450, 2000, 1400, 2000],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

/* **** Bar Chart **** */
const barChart__data = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: '',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
};

/* Donut Chart */
var dntChart__data = {
    datasets: [{
        data: [15, 10, 40],
        backgroundColor: ['#56D93D', '#6A6CCF', '#194265']
    }],
    labels: [
        ' Phones',
        ' Tablets',
        ' Desktop'
    ]
}


const hourly_lineChart = $('#line_charts');
let hourly_line_chart = doChart(hourly_lineChart, {
    type: 'line',
    data: hourly__lineChart__data,
    options: lineChart__options
});

const daily_lineChart = $('#line_charts');
let daily_line_chart = doChart(daily_lineChart, {
    type: 'line',
    data: daily__lineChart__data,
    options: lineChart__options
});

const monthly_lineChart = $('#line_charts');
let monthly_line_chart = doChart(monthly_lineChart, {
    type: 'line',
    data: monthly__lineChart__data,
    options: lineChart__options
});

const weekly_lineChart = $('#line_charts');
let weekly_line_chart = doChart(weekly_lineChart, {
    type: 'line',
    data: weekly__lineChart__data,
    options: lineChart__options
});



const barChart = $("#daily-chart");
let bar_chart = doChart(barChart, {
    type: "bar",
    data: barChart__data,
    options: barChart__options
});


const dntChart = $("#users-chart");
let dnt_chart = doChart(dntChart, {
    type: "doughnut",
    data: dntChart__data,
    options: dntChart__options
});