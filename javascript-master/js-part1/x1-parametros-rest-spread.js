'use strict'

//PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");
/*Es un string, hay que ponerlo entre comillas. Si le pongo más parámetros indefinidos, no sucede nada o da error.
En el caso de que el número de parámetros es indefinido y no sé cuantos voy a tener, doy otro parámetro (PARAMETRO REST) que poniéndole ... delante, recoge todos los parámetros restantes. Por tanto, si hago un console.log con el parametro resto_de_frutas entonces va a recogerlo en un array (conjunto de valores ordenado en un índice de 0 hacia arriba). De esta manera se pueden capturar un número indefinido de parámetros.*/

var frutas = ["Naranja", "Manzana"] //Array, colección de valores.
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");

/**
Si quiero que la variable frutas (array) detecte naranja y manzana como fruta 1 y fruta 2 tendré que hacer un parámetro spread (los separa). Son los ... delante de frutas.
*/

