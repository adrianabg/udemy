"use strict"

//Diferencia LET i VAR. 

//Prova VAR
var numero = 40
console.log(numero); //valor 40

if(true){
    var numero = 50
    console.log(numero); //valor 50
}
console.log(numero); //valor 50

//Prova LET
var texto = "Curso JS texto";
console.log(texto); //valor es Curso JS

if(true){
    let texto = "Curso random texto"
    console.log(texto); //valor es Curso random 
}
console.log(texto); //valor es Curso JS

//El LET només actua dins del bloc on es troba, és a dir, si posem el LET dins de un if, si posem console.log fora del bloc {} agafarà el valor que li hem donat a la variable.