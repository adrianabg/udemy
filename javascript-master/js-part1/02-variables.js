'use strict' //bona pràctica, fa que la programació sigui més estricta i activa noves funcionalitats. Si no el posem, podriem ometre la paraula var i entendria igualment que és una variable.

//VARIABLES
//Una variable es un contenedor de información, como si tuvieramos una caja con un dato dentro.

var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais+' '+continente;
//Se pueden unir dos strings, concatenar dos cadenas de texto.

console.log(pais, continente, antiguedad);
alert(pais_y_continente);

//Siempre al definir una variable hay que indicar un nombre, siendo lo más claro y descriptible posible.

//Se puede redefinir una variable, de forma que si ponemos otro valor cuando hagamos console.log saldrá el nuevo valor asignado.

var antiguedad = 2030;

console.log(antiguedad);

pais= "China";
continente="Asia";

//En el console.log van a salir los nuevos datos, en cambio en el alert saldran los primeros datos. Porque pais_y_continente está vinculado a España y Europa. Si pusieramos la variable de pais_y_continente debajo de asignar los nuevos datos entonces sí que cogeria China y Asia.

//Es poden definir les variables amb "var" i amb "let".

let prueba = "hola";
alert("hola");

