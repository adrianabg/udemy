'use strict'

//OPERADORES

var numero1 = 7; //JS interpreta els numeros sense cometes.
var numero2 = 12;

//Suma
var operacion = numero1 + numero2; 
//Resta ---- var operacion = numero1 - numero2;

//Multiplicació ---- var operacion = numero1 * numero2; 

//Divisió ---- var operacion = numero1 / numero2; 

// Residu % ---- var operacion = numero1 % numero2; ---- Dóna el residu de la divisió. Serveix per saber si un número és parell o imparell, si és parell serà 0.


alert("El resultado de la operación es: "+operacion) 
//El símbol +  a part de sumar serveix per concatenar dos strings.


/*TIPOS DE DATOS

Entero
String
Boolean
Float
*/

var numero_entero = 44; //Sense decimals

var cadena_texto = "Hola 'que' tal" //Amb cometes, simples o dobles, les dobles tenen més prioritat que les simples. Potser hem de posar cometes dins el text i serà millor posar cometes dobles als extrems i dins les simples.
console.log(cadena_texto);

var true_or_false = true;
console.log(true_or_false);
//Serveixen per establir condicions.

var numero_falso = "33" //No té propietats matemàtiques, és text, un string.
console.log(numero_falso+7);
//Com que 33 és un text si l'intento sumar amb 7 concatena els números perque pensa que és text, no un número. 

console.log(Number(numero_falso)+7);
//La funció Number converteix a una dada en un número, en aquest cas la dada string es converteix en un número (qualsevol tipus) i recupera les propietats matemàtiques.

console.log(parseInt(numero_falso)+7);
//Serveix per convertir a número enter. No mostra els decimals, arrodoneix perquè sigui enter.

console.log(parseFloat(numero_falso)+7);
//Serveix per convertir un número a número decimal. 

console.log(numero_entero+" Texto concatenado")
console.log(String(numero_entero)+4)
//Es pot convertir un número a un string perquè no tingui propietats matemàtiques. De forma que es concatenarà.


//DETECTAR EL TIPO DE DATOS CON TYPEOF
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof true_or_false);
console.log(typeof numero_falso);
//La consola ens mostrarà el tipus de dades de les variables: number, string, boolean i string, respectivament.