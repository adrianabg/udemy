'use strict'



window.addEventListener("load", function(){
    console.log("Dom cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed"); //Això ho utilitzarem per fer que només es vegi el quadrat quan li donem al submit.

    box_dashed.style.display = "none";

    formulario.addEventListener("submit", function(){
        console.log("Evento Submit Capturado"); //Això el que fa es redireccionar a una altra pàgina.Perquè no em redireccioni, doncs no em pot dur enlloc, al html posaré action="#" i onsubmit="return false";

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);
        //El value me extrae el valor de dentro del id que hemos seleccionado.

        //VALIDACIÓ FORMULARI
        if(nombre.trim() == null || nombre.trim().lenght == 0 ){
            alert("El nombre no es válido"); //El codi es igual i no funciona.
            document.querySelector("#error_nombre").innerHTML = "El nombre no es correcto" //una altra manera de posar-ho també en pantalla, tampoc funciona, el problema està en la condició.
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none"; //S'oculta quan les dades són correctes.
        }

        if(apellidos == null || apellidos.lenght == 0 ){
            alert("Los apellidos no son válidos"); //El codi es igual i no funciona.
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("La edad no es válida");
            return false;
        }




        box_dashed.style.display = "block"; //El mostrem quan es dóna a submit, abans està ocult.

        console.log(nombre, apellidos, edad);

        //3a manera de ferho, posant un span al html i referint-nos-hi a través del id i el querySelector.

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        
        /*2a manera de fer-ho, directament sense afegir res més al html.

        var datosuser = [nombre, apellidos, edad];
        var indice;

        for(indice in datosuser){ //Indice és cada element de dins de datosuser
            var parrafo = document.createElement("p"); //Crea <p>
            parrafo.append(datosuser[indice]); //Afegeix cada índex dins el paràgraf.
            box_dashed.append(parrafo);//Afegeix el paràgraf dins la caixa.
            //En cada iteración crea un párrafo y añade con el append los datos.
        }

        */

        /* 1ra manera de ferho. Queda apilotonat.

        var parrafo = document.createElement("p");
        parrafo.append(nombre);
        parrafo.append(apellidos);
        parrafo.append(edad);
        box_dashed.append(parrafo);
        */
        //Si ho fem així queda tota la info junta en una sola línia.


    });
       
});