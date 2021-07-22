// function includeDoc() {
//   let doc = document
//     .getElementsByTagName('article')[0]
//     .setAttribute('include-html', './html/calculator.html');
//   console.log(doc);
// }

let darkMode = localStorage.getItem('darkMode');
// let test = document.querySelectorAll('moonSunIcon');
// test.hasAttribute('class');
// console.log(test.classList);
// let moonSunIcon = localStorage.getItem('moonSunIcon');
if (darkMode === 'on') {
  darkModeOn();
  // document.getElementById('moonSunIcon').classList.replace('fas fa-moon', 'fas fa-sun');
}

function darkModeOn() {
  document.getElementById('darkMode').href = '/css/dark.css';
  // document.getElementById('moonSunIcon').classList.replace('fas fa-moon', 'fas fa-sun');
  localStorage.setItem('darkMode', 'on');
  // localStorage.setItem('moonSunIcon', 'fas fa-sun');
}

function darkModeOff() {
  document.getElementById('darkMode').href = '';
  // document.getElementById('moonSunIcon').classList.replace('fas fa-sun', 'fas fa-moon');
  localStorage.setItem('darkMode', null);
  // localStorage.setItem('moonSunIcon', 'fas fa-moon');
}

function darkSwitch () {
  darkMode = localStorage.getItem('darkMode');
  // moonSunIcon = localStorage.getItem('moonSunIcon');
  if (darkMode !== 'on') {
    darkModeOn();
    // document.getElementById('moonSunIcon').classList.replace('fas fa-moon', 'fas fa-sun');
} else {
    darkModeOff();
    // document.getElementById('moonSunIcon').classList.replace('fas fa-sun', 'fas fa-moon');
  }
}

function on() {
  document.getElementById('overlay').style.display =
  'block';
}

function off() {
  document.getElementById('overlay').style.display =
  'none';
}

function includeHTML() {
  var z;
  var i;
  var elmnt;
  var file;
  var xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}

          if (this.status == 404) {elmnt.innerHTML = 'Page not found.';}

          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('include-html');
          includeHTML();
        }
      };

      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
