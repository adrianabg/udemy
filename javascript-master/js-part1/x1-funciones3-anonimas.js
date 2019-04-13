'use strict'

//FUNCIONES ANONIMAS
/*
Función que no tiene nombre.
*/

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
//Para llamar una función anónima por la consola ponemos: pelicula("Le ponemos el nombre").


//CALLBACK. Función que se ejecuta dentro de otra. Es anónima y se le pasa como parámetro a otra función.

function sumame(numero1, numero2, sumaymuestra, sumapordos){
    var sumar = numero1 + numero2;

sumaymuestra(sumar);
sumapordos(sumar);

    return sumar;
}

//console.log(sumame(4, 5));

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma es: ", dato*2);
});

/*
Tenemos una función con varios parámetros normales, y dos que van referenciados a una función anónima. Cuando invoco al método sumame no se como se va a llamar la función.
*/

//FUNCIONES DE FLECHA
/*
Es una manera de escribir la función pero en vez de escribir function(dato){ escribimos dato =>{ . Se sustituye palabra function por una flecha y se eliminan los paréntesis.
*/