'use strict'

/*
DOM - DOCUMENT OBJECT MODEL
És el conjunt d'etiquetes que componen la pàgina. Podem modificar el html d'una pàgina i podem seleccionar els elements i manipular-los. De manera que:
*/

/*
CONSEGUIR ELEMENTOS CON UN ID CONCRETO
*/

//Para manipular el div que hemos introducido. Selecciono los elementos del id, y luego puedo meterlo dentro de una variable. 
var caja = document.getElementById("micaja")/*.innerHTML*/;
//.innerHTML es para capturar el código html que hay dentro, veremos el texto dentro del div.

caja.innerHTML = "Habla la caja desde JS";
//Modifiquem el text desde JS.

caja.style.background = "black";
caja.style.padding = "20px";
caja.style.color = "white";
//Podem modificar els estils simplement fent referencia a la variable.style i afegint la propietat de css que volem.

function cambiaColor(color){
    caja.style.background = color;
}
//Funció per a que l'usuari pugui introduir un color. A la consola: cambiaColor("yellow");
//Si inspeccionem l'element podrem veure el id i tots els estils que li hem donat a JS.

caja.className = "hola hola2";//Modificar o afegir una classe

//Puc afegir qualsevol atribut html.

//console.log(caja); //Para que la consola lo lea debemos poner la etiqueta script al final del body, porque sino leerá antes el script que la variable y nos dirá que está vacio.
//Me devuelve lo que hay en el html.

/*
QUERY SELECTOR. 
Otra de las formas de seleccionar un elemento de la página. 
*/

var caja = document.querySelector("#micaja");

/*
COMO CONSEGUIR ELEMENTOS POR SU ETIQUETA
*/

var todoslosdivs = document.getElementsByTagName("div");
//console.log(todoslosdivs); //Nos da un array con los elementos div que hay. 
var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr")
seccion.prepend(hr);
//var contenidotexto = todoslosdivs[2].textContent;
//console.log(contenidotexto);
//Anirem al índex 2 i ens donarà el contingut del div, és el mateix que el innerHTML però l'últim permet assignar un valor nou al contingut.

var contenidotexto = todoslosdivs[2];
contenidotexto.innerHTML = "Otro texto para el segundo div";
contenidotexto.style.background = "cyan"
console.log(contenidotexto);

//Podem recórrer tots els divs que hi ha.

var valor;
for(valor in todoslosdivs){
    if(typeof todoslosdivs[valor].textContent == "string"){ //Comprovar si son text
    var parrafo = document.createElement("p"); //Crea un paràgraf
    var texto = document.createTextNode(todoslosdivs[valor].textContent);//El valor del paràgraf, contingut.
    parrafo.append(texto); //El p el posa dins el text.
    seccion.append(parrafo);//Ficar cadascun d'aquests p dins una altra etiqueta. També existeix el prepend per afegir-lo abans.
    }
}
seccion.append(hr);


/*
CONSEGUIR ELEMENTOS POR SU CLASSE CSS
*/

var divsrojos = document.getElementsByClassName("rojo");
var divamarillo = document.getElementsByClassName("amarillo");
//console.log(divamarillo[0]);
divamarillo[0].style.background = "yellow";

var div;

for(div in divsrojos){
    //console.log(divsrojos[div]); Per veure què està recorrent
    if(divsrojos[div].className == "rojo"){
        divsrojos[div].style.background = "red";
    } //Si no fem l'if ens agafa també altres divs
    
}
console.log(divsrojos);

/*
QUERY SELECTOR
*/
var id = document.querySelector("#encabezado");
console.log(id); //Saca el elemento cuyo id sea encabezado. Aunque le demos una clase, nos sacará solo un elemento, el primero de ellos.

var claserojo  = document.querySelectorAll(".rojo");
console.log(claserojo); //Para seleccionar todos los elementos que tienen esa clase.