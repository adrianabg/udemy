'use strict'

/*
Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.
*/

var numero1 = parseInt(prompt("Introduce el 1r número", 0));
var numero2 = parseInt(prompt("Introduce el 2º número", 0));

document.write("<h1>Del "+numero1+ " al "+numero2+ " están estos números:</h1>") //Permite añadir texto al body html de la página.

for(var i = numero1; i <= numero2; i++){
   document.write(i+"<br>")
}






/* 

RESOLT ADRI

var numero1 = parseInt(prompt("Introduce el 1r número", 0));
var numero2 = parseInt(prompt("Introduce el 2º número", 0));

for(var i = numero1; i <= numero2; i++){
    console.log("Los números entre "+numero1 +" y "+numero2 +" son: "+i);
}

*/