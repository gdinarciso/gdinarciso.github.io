class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
            <footer>
                <section class="icons">
                    <a href="https://github.com/gdinarciso"><i class="fab fa-github"></i></a>
                    <a href="https://au.linkedin.com/in/narciso-sbrissa-grimaldi-4984251a2"><i class="fab fa-linkedin-in"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href="mailto:narciso.sbgr@gmail.com"><i class="fas fa-envelope"></i></a>
                </section>
            
                <p class="rights"><i class="far fa-copyright"></i> 2021. Made with <i class="fa fa-heart" title="LOVE"></i> and <i class="fa fa-brain" title="DEEP WORK"></i> in Sydney, Australia. Narciso Sbrissa Grimaldi.</p>
            </footer>
        `;
    }
}

customElements.define('my-footer', Footer);