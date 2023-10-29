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
  const navItemsWithInfoBars = document.querySelectorAll(".nav-item, .info-bar");

  navItemsWithInfoBars.forEach(function (item) {
    const infoBar = item.querySelector(".info-bar");

    item.addEventListener("mouseover", function () {
      infoBar.style.display = "grid";
    });

    item.addEventListener("mouseout", function (event) {
      let relatedTarget = event.relatedTarget || event.toElement;

      if (!infoBar.contains(relatedTarget)) {
        infoBar.style.display = "none";
      }
    });

    infoBar.addEventListener("mouseover", function () {
      infoBar.style.display = "grid";
    });

    infoBar.addEventListener("mouseout", function (event) {
      let relatedTarget = event.relatedTarget || event.toElement;

      if (!item.contains(relatedTarget)) {
        infoBar.style.display = "none";
      }
    });
  });

  // Sélectionnez tous les liens à l'intérieur de .info-bar
  const linksInsideInfoBar = document.querySelectorAll(".info-bar a");

  // Ajoutez un gestionnaire d'événement clic à chaque lien
  linksInsideInfoBar.forEach(function (link) {
    link.addEventListener("click", function (event) {
      // Arrêtez la propagation de l'événement clic pour éviter qu'il se propage à .info-bar
      event.stopPropagation();
    });
  });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHSsFn0hYpDC3WRUV-wxqwekUATMLDfw",
  authDomain: "cosmic-view-2023.firebaseapp.com",
  projectId: "cosmic-view-2023",
  storageBucket: "cosmic-view-2023.appspot.com",
  messagingSenderId: "902947151515",
  appId: "1:902947151515:web:f8617fea18bf245f99b03e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
