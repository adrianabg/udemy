'use strict'

//TRANSFORMACIÓN DE TEXTOS
var numero = 444;
var texto1 = "Bienvenido al curso de JS curso";
var texto2 = "Es muy buen curso";

//Si quiero buscar una palabra dentro de un string.
var busqueda = texto1.indexOf("curso"); //Nos da a partir de que carácter empieza la palabra. 
var busqueda = texto1.lastIndexOf("curso");
//Si hubiera más palabras iguales con el texto1.lastIndexOf nos daria de resultado la última vez que aparece la palabra en el texto.
var busqueda = texto1.search("curso");
//Es lo mismo que utilizar indexOf. Si busco una palabra que no existe dará de resultado -1.
var busqueda = texto1.match(/curso/g);
//Devuelve un array con las palabras. Solo me busca la primera coincidencia texto1.match("curso"); , si quiero que lo busque por todo el archivo texto1.match(/curso/g); 
var busqueda = texto1.substr(14, 3);
//Seleccionamos el número de carácter que queremos, primera cifra indicamos carácter de salida y segunda cifra cuántos carácteres. Significa sub string.
var busqueda = texto1.charAt(15);
//Serveix perquè ens tregui una lletra.
var busqueda = texto1.startsWith("Bienvenido");
//Ens busca una paraula o cadena de paraules al text i ens diu true o false segons si hi és o no. Però és per on comença el string, si busquem algo del mig no sortirà.
var busqueda = texto1.endsWith("JS Curso");
//El mateix que abans però del final.
var busqueda = texto1.includes("al");
//Buscar una paraula o cadena de paraules exacte al text. Amb true o false.
console.log(busqueda);