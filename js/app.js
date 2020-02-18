/* Dropdown Notifications when clicking on Bell Icon */
$(".bell-svg").on('click', function() {
    $(".dropdown-content").toggleClass('show');
    $(".single-notification").toggleClass('show');
    $(".notification-text").toggleClass('show');
    $(".notification-alert").hide();
});

/* single-notification will close when 'x' is clicked */

$(".drop-down-close").on('click', function() {
  $(this).parent().hide();
})


////* Nav Links *////
const navLinks = document.querySelectorAll(".nav-icon");

/* Adding 'selected' class to navlink when clicked */
navLinks.forEach(navLink => {
  navLink.addEventListener("click", function() {
    let current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected"; 
  })
})

for (var i = 0; i < navLinks.length; i++) {
    navLink[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected"; 
    })
};

/* Applying active class to traffic nav links */
const btns = document.getElementsByClassName("traffic-nav-link");
const canvas_div = document.querySelector('.widget-container-full');
const canvas = canvas_div.lastChild;

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

////* Alert Banner *////
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

////* Top Traffic Chart *////
/* Adding Data to Chart Function */
function addData(chart, label, data) {
    chart.config.data.labels = label;
    chart.config.data.datasets[0].data = data;
    chart.update();
}

/* Changing chart data */
const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', e => {
    if (e.target.tagName === "LI") {
        let button = e.target;
        if (button.textContent === 'Hourly') {     
            addData(weekly_line_chart, hourly__lineChart__data.labels, hourly__lineChart__data.datasets[0].data);
         } else if (button.textContent === 'Daily') {
            addData(weekly_line_chart, daily__lineChart__data.labels, daily__lineChart__data.datasets[0].data);
         } else if (button.textContent === 'Weekly') {
            addData(weekly_line_chart, weekly__lineChart__data__copy.labels, weekly__lineChart__data__copy.datasets[0].data); 
         } else if (button.textContent === 'Monthly') {
            addData(weekly_line_chart, monthly__lineChart__data.labels, monthly__lineChart__data.datasets[0].data);
         }
    }
});

////* Message Section *////
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

////* Send Button Actions *////
send.addEventListener('click', e => {
    if (user.value === "" && message.value === "") {
        alert("ERROR: Please fill out both Search and Message fields.");
    } else if (user.value === "" && message.value != "") {
        alert("ERROR: Please search for user.");
    } else if (user.value != "" && message.value === "") {
        alert(`ERROR: Please type a message for ${user.value}.`);
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        eraseText();
    }
})

/* Erase User and Message fields when message was successfully sent */
function eraseText() {
  document.getElementById("userField").value = "";
  document.getElementById("messageField").value = "";
}


////* Drop down user list *////
/* Users Array*/
var users = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("userField"), users);