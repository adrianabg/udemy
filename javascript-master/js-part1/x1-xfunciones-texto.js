'use strict'

//TRANSFORMACIÓN DE TEXTOS
var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

//Transformar el número a string.
var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

//CALCULAR LONGITUD TEXTO
var nombre = "Adriana Biarnés";
    nombre = ["hola", "adios", "eo"];

console.log(nombre.length);
//Contarà la longitud del text, si no li poso res o null el resultat serà 0, i si li poso un número serà undefined.
//Es útil para determinar si una variable tiene texto y si tiene contenido (no vacía).
//En el caso del array, sirve para contar los elementos que contiene.

//CONCATENAR -UNIR TEXTOS-

//var textototal = texto1+" "+texto2;
var textototal = texto1.concat(" "+texto2);

console.log(textototal);

//Esto puede ser útil para concatenar de forma rápida si tenemos muchos textos.
