$(document).ready(function(){
    //alert("js cargado");

    //MOUSE OVER Y MOUSEOUT
    var caja = $("#caja");
/*
Funciones de callback.

    caja.mouseover(function(){
        $(this).css("background","orange");
    });
    caja.mouseout(function(){
        $(this).css("background","green");
    });
*/

    function cambiaOrange(){
        $(this).css("background","orange");
    }
    function cambiaGreen(){
        $(this).css("background","green");
    }
    
    //HOVER
    caja.hover(cambiaOrange, cambiaGreen); 
    //El primer parámetro es cuando se pone el ratón encima y el segundo es cuando se quita.
    
    //CLICK Y DOBLE CLICK
    caja.click(function(){
        $(this).css("background", "blue")
               .css("color", "white");
    });
    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow");
    })

    //FOCUS Y BLUR
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", "1px solid #ccc"); 
        datos.text($(this).val()).show(); //hay un método show y tambien hide
        //Para incrustar los datos del valor del formulario en el div usamos text para escribirlo en pantalla y val para obtener el valor introducido en el input.
    });

    //MOUSE DOWN Y MOUSE UP
    datos.mousedown(function(){
        $(this).css("border-color", "pink");
    });
    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //MOUSE MOVE
    $(document).mousemove(function(){
        $("body").css("cursor", "none"); //Per ocultar el cursor.
        var sigueme = $("#sigueme");
        //console.log("En X: "+ event.clientX);
        //console.log("En Y: "+ event.clientY);
        sigueme.css("left", event.clientX) //Segueix en horitzontal.
               .css("top", event.clientY); //Segueix en vertical.
    });



});