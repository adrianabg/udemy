'use strict'

/*
Programa que muestre todos los números divisores de un número introducido en prompt.
*/
//Normalment si posa muestra todos los números que.. serà un for.

var numero = parseInt(prompt("Introduce un número.", 1));

for(var i = 1; i <= numero; i++){

    if(numero%i == 0){
        console.log("Divisor: "+ i); 
    }

}
