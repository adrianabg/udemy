'use strict'

//TRANSFORMACIÓN DE TEXTOS
var numero = 444;
var texto1 = "  Bienvenido al curso de JS curso  ";
var texto2 = "Es muy buen curso";

//FUNCIONES DE REEMPLAZO
var busqueda = texto1.replace("Bienvenido", "Empezar");
console.log(busqueda);
//Se trata de reemplazar la primera palabra que está en el texto por la segunda que introducimos.
var busqueda = texto1.slice(14);
console.log(busqueda);
//Corta el string a partir del carácter que le ponemos. Si ponemos solo un parámetro será a partir de este, si le pongo dos, el corte se hará entre esos dos carácteres.
var busqueda = texto1.split(" ");
console.log(busqueda);
//Sirve para recortar las palabras y meter todo dentro de un array. Si lo quiero separar por espacios tengo que meter " ", hará un array con todas las palabras separadas. Es útil para hacer buscadores por ejemplo, corta las palabras y las pone en un índice, una colección.
var busqueda = texto1.trim();
console.log(busqueda);
//Recorta los espacios por delante y por detrás. Es útil para cuando guardamos nombre de usuario por ejemplo, no interesa guardar esos espacios de más.