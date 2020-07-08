function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
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
