'use strict'

//BUCLE WHILE
/*
Es parecido al bucle for pero menos estricto, de forma que puedo hacer bucles infinitos. Va a constar de una condicion que cuando se cumpla se va a ejecutar un bloque de instrucciones infinitamente hasta que no se cumpla la condición que lo pare. 
Se comprueba una condición y después se ejecuta un bloque de código.
*/ 

var year = 2019;

while(year <= 2051){ //Mientras pase esto
    //Ejecuta esto
    console.log("Estamos en el año "+year);

    year++; //Si no ponemos condición es infinito.
}

var year = 2019;

while(year != 1991){ //Mientras pase esto
    //Ejecuta esto
    console.log("Estamos en el año "+year);

    year--; //Va a tirar para atrás hasta el 1992,no 1991 porque no se incluye si ponemos el operador != 
}

//BUCLE DO WHILE
/*
Al contrario que en el while, primero ejecutamos un bloque de código y luego comprobamos una condición para hacer de nuevo ese bloque de código o simplemente ejecutarlo una sola vez.
*/

//DO WHILE
var years = 30; //20, 21

do{
    alert("Solo cuando sea diferente de 20");
    years--;
}while(years > 25); 
//S'executa 5 vegades. Fins que years es menor a 25.

//BREAK 
/*
Nos permite salir de una estructura de control y que no se hagan más iteraciones
*/
var year = 2019;

while(year != 1991){ //Mientras pase esto
    //Ejecuta esto
    console.log("Estamos en el año "+year);

    if(year == 2000){
        break; //Sirve para parar el bucle, cuando llegue al valor 2000 se ejecuta el break. El bucle deja de funcionar.
    }

    year--; 
}