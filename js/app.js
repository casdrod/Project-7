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
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
}


/* Changing chart data */
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (this.classList.contains("hourly_chart")) {
            addData(hourly_line_chart, hourly_line_chart.data.labels, hourly_line_chart.data.datasets);
        } else if (this.classList.contains("monthly_chart")) {
            addData(monthly_line_chart, monthly_line_chart.data.labels, monthly_line_chart.data.datasets);
        } else if (this.classList.contains("weekly_chart")) {
            addData(weekly_line_chart, weekly_line_chart.data.labels, weekly_line_chart.data.datasets);
        } else if (this.classList.contains("daily_chart")) {
            addData(daily_line_chart, daily_line_chart.data.labels, daily_line_chart.data.datasets);        } else if (this.classList.contains(daily_chart)) {
        }
    });
}









