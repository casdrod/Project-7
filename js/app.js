/* Alert Banner */
$('#alert').hide();
$('#alert').slideDown(1500);

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
    `<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">X</p>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }    
});

/* Applying active class to nav buttons */
const btns = document.getElementsByClassName("traffic-nav-link");
const canvas_div = document.querySelector('.widget-container-full');
const canvas = canvas_div.lastChild;

/* Add active class to btns */
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* Adding Data to Chart Function */
function addData(chart, label, data) {
    chart.data.labels = label;
    chart.data.datasets[0].data = data;
    chart.update();
}


/* Changing chart data */
const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        let button = e.target;
        if (button.textContent === 'Hourly') {
             addData(hourly_line_chart, hourly__lineChart__data.labels, hourly__lineChart__data.datasets[0].data);
        } else if (button.textContent === 'Daily') {
             addData(daily_line_chart, daily__lineChart__data.labels, daily__lineChart__data.datasets[0].data);        
        }  else if (button.textContent === 'Weekly') {
             addData(weekly_line_chart, weekly__lineChart__data.labels, weekly__lineChart__data.datasets[0].data);      
        } else if (button.textContent === 'Monthly') {
             addData(monthly_line_chart, monthly__lineChart__data.labels, monthly__lineChart__data.datasets[0].data);
        }
    }
});









