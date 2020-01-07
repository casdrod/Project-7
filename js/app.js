/* Alert Banner */
$('#alert').hide();
$('#alert').slideDown(2000);

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
    `<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>`;

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

/* Change canvas ID to change chart data */
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        if (this.classList.contains(hourly_chart)) {
            canvas.id = "hourly_chart";
        } else if (this.classList.contains(daily_chart)) {
            canvas.id = "daily_chart";
        } else if (this.classList.contains(monthly_chart)) {
            canvas.id = "monthly_chart";
        } else if (this.classList.contains(weekly_chart)) {
            canvas.id = "weekly_chart";
        }
    })
}









