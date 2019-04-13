'use strict'

//ARRAYS MULTIDIMENSIONALES
/*
Arrays dentro de otros arrays.
*/

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Spiderman", "Birdman", "Gran Torino"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]); 
//Si ponemos cine dentro del console.log, nos dará un array con dos arrays desplegables.
//Para acceder dentro del array a las categorias, y dentro al elemento de terror, por ejemplo, tendré que indicarlo con [][]. De genérico a concreto. 
//console.log(cine[1][2]); //Lo mismo, accederemos a Gran Torino.

//AÑADIR UN ELEMENTO A UN ARRAY = PUSH
peliculas.push("El Padrino"); 
console.log(peliculas);

/*

//Puedo añadir un prompt para añadir elementos al array.
var elemento = "";

do{
    elemento = prompt("Añade tu película."); //Lo vuelve a pedir.
    peliculas.push(elemento); //El push añade lo introducido al array.
}while(elemento != "ACABAR");//Nos siga pidiendo añadir hasta que escribamos ACABAR. 

//Nos añade todas las que introduzca el usuario incluso el ACABAR, pero esta última no me interesa que esté allí.

//COMO PUEDO ELIMINAR UN ELEMENTO DE UN ARRAY
peliculas.pop();//elimina el último elemento de un array, si lo repito varias veces, se van a ir eliminando por la cola.
peliculas[0] = undefined; //Això fa que el element 0 sigui indefinit.

*/

//Si quiero eliminar un elemento completo de un array.

var indice = peliculas.indexOf("Gran Torino");
//console.log(indice); //Nos da la posición donde está el elemento. /
if(indice > -1){
    peliculas.splice(indice, 1);
}
//Una vez tengo el indice donde está la película tengo que comprobar si el índice es mayor a -1 (eso significa que no lo ha encontrado).
//El splice en base a un índice nos permite borrar tantos pasos como quiera en adelante, cuanto borrar a partir de este. Por tanto si queremos borrar el 2 que corresponde a gran torino, pondremos el 1, porque a partir de ahí borrará.

console.log(peliculas);

//CONVERTIR UN ARRAY A TEXTO
var peliculas_string = peliculas.join();
console.log(peliculas_string);
//El join no procesa el propio array, sino que hay que guardarlo dentro de una variable y luego equipararlo al array.

//CONVERTIR UN TEXTO A UN ARRAY
var cadena = "text1, text2, text3";
var cadena_array = cadena.split(", "); //Tot el que estigui dividit amb coma i espai ho separarà en elements del array.
console.log(cadena_array);







