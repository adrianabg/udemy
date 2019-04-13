'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado.
*/

var suma = 0; 
var contador = 0;
//Por defecto inicializados a 0.

//El do while permet executar el bucle y després evaluar.
do{
    var numero = parseInt(prompt("Introduce números hasta que metas uno negativo", 0));
    //Cal demanar el número al usuari, per això demanem que la variable la introdueixi ell.
    //S'ha de posar el parseint perquè per defecte el prompt és string.

    if(isNaN(numero)){
        numero = 0;
        //Si el usuario no introduce un número, entonces el valor será 0.
    }else if(numero >= 0){ //Se cortará cuando se introduzca un número negativo, porque no cumplirá esta condición.
        suma = suma + numero; //suma += numero es el mateix;
        //Si el número es mayor a 0, va a sumar 0 + numero introducido y se van a ir sumando todos los números, porque el valor de suma va incrementando.
        contador++;
        //Sirve para sumar el contador, para ver cuantas vueltas da el bucle, nos servirá para saber cuantos números hay para hacer la media.
    }

    console.log(suma);
    console.log(contador);
    //Esto nos muestra la suma y la iteración que se va haciendo cada vuelta del bucle.

}while(numero >= 0)

alert("La suma de todos los números es: "+ suma);
alert("La media de todos los numeros es: "+(suma/contador));
