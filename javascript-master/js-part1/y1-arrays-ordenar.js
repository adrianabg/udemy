'use strict'

//ORDENAR ARREGLOS

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Spiderman", "Birdman", "Gran Torino"];

//peliculas.sort(); //Por defecto se ordena A-Z.
peliculas.reverse(); //Ordre invers que li hem donat.

console.log(peliculas);

//RECORRER ARREGLOS: FOR IN (otra forma diferente al for each)

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#");

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

/*
Creamos la variable lenguaje (let), crea la variable dins de la variable lenguajes, es tracta d'accedir a l'array de lenguajes, passar-ho a [] per capturar l'índex i el valor que té dins l'array.
*/

//BUSQUEDAS DENTRO DE UN ARRAY

/*
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"; //Si troba ens ho donarà, sinó undefined.
}); 
*/

//Es pot resumir el codi:
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS"); //Buscar el índice del elemento.

console.log(busqueda);

//ENCONTRAR SI HAY VALORES DE UN TIPO U OTRO EN UN ARRAY

var precios = [10, 20, , 50, 80, 12];
var busqueda = precios.some(precio => precio >= "80");
//Mètode some permet comprobar si els preus son majors o menors a tal. És a dir si compleixen la condició concreta que li posem.
console.log(busqueda);