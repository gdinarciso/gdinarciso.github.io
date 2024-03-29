// See https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <i class="moonsunicon fas fa-moon" onclick="darkSwitch()" title='Swicth to dark mode'></i>
        <i class="moonsunicon fas fa-sun" onclick="darkSwitch()" title='Swicth to light mode'></i>
        <!-- <button  onclick="darkSwitch()" title='Swicth to dark mode'></button> -->

        <h1 class="greeting">Hello and welcome aboard!</h1>
        <!-- <p class="item phrase">Deep work is the way to your purpose. Keep working!</p> -->

        <nav id="header-nav">
          <div class="borderAni"><a href="/index.html"><i class="fas fa-igloo"></i>HOME</a></div>
          <div class="borderAni"><a href="/html/it.html"><i class="fas fa-microchip"></i>I.T.</a></div>
          <div class="borderAni"><a href="/html/music.html"><i class="fas fa-drum"></i>MUSIC</a></div>
          <div class="borderAni"><a href="/html/resume.html"><i class="fas fa-file"></i>RÉSUMÉ</a></div>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-header', Header);