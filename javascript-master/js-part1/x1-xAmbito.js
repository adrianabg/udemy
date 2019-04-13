'use strict'

function holamundo(texto){
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable";
holamundo(texto);

//console.log(hola_mundo);

//La función puede llamar variables externas e internas a la misma función.
/*
En vambio, si llamo desde fuera la función a una variable dentro de la función nos da error porque no está definida dentro del ámbito global del programa. La variable está definida dentro del ámbito de la función, por lo tanto solo tengo acceso a ella dentro de la función (variables locales), si definimos la variable fuera de la función está en ámbito global y podremos acceder a ella tanto desde dentro de la función como desde fuera.
*/

//CONVERTIR UN NÚMERO A UN STRING
/*
console.log(numero.toString());

Es un método, se aplica al objeto(variable), podemos hacer que un número sea un string.
*/