// Fonction pour créer un cookie
function creerCookie(nom, valeur) {
  document.cookie = nom + "=" + valeur + "; path=/";
  console.log("Le cookie '" + nom + "' a été créé avec succès. Valeur : " + valeur);
}

// Récupération de tous les éléments de la barre de navigation
const elementsMenu = document.querySelectorAll(".nav-links a");

// Ajout d'un gestionnaire d'événements pour chaque élément de menu
for (const element of elementsMenu) {
  element.addEventListener("click", function() {
    // Récupération du nom de l'élément de menu cliqué
    const nomElement = this.getAttribute("alt");
    // Création d'un cookie avec le nom de l'élément de menu
    creerCookie("menuSelectionne", nomElement);
  });
}