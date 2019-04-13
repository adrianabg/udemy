'use strict'

/*
FUNCIONES
Una función es una agrupación reutilizable de un conjunto de instrucciones. Se van a ejecutar cuando invoquemos la función.
*/

function calculadora(numero1, numero2, mostrar = false){
    //CONJUNTO DE INSTRUCCIONES A EJECUTAR 
        // console.log("Hola, soy la calculadora");
        // console.log("Sí, soy yo");

        if (mostrar == false){ //Si es falso lo muestra en la consola.
            console.log("Suma: "+ (numero1+numero2));
            console.log("Resta: "+ (numero1-numero2));
            console.log("Multiplicación: "+ (numero1*numero2));
            console.log("División: "+ (numero1/numero2));
            console.log(mostrar);
            console.log("***************************");
        }else{ //Si no, lo muestra en el cuerpo de la página.
            document.write("Suma: "+ (numero1+numero2));
            document.write("Resta: "+ (numero1-numero2));
            document.write("Multiplicación: "+(numero1*numero2));
            document.write("División: "+(numero1/numero2));
            document.write(mostrar);
            document.write("***************************");


        }

        
        
        //return "Hola soy la calculadora!";


}

//console.log(calculadora(), calculadora(), calculadora());

//INVOCAR LA FUNCIÓN
calculadora(12, 3, true);
calculadora(14, 2); 
/*
Paràmetres. 
Això el que fa és que aquí poguem posar els números que vulguem i es faran totes les operacions determinades dins la funció.
Si anem a la consola i escrivim "calculadora()" ens donarà el return, no farà res més, en canvi, si dins els parèntesis posem dos números -ex: calculadora(12, 6)- ens farà la operació.
*/


/*
Se crea la función con la palabra "function" seguido de una palabra que la va a identificar. 
Con la palabra "return" la función me va a devolver algo cuando la llame.
Por ejemplo, con un console.log, puedo invocar la función 
calculadora();
que me lo mostrará dentro de la consola. 
Se ejecuta el conjunto de instrucciones dentro de las llaves de la función. Va a salir todo lo que haya dentro.
Si no quiero poner console.log, puedo hacer un return, o ambas. Según lo que queramos hacer.
Si pongo la función dentro de una variable
var resultado = calculadora ();
console.log(resultado); 
me va a devolver aquello que estava dentro de la función.
*/

/*
PARÁMETROS
Son variables que van a alterar la lógica de la función, de esta manera se hace much más reutilizable. Los parámetros hacen que las funciones sean dinámicas, en este caso, para que podamos poner cualquier número en la calculadora.
*/

/*Si utilizamos la función dentro de un bucle for podemos introducir un número para que se ejecute en la consola, haciéndose el bucle tantas veces como el bucle requiera. El console.log es para ver por que iteración vamos.

for(var i = 1; i <= 10;  i++){
    calculadora(i, 8);
    console.log(i);
}

*/

//PARÁMETROS OPCIONALES
/*
Cuando invocamos la función obligatoriamente tenemos que introducir los dos parámetros para que la calculadora funcione. Existen parámetros que vienen inicializados por defecto. Un ejemplo es el mostrar.


*/