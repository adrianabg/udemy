'use strict'

// JSON - JAVASCRIPT OBJECT NOTATION

//Definimos un objeto JSON, con llaves y separando por comas.
var pelicula = {
    titulo: "Nemo",
    year: 2003,
    pais: "Estados Unidos"
};

//Para acceder a las propiedades de mi variable
console.log(pelicula); 

//Si quiero acceder a una propiedad concreta tengo que poner un punto y el nombre de la propiedad. Aqui en el console.log, en la consola directamente pondriamos pelicula.year
console.log(pelicula.year); 

//Si quiero cambiar el valor de una propiedad.
pelicula.titulo = "Buscando a Nemo";
console.log(pelicula.titulo);

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

console.log(peliculas);

var caja_peliculas = document.getElementById("peliculas")
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    caja_peliculas.append(p);
}