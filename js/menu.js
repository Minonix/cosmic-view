window.addEventListener('DOMContentLoaded', function() {
    // Ajouter les balises <link> dans la balise <head>
    let head = document.head;
    let links = [
      'css/style.menu.css',
    ];

    links.forEach(function(link) {
      let linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = link;
      head.appendChild(linkElement);
    });
    // Ajouter les lignes de code dans le début de la balise <body>
    let body = document.body;
    let codeLines = [
      `<div class="cover-nav"></div>
       <nav class="navbar">
           <a href="index.html" class="logo">Cosmic View</a>
           <div class="nav-links none-mobile">
               <ul>
                   <li class="active"><a href="#index" class="ch-index" alt="index">Accueil</a></li>
                   <li><a href="#mission" class="ch-mission" alt="mission">les Missions</a></li>
                   <li><a href="#planete" class="ch-planete" alt="planete">Planètes</a></li>
                   <li><a href="#galerie" class="ch-galerie" alt="galerie">Galerie</a></li>
                   <li><a href="#contact" class="ch-contact" alt="contact">Contact</a></li>
               </ul>
           </div>
           <a href="index.html"><img src="img/account_circle_FILL0_wght400_GRAD0_opsz48.svg" alt="Description de l'image"></a>
           <img src="img/menu-btn.webp" class="menu-hamburger" alt="image de bouton de menu">
       </nav>`
    ];

    codeLines.forEach(function(code) {
      let codeElement = document.createElement('div');
      codeElement.innerHTML = code;
      body.insertBefore(codeElement, body.firstChild);
    });});