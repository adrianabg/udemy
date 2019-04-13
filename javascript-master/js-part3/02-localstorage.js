'use strict'

//LOCAL STORAGE. Ens permet guardar informació al nostre navegador web a mode de sessió i que aquesta informació es mantingui mentre naveguem en aquella sessió. 

//Per saber si el navegador és compatible/està disponible.
if(typeof(Storage) !== "undefined"){
    console.log("Localstorage disponible")
}else{
    console.log("Incompatible con Localstorage")
}

//Como guardar datos en el localstorage.
localStorage.setItem("Título", "Curso de Sympony");

//Recuperar elemento y meterlo en mi web.
console.log(localStorage.getItem("Título"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("Título");

//Guardar objetos JSON en LS.
var usuario = {
    nombre: "Adriana Biarnés",
    email: "adri@adri.com",
    web: "adrianabiarnes.com"
};
//El objeto como tal no nos lo detecta, en application nos saldrá [object, object], por lo que para viajar los datos necesitan ser un objecte JSON en format string. El primer és la clau, el nom que li donem a aquesta info, i el segon és el valor que és el objecte que convertim a string.

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto. Tenim que reconvertir el JSON string en un objecte de JS utilitzable
console.log(localStorage.getItem("usuario"));

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs); //A través d'aquesta variable tenim accés a tots els elements del objecte posant userjs.elquesiguidedins

document.querySelector("#peliculas").append(" "+userjs.web+ " - "+userjs.nombre);

document.querySelector("#datos").append(userjs.web+ " - "+userjs.nombre); //Per ficar-lo al altre div

//Borrar el localstorage
localStorage.removeItem("usuario");
//Se ejecuta en la página porque el código actua en cascada y está la información, pero en el LS ya no aparece.
localStorage.clear(); //Borra tot el LS.