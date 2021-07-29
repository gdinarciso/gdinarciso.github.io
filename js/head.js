class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="keywords" content="Narciso's Portifolio, web development, music, freelance">
        
        <link rel="shortcut icon" type="image/png" href="/image/favicon.png">
        <link rel="stylesheet" href="/css/default.css">
        <link id="darkMode" rel="stylesheet" href="/">
        <script src="/js/header.js" type="text/javascript" defer></script>

        <link href="https://fonts.googleapis.com/css2?family=Flamenco&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"> 

        <script src="/js/script.js"></script>
        
        <title>Narciso Sbrissa Grimaldi</title>

        <script src="https://kit.fontawesome.com/2b88ca1248.js" crossorigin="anonymous"></script>

        <!-- Add icon library: https://fontawesome.com/v6.0/icons -->
        <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
        <!-- Popper JS -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> -->
        <!-- Latest compiled JavaScript -->
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script> -->
        <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> -->
        <!-- <link href='https://fonts.googleapis.com/css?family=Aguafina Script' rel='stylesheet'> -->
        `;
    }
}

customElements.define('my-head', Header);