'use strict'

    // TIMERS
    /*
    Set interval - ejecutar una función de callback o trozo de código cada x segundos.
    Set time out - se ejecuta solamente una vez.
    */ 

window.addEventListener("load", function(){

    function intervalo(){
        //var tiempo = setTimeout(function(){
    var tiempo = setInterval(function(){
        console.log("Set interval ejecutado");

        var encabezado = document.querySelector("h1")
        //Cuantos menos accesos al dom mejor, si podemos poner el queryselector en una variable será major.
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }

    }, 1000); //El segundo parámetro es cada cuando se ejecutará, 3000 son 3 segundos, 500 mig segon.

        return tiempo; //que devuelva la variable tiempo

    }

    var tiempo = intervalo(); //me devolverá el set interval.

    //Creem un altre botó per aturar el parpadeig, el timer.
    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function(){
        alert("Has parado el intervalo en bucle")
        clearInterval(tiempo); //tiempo es la variable que tiene el intervalo
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function(){
        //Hem de fer una funció per no tornar a posar el codi de començar l'interval, del botó press me.
        alert("Empezamos el bucle!");
        intervalo();
    });

});