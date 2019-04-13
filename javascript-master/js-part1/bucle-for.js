'use strict'

//BUCLE FOR
/*
Estructura de control que se repite varias veces, trozo de código que se va a repetir un número definido (normalmente) o indefinido de veces.
*/

//Si queremos mostrar los números del 1 al 100 no podriamos hacer console.log con los 100 números.

var numero = 100; //Donde quiero llegar

for(var i = 0; i <= numero; i++){
    console.log("Vamos por el número: "+i);
    //console.log(i); Només caldria això

    //debugger; //Si actualitzem el navegador ens redirigeix a source, cliquem al + de watch a la dreta i escrivim les variables que tenim i amb la fletxa corva anem clicant i va fent el bucle un per un, sense executar-se lliurement,això serveix per veure què esta passant dins el bucle.
}


/*
- El primer elemento del bucle es un "contador" que suele tener el valor i, que se inicializa a 0. 

- El segundo elemento es una "condición", en que caso va a seguir contando y va a repetir el bucle (quan acaba). 

- El último elemento es el "incrementador" o decrementador del contador, en este caso como el contador es i (i++ significa que se li sumarà un cada cop, i-- se li restarà un cada cop). De esa manera va a seguir dando vueltas el bucle (se li anirà sumant 1 cada cop). 

Si hacemos un console.log todo lo que esté dentro de la llave se va a ejecutar cada vez que de una vuelta el bucle hasta llegar al número 100. Si quiero mostrar todos los números habrá que poner "i" y si queremos también le añadimos texto.
*/