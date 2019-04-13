'use strict'

//ARRAYS (arreglos, matrices)
//Colección de tipos de datos o valores que puede tener una variable.

var nombre = "Adriana";
var nombres = ["Adriana Biarnés", "David Fernández", "Joan Tardà", "Victor Robles", 45, true];
//Dentro del array, podemos meter el tipo de dato que queramos.

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#");
//Los arrays están guardados en un índice. Los índices empiezan en 0.
console.log(nombres[5]);
console.log(lenguajes);
//Para acceder a los índices, tengo que utilizar los corchetes y poner el número de índices, recordar que empieza a contar por 0.

/*
//Para ver la LONGITUD que tiene un array, cuantos elementos tiene.
    //console.log(nombres.length);

var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
if(elemento >= nombres.length){
    alert("Introduce el número correcto menor que "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);

}
*/

//MOSTRAR TODOS LOS ELEMENTOS DE UN ARRAY POR PANTALLA

document.write("<h1>Lenguajes de programación del 2018</h1>")
document.write("<ul>");
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

Manera clásica de recorrer u array
 */ 

//Podemos utilizar un metodo que se llama for each para recorrer el array, igual que el for pero "mas elegante".

lenguajes.forEach((elemento, index, arr)=>{
    //console.log(arr);
    document.write("<li>"+index+" - "+elemento+"</li>");
});
/*
Se puede poner dentro del forEach solo el elemento.
Puedo añadir el index para saber en que posicion del array está el elemento.
El tercer parámetro es el arreglo (arr) que dentro tiene el array original que está cogiendo el método for each.
El forEach itera todo el array y nos lo muestra.
*/

