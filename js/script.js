let darkMode = localStorage.getItem('darkMode');
if (darkMode === 'on') {
  darkModeOn();
}

function darkModeOn() {
  document.getElementById('darkMode').href = '/css/dark.css';
  localStorage.setItem('darkMode', 'on');
}

function darkModeOff() {
  document.getElementById('darkMode').href = '';
  localStorage.setItem('darkMode', null);
}

function darkSwitch () {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'on') {
    darkModeOn();
} else {
    darkModeOff();
  }
}

// let btnContainer = document.getElementById("header-nav");
// let btns = btnContainer.getElementsByClassName("btn");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

function includeHTML() {
  let z;
  let i;
  let elmnt;
  let file;
  let xhttp;
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

// See https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

// class Header extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.innerHTML = `
//       <header>
//         <i class="moonsunicon fas fa-moon" onclick="darkSwitch()" title='Swicth to dark mode'></i>
//         <i class="moonsunicon fas fa-sun" onclick="darkSwitch()" title='Swicth to light mode'></i>
//         <!-- <button  onclick="darkSwitch()" title='Swicth to dark mode'></button> -->

//         <h1 class="greeting">Hello and welcome aboard!</h1>
//         <!-- <p class="item phrase">Deep work is the way to your purpose. Keep working!</p> -->

//         <nav id="header-nav">
//           <div class="borderAni"><a href="/index.html"><i class="fas fa-igloo"></i>HOME</a></div>
//           <div class="borderAni"><a href="/html/it.html"><i class="fas fa-microchip"></i>I.T.</a></div>
//           <div class="borderAni"><a href="/html/music.html"><i class="fas fa-drum"></i>MUSIC</a></div>
//           <div class="borderAni"><a href="/html/resume.html"><i class="fas fa-file"></i>RÉSUMÉ</a></div>
//         </nav>
//       </header>
//     `;
//   }
// }

// class Footer extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.innerHTML = `
//           <footer>
//               <section class="icons">
//                   <a href="https://github.com/gdinarciso"><i class="fab fa-github"></i></a>
//                   <a href="https://au.linkedin.com/in/narciso-sbrissa-grimaldi-4984251a2"><i class="fab fa-linkedin-in"></i></a>
//                   <a href=""><i class="fab fa-instagram"></i></a>
//                   <a href=""><i class="fab fa-facebook"></i></a>
//                   <a href="mailto:narciso.sbgr@gmail.com"><i class="fas fa-envelope"></i></a>
//               </section>
          
//               <p class="rights"><i class="far fa-copyright"></i> 2021. Made with <i class="fa fa-heart" title="LOVE"></i> and <i class="fa fa-brain" title="DEEP WORK"></i> in Sydney, Australia. Narciso Sbrissa Grimaldi.</p>
//           </footer>
//       `;
//   }
// }

// customElements.define('my-header', Header);
// customElements.define('my-footer', Footer);