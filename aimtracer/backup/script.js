function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabButton");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.color = "rgb(70,70,70)";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.color = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("").click();
  
  //____________________________________________________________
  
  /* Open the sidenav */
  function a1() {document.getElementById("a1").style.width = "100%";}
  function a2() {document.getElementById("a2").style.width = "100%";}
  function a3() {document.getElementById("a3").style.width = "100%";}
  function a4() {document.getElementById("a4").style.width = "100%";}
  function a5() {document.getElementById("a5").style.width = "100%";}
  function a6() {document.getElementById("a6").style.width = "100%";}
  function a7() {document.getElementById("a7").style.width = "100%";}
  function a8() {document.getElementById("a8").style.width = "100%";}
  function a9() {document.getElementById("a9").style.width = "100%";}
  
  
  /* Close/hide the sidenav */
  function c1() {document.getElementById("a1").style.width = "0";}
  function c2() {document.getElementById("a2").style.width = "0";}
  function c3() {document.getElementById("a3").style.width = "0";}
  function c4() {document.getElementById("a4").style.width = "0";}
  function c5() {document.getElementById("a5").style.width = "0";}
  function c6() {document.getElementById("a6").style.width = "0";}
  function c7() {document.getElementById("a7").style.width = "0";}
  function c8() {document.getElementById("a8").style.width = "0";}
  function c9() {document.getElementById("a9").style.width = "0";}
  
  
  //____________________________________________________________
  
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }