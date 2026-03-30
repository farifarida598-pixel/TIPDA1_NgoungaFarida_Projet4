//Fonction pour changer la position de l'image pricipale et des mini-images lorsqu'on clique sur elles
function swapImage(clickedImg) {
  const prin = document.querySelector(".principale");

  // récupérer les sources
  let mainSrc = prin.src;
  let clickedSrc = clickedImg.src;

  // échanger
  prin.src = clickedSrc;
  clickedImg.src = mainSrc;
}

let quant = 1;
const prix = 50000; 
let Initial = 0;  //Mémoire de la dernière quantité ajoutée

//Fonction pour avoir un format correct du montant après calcul
function formatPrice(value) {
return value.toLocaleString("fr-FR") + " FCFA";
}

//Fonction pour modidier la quantité d'article et pour le calcul du prix en fonction de la quatité
function modifQte() {
  // mettre à jour quantité
  document.getElementById("nombre").textContent = quant;

  // calcul du total
  const total = prix * quant;

  // affichage propre
  document.getElementById("prixTotal").textContent = formatPrice(total);
}

//Fonction pour ajuster le bouton "+" pour augmenter la quantité
function augmente() {
  quant++;
  modifQte();
}

//Fonction pour ajuster le bouton "-" pour diminuer la quantité
function diminu() {
  if (quant > 1) {
    quant--;
    modifQte();
  }
}

let element = 0;

//Fonction pour régler la quantité au niveau de "Panier(0)" lorsqu'on clique sur le bouton "Ajouter au panier"
function Ajouter() {
  // ajouter la quantité actuelle au panier
  element = quant;
  // on sauvegarde la quantité utilisée pour l'ajout
  Initial = quant;

  MAJ();
}

//Fonction pour régler la quantité au niveau de "Panier(0)" lorsqu'on clique sur le bouton "Retirer du panier"
function Retirer() {
    // différence entre ancienne quantité et actuelle
    let difference = Initial - quant;

    // si différence positive → on retire ça
    if (difference > 0) {
        element -= difference;
    }

    // éviter les nombres négatifs
    if (element < 0) {
        element = 0;
    }

    MAJ();
}

//Fonction pour mettre à jour la quantité dans le panier
function MAJ() {
  document.getElementById("articles").textContent = element;
}

//Fonction pour demarquer la taille sélectionnée des autres tailles
function selectTaille(element) {
  const tailles = document.querySelectorAll(".tail");

  // retirer sélection sur toutes
  tailles.forEach(t => t.classList.remove("selected"));

  // ajouter sur celle cliquée
  element.classList.add("selected");
}
