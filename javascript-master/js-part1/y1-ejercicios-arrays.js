'use strict'

//EXERCICIS ARRAYS

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar todos los elementos del array en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuántos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que nos diga si está en el array y su posición.
*/

function mostrarArray(elementos, textoCustom = ""){//Elementos equivale al array.
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
}

//1. PEDIR 6 NÚMEROS

var numeros = new Array(6); // Array vacio, o new Array para definir el objeto del array con las posiciones.
for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un número", 0));
}
console.log(numeros);

/*
//Una altra manera de ferho: NO EM SURT NO SÉ PER QUÈ EM DEMANA NOMÉS UN NÚMERO https://www.udemy.com/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/v4/t/lecture/10131512?start=0

var numeros = [];

for(var i = 0; i <=5; i++);{
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}
console.log(numeros);
*/

//2. MOSTRAR EL ARRAY POR LA PANTALLA Y POR LA CONSOLA
/*
document.write("<h1>Contenido del array</h1>");
numeros.forEach((numero, index) => {
    document.write("<strong>"+numero+"</strong><br>");
});
*/
mostrarArray(numeros, "ordenados"); //Mismo resultado, cuando quiera volver a mostrar los números, recorrer todo el array y mostrar ese resultado tendré que invocar la función. Nos lo muestra ordenado A-Z.
//Si quisiera que estuvieran ordenados numéricamente, a la función sort le ponemos un callback.

console.log(numeros);

//3. ORDENAR Y MOSTRAR
numeros.sort(function(a, b){return a-b}); //Si quiero orden descendente el return seria b-a.
console.log(numeros);
//Para mostrarlo podria copiar el trozo de código del 2. Pero es mejor hacerlo con una función, arriba del todo.

//4. INVERTIR Y MOSTRAR
numeros.reverse();
mostrarArray(numeros, "revertido");

//5. CONTAR INDICES
document.write("<h1>El array tiene "+numeros.length+" elementos.</h1>");

//6. BUSQUEDA
var busqueda = (parseInt(prompt("Busca un número", 0)));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>ENCONTRADO</h1>");
    document.write("<h1>Posición de la búsqueda: "+posicion+"</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}
