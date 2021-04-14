// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Quel année la premier Escape room a été crée  ?",
        reponse: "1989"
    },
    {
        enonce: "Hadil-JD was what ?",
        reponse: "Adopted...lol"
    },
    {
        enonce: "what's Zouhair-JD favorite place ?",
        reponse: "'derb tani'"
    }
];

var i = 1; // Permet de numéroter les questions

questions.forEach(function (question) {
    // Titre de la question
    var titreElt = document.createElement("strong");
    titreElt.textContent = "Question " + i + " : ";

    // Enoncé de la question (dans une balise <i>)
    var texteEnonceElt = document.createElement("i");
    texteEnonceElt.textContent = question.enonce;

    // Enoncé de la question
    var enonceElt = document.createElement("div");
    enonceElt.appendChild(titreElt);
    enonceElt.appendChild(texteEnonceElt);

    // La zone de réponse contient initialement un bouton
    var zoneReponseElt = document.createElement("div");
    var boutonElt = document.createElement("button");
    boutonElt.textContent = "Afficher la réponse";
    zoneReponseElt.appendChild(boutonElt);

    boutonElt.addEventListener("click", function () {
        // Remplacement du bouton par la réponse à la question
        var reponseElt = document.createElement("div");
        reponseElt.textContent = question.reponse;
        zoneReponseElt.innerHTML = "";
        zoneReponseElt.appendChild(reponseElt);
    });

    // La question regroupe l'énoncé et la zone de réponse
    var questionElt = document.createElement("p");
    questionElt.appendChild(enonceElt);
    questionElt.appendChild(zoneReponseElt);
    document.getElementById("contenu").appendChild(questionElt);

    i++;
});


document.addEventListener("keypress", function (e) {
    var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
    touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
    var couleur = "";
    switch (touche) {
    case "G":
        couleur = "grey";
        break;
    case "Y":
        couleur = "yellow";
        break;
    case "W":
        couleur = "white";
        break;
    case "R":
        couleur = "red";
        break;
    default:
        console.log("Touche " + touche + " non gérée");
    }
    // Changement de couleur de fond pour toutes les divs
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = couleur;
    }
});


function myFunction() {
  var cars = ["Montréal", "Casablanca", "London", "L.A"];
  cars.push("Calgary");
  var text = "";
  var i = 0;
  while (i < cars.length) {
    text += cars[i] + "<br>";
    i++;
  }
  document.getElementById("demo").innerHTML = text;
}