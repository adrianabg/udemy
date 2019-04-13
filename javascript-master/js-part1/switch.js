'use strict'

//SWITCH
/* Permite anidar varias posibilidades (if) dentro de un condicionante, le damos un valor, y según las condiciones que hayamos establecido dará uno u otro resultado.
*/ 

var edad = 300; //18, 40, 75, 300
var imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);