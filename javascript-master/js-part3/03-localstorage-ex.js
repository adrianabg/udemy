'use strict'

//Vamos a tener un formulario que nos permita añadir películas.

var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(){
    //console.log("Entra"); //Para saber si ha entrado en la función
    var titulo = document.getElementById("addpeli").value;
    if(titulo.length >= 1){ //Si escriben algo que me lo guarde.
        localStorage.setItem(titulo, titulo);
    }
});

var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){
    //console.log(localStorage[i]);
    if(typeof localStorage[i] == "string"){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
}//Ens apareixeran totes les películes en una llista quan les vagi escrivint.

//Borrar pelis.

var formularioB = document.querySelector("#formborrar");

formularioB.addEventListener("submit", function(){
    //console.log("Entra"); //Para saber si ha entrado en la función
    var titulo = document.querySelector("#deletepeli").value;

    if(titulo.length >= 1){ //Si escriben algo que me lo guarde.
        localStorage.removeItem(titulo); //Se borrará el elemento con ese título
    }
});

//Lu de borrar em funciona si mirem application, al html no em surt. 