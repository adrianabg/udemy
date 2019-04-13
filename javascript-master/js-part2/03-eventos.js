'use strict'

/*
EVENTOS
Funciones que se ejecutan cada vez que sucede algo, por ejemplo cuando el usuario mueve el ratón, da click, borra algo, redimensiona la ventana, etc.

Posem el script al final perquè si utilitzem el dom, primer es carregaria l'script i després tots els elements de la pàgina i no els trobaria.
*/

//EVENTO LOAD - S'activa quan tots els elements de la pàgina estan ja carregats. Poso tot el codi dins el event load per no haver de posar al final el script i deixar-lo al head. Així quan la pàgina estigui completament carregada s'executaran els scripts i tot allò que utilitza el dom. 

window.addEventListener("load", () => {

    //EVENTOS DEL RATON
    var boton = document.querySelector("#boton"); 
    //Puc fer aquí dues coses, la primera és anar al html i als atributs del button afegir-li el event onclick='alert("Hola!")' (important cometes de fora simples i les de dins dobles). Tot i així és millor no embrutar el html i utilitzar el add event listener.

    function cambiarColor(){
        console.log("Me has dado click"); //Per veure si s'executa la funció.

        var colorfons = boton.style.background; //NO podem utilitzar la variable (abreviat) dins del if perquè no ho detecta.

        if(colorfons == "orange"){
            boton.style.background = "yellow";
        }else{
            boton.style.background = "orange";
        }
        //Aquestes propietats son fora del bucle i dins la funció, perquè independentment del if aquestes propietats es mantindran.
        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc";

        return true;
    }
    var boton = document.querySelector("#boton"); 

    //EVENTO CLICK

    boton.addEventListener("click", function(){ //El codi queda molt més net i eficient que posarho al html.
        cambiarColor(); 
        console.log(this);
        this.style.border = "10px solid black";
        //El operador this hace referencia al objeto en el cual le estoy dando click en este momento. El this se refiere al elemento, en este caso es boton.
    }); 

    //EVENTO MOUSE OVER
    boton.addEventListener("mouseover", function(){
        boton.style.background = "yellow";
    }); 

    //EVENTO MOUSE OUT
    boton.addEventListener("mouseout", function(){
        boton.style.background = "#ccc";
    });

    //EVENTO FOCUS - Click dins
    var input = document.querySelector("#camponombre");
    input.addEventListener("focus", function(){
        console.log("FOCUS Estas dentro del input");
    });


    //EVENTO BLUR - Es cuando salimos del foco, click fora
    input.addEventListener("blur", function(){
        console.log("BLUR Estas fuera del input");
    });


    //EVENTO KEYDOWN - Sucede cuando estás pulsando una tecla
    input.addEventListener("keydown", function(event){
        console.log("KEYDOWN Pulsando esta tecla", String.fromCharCode(event.keyCode));
    }); //El String.fromCharCode serveix per donar-nos info del teclat, en aquest cas de la tecla que estem prement.

    //EVENTO KEYPRESS
    input.addEventListener("keypress", function(event){
        console.log("KEYPRESS Tecla pulsada", String.fromCharCode(event.keyCode));
    });

    //EVENTO KEYUP
    input.addEventListener("keyup", function(event){
        console.log("KEYUP Tecla soltada", String.fromCharCode(event.keyCode));
    });
   

});





