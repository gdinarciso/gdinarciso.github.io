let darkMode = localStorage.getItem("darkMode");
if (darkMode === "on") {
  darkModeOn();
}

function darkModeOn() {
  document.getElementById("darkMode").href = "/css/dark.css";
  localStorage.setItem("darkMode", "on");
}

function darkModeOff() {
  document.getElementById("darkMode").href = "";
  localStorage.setItem("darkMode", null);
}

function darkSwitch() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "on") {
    darkModeOn();
  } else {
    darkModeOff();
  }
}

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function includeHTML() {
  let z;
  let i;
  let elmnt;
  let file;
  let xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }

          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }

          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };

      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

const navContainer = document.getElementById("header-nav");
// let btnContainer = document.getElementById("header-nav");
const abtns = navContainer.getElementsByClassName("abtn");
// let abtns = navContainer.getElementsByClassName("abtn");
for (let i = 0; i < abtns.length; i++) {
  abtns[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
