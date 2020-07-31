function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentback");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "rgb(50,50,50)";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.color = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("Open").click();

//____________________________________________________________

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}