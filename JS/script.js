//click - keypress - mouseover
// Modification du contenu HTML de la liste : ajout d'un langage
var tapea = false;
document.getElementById("add").addEventListener("click",add);
function add(){
	if (tapea == false) {
document.getElementById("add").innerHTML += '<li id="c">Pack Silver</li>';
document.getElementById("add").innerHTML += '<li id="c">Pack Metal </li>';
document.getElementById("add").innerHTML += '<li id="c">Pack Gold</li>';
tapea = true;
}
}

//Traduction d'un text............................................................
function tofrench(){
    document.getElementById("ppp").innerHTML = "Dans le laboratoire mystérieux d’un alchimiste médiéval, vous devez trouver et unir les quatre éléments de l'air terrestre, du feu et de l'eau s'échappent avant le retour de l'alchimiste ! ";
}
function toenglish(){
    document.getElementById("ppp").innerHTML = "Inside a medieval alchemists mysterious laboratory, you must find and unite the four elements of earth air, fire and water and escape before the alchemist returns !";
}
//..........................................................
document.getElementById("key").addEventListener("click",ifstat)
function ifstat() {
  var ifdecis; 
  var x = document.getElementById("myInput").value;
  if (x === "The Pirate Room"){
    ifdecis = "Vous avez un rabais de 40%";
        }  else if (x === "The Alchemist"){
    ifdecis = "Vous avez un rabais de 30%";
        }  else if (x === "Cellule Tazmamart"){
    ifdecis = "C'est gratuit! attention ( une fois tu rentre.....)";
        }  else if (x === "The Witch's Cauldron"){
    ifdecis = "Entre le 5 decembre et 4 janvier c'est gratuit !";
        }   else if (x === "Brainscape"){
    ifdecis = "No offre available";
        }    else if (x === "Zombie escape"){
    ifdecis = "if u finish under 40mins u get 100£";
            }  else if (x === ""){
    ifdecis = "";
         }  else  {
    ifdecis = "Unfortunatlly we don't have that product in here .";
  }
  document.getElementById("demo").innerHTML = ifdecis;
}
//..............................................

document.getElementById("lampp").addEventListener("mouseover",back);
function back (){
    
	document.body.style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2014/03/27/312015/cf6e3109ffd8f479fa05e2cf5755b304-700.jpg)";
}

//................................................
 var container = document.querySelectorAll('li');
for (var i = 0; i < container.length; i++) {	
	container[i].onclick= function(){for (var i = 0; i < container.length; i++) {container[i].style.fontStyle = "italic"
    };}
}