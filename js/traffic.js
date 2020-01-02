var ctx = document.getElementById('traffic-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '',
            data: [750, 1100, 1500, 1250, 1750, 1250, 2000, 1000, 1750, 1000, 800],
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
        }],
    },
    options: {
        title: {
            display: false,
        },
        responsive: true,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [{
                gridLines: {
                    offsetGridLines: true
                },
                ticks: {
                    min: 500,
                    max: 2500,
                    stepSize: 500,
                    beginAtZero: false
                }
            }]
        }
    }
});