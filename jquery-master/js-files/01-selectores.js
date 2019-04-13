/*
JQUERY 

El $ siempre se refiere al objeto jQuery, si pusiera jQuery también funciona, son equivalentes y se refieren al objeto.
Lo que pongamos después del $ entre paréntesis es el selector para después utilizar un método que hace referencia a un evento que a su vez tiene una función anónima de callback.
*/

$(document).ready(function(){
    console.log("Estamos listos!");
    
    //SELECTOR DE ID
    
    var rojo = $("#rojo").css("background","red") //Atenció no tancar amb ;
                         .css("color","white"); //Podem agafar-ho amb una var.
    //Si quiero añadir modificaciones no hace falta que lo vaya llamando, sino que iré encadenando.
    
    $("#amarillo").css("background","yellow")
                  .css("color","green");

    $("#verde").css("background","green")
               .css("color","white");

    //SELECTOR DE CLASES. Elige elementos del DOM en base a la clase.
    var mi_clase = $(".zebra").css("padding", "5px");

    //console.log(mi_clase.eq(1)); 
    /*Como son varios nos muestra un array, por lo que si queremos acceder a uno concreto utilizaremos los corchetes:
    console.log(mi_clase[0]);.
    Otra forma es poner el metodo eq, que nos va a permitir utilizar otros métodos a la vez.*/

    $(".sinborde").click(function(){//Cuando le de click a esos elementos van a tener el borde.
        console.log("Clicked");
        $(this).addClass("zebra");//Per usar aixo s'ha de crear una classe a css, en una etiqueta style al html.
    });
    
    //SELECTOR DE ETIQUETA

    var parrafos = $("p").css("cursor", "pointer");

    parrafos.click(function(){
        var that = $(this);
        if(!that.hasClass("grande")){ //Comprovar si existeix la clase.
            that.addClass("grande");
        }else{
            that.removeClass("grande");
        }
        //Aquest bucle fa que si cliques es fa gran i si tornes es fa petit.
    });

    //SELECTOR DE ATRIBUTO

    $('[title = "Google"]').css("background", "#ccc");
    $('[title = "Facebook"]').css("background", "blue");

    //OTROS

    //Para ponerle la clase de css de margen superior tanto a los párragfos como los enlaces:   
    //$("p, a").addClass("margen-superior");

    //Quiero encontrar todos los elementos que tengan una clase concreta pero no se donde estan o llegar a ellos es complejo porque estan muy anidados. El método find sirve para buscar dentro de un árbol html muy grande cosas que no sabemos donde están.
    
    var busqueda = $("#elemento2").parent().find(".resaltado");
    //También funcionaria: var busqueda = $("#caja.resaltado");
    //Si quiero salir de "resaltado", del selector, y llegar a las etiquetas padre, con el parent salgo un nivel, lo pondre tantas veces como niveles haya de subir. Sirve para movernos por el dom y seleccionar elementos
    console.log(busqueda);




});



