'use strict'

//PLANTILLAS DE TEXTO

/*
Mediante el uso de plantillas puedo substituir valores dentro de un string sin necesidad de estar concatenándolo.
*/

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

// var texto = "Mi nombre es: "+nombre+" y mis apellidos son: "+apellidos; 
//Esto es un poco improductivo, con la plantilla lo hacemos más fácil.

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mis apellidos son: ${apellidos}</h3>
`;

//Con el símbolo dolar, se imprime el valor de una variable dentro de las llaves, de la plantilla. Nos ahorramos concatenar con el + intercalando texto y variables.
document.write(texto);



