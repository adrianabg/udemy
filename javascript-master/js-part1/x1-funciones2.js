'use strict'

//FUNCIONES DENTRO DE OTRAS

function porConsola(numero1, numero2){
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multiplicación: "+ (numero1*numero2));
    console.log("División: "+ (numero1/numero2));
    console.log(mostrar);
    console.log("***************************");
}

function porPantalla(numero1, numero2){
    document.write("Suma: "+ (numero1+numero2));
    document.write("Resta: "+ (numero1-numero2));
    document.write("Multiplicación: "+(numero1*numero2));
    document.write("División: "+(numero1/numero2));
    document.write("***************************");
}

function calculadora(numero1, numero2, mostrar = false){
    if (mostrar == false){ 
        porConsola(numero1, numero2);
    }else{ 
        porPantalla(numero1, numero2)
    }

    return true;
}

//console.log(calculadora(), calculadora(), calculadora());

//INVOCAR LA FUNCIÓN
calculadora(12, 3, true);
calculadora(14, 2); 

/*
Podemos anidar funciones dentro de otras.

*/