const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  if (navLinks.classList.contains("mobile-menu")) {
    navLinks.classList.remove("mobile-menu");
    setTimeout(() => {
      navLinks.classList.add("none-mobile");
    }, 500);
  } else {
    navLinks.classList.remove("none-mobile");
    setTimeout(() => {
      navLinks.classList.add("mobile-menu");
    }, 1);
  }
});

if (window.innerWidth > 926) {
  var navItemsWithInfoBars = document.querySelectorAll(".nav-item, .info-bar");

  navItemsWithInfoBars.forEach(function (item) {
    var infoBar = item.querySelector(".info-bar");

    item.addEventListener("mouseover", function () {
      infoBar.style.display = "grid";
    });

    item.addEventListener("mouseout", function (event) {
      var relatedTarget = event.relatedTarget || event.toElement;

      if (!infoBar.contains(relatedTarget)) {
        infoBar.style.display = "none";
      }
    });

    infoBar.addEventListener("mouseover", function () {
      infoBar.style.display = "grid";
    });

    infoBar.addEventListener("mouseout", function (event) {
      var relatedTarget = event.relatedTarget || event.toElement;

      if (!item.contains(relatedTarget)) {
        infoBar.style.display = "none";
      }
    });
  });

  // Sélectionnez tous les liens à l'intérieur de .info-bar
  var linksInsideInfoBar = document.querySelectorAll(".info-bar a");

  // Ajoutez un gestionnaire d'événement clic à chaque lien
  linksInsideInfoBar.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Arrêtez la propagation de l'événement clic pour éviter qu'il se propage à .info-bar
      event.stopPropagation();
    });
  });
}
