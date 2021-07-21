// function includeDoc() {
//   let doc = document
//     .getElementsByTagName('article')[0]
//     .setAttribute('include-html', './html/calculator.html');
//   console.log(doc);
// }

let darkMode = localStorage.getItem('darkMode');
// let darkBtn = localStorage.getItem('darkBtn');
if (darkMode === 'on') {
  darkModeOn();
}

function darkModeOn() {
  document.getElementById('darkMode').href = './css/dark.css';
  // document.getElementById('darkBtn').innerText = 'light mode';
  localStorage.setItem('darkMode', 'on');
  // localStorage.setItem('darkBtn', 'light mode');
}

function darkModeOff() {
  document.getElementById('darkMode').href = '';
  // document.getElementById('darkBtn').innerText = 'dark mode';
  localStorage.setItem('darkMode', null);
  // localStorage.setItem('darkBtn', 'dark mode');
}

function darkSwitch () {
  darkMode = localStorage.getItem('darkMode');
  // darkBtn = localStorage.getItem('darkBtn');
  if (darkMode !== 'on') {
    darkModeOn();
    } else {
    darkModeOff();
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
