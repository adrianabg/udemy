'use strict'

//CONDICIONALES
/*Instrucciones que permiten comparar algo. Si a = b, entonces haz algo. El es igual podriamos substituirlo por es diferente, es mayor o menor. Por lo que si se produce la condición el código haga algo, y si no se cumple se salte esa parte y haga otra cosa.*/

var edad1 = 10;
var edad2 = 12;

//Si pasa esto
if(edad1 > edad2){
    //Ejecuta esto
    console.log("Edad1 és mayor que Edad2");
}else{
    console.log("La Edad1 és inferior");
}

//Els parèntesis indiquen la condició, la qual si passa, executarà el bloc que contenen els curly braces. Quan NO passa la condició, posem el ELSE.

/*OPERADORES RELACIONALES
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/ 

var edad = 19; //18, 10, 33, 34, 70, 11
var nombre = "David Suarez"

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+ " años, es mayor de edad ");
}else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad+ " años, es menor de edad ");
}
//Si se cumple pasa por el if, si no se cumple pasa por el else.

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre+" tiene "+edad+ " años, es mayor de edad ");

    if(edad <= 33){ //==
        console.log("Todavia eres millenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }

}else{
    //Es menor de edad
    console.log(nombre+" tiene "+edad+ " años, es menor de edad ");
}
//Se puede anidar el if dentro de otro.

//Se puede poner un else if i dentro otro else.

//El else if es lo mismo que hacer otro if, pero en lugar de anidarlo lo ponemos al lado.

/*OPERADORES LÓGICOS
Si necesitamos que varias condiciones se cumplan en una misma condición, pero no queremos estar anidando if tras if porque no es productivo, para eso están los operadores lógicos.

AND: && (permet afegir més condicions)
OR: || (condicions alternatives)
Negación: ! (negar una expresión, que sea diferente)
*/

var year = 2029; //2019

//Negación
if(year != 2016){
    console.log("El año no es 2016, realmente es: "+year);
}

//AND
if(year >= 2000 && year <= 2020 && year != 2019){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era postmoderna");
}

//OR, si es compleix una o una altra, executa. Atenció que si posem condició dins de la condició calen parèntesis.
if(year == 2009|| (year >= 2019 && year == 2029)){
    console.log("El año acaba en 9")
}else{
    console.log("Año no registrado");
}
