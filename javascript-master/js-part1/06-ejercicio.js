'use strict'

/*
Programa que nos diga si un número es par o impar.
1. Ventana prompt
2. Si metemos un número no válido, que nos pida de nuevo el número
*/

var number = parseInt(prompt("Introduce un numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce un numero", 0));
}

if(number%2 == 0){
    alert("Es un número par");
}else{
    alert("Es un número impar");
}

