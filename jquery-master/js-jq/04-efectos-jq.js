$(document).ready(function(){
   
    var caja = $("#caja");

    $("#mostrar").hide(); //Esto es para que no aparezca por defecto

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        //caja.fadeTo("fast", 0.8); 
        
        caja.slideDown("slow");
    });
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //caja.fadeTo("slow", 0.2);
        
        caja.slideUp("slow", function(){
            console.log("Cartel ocultado"); //Función callback para que nos informe que el cartel ya no está cuando haya terminado la animación y no antes.
        });
    });

//caja.show("fast"); // Fa una mena de reducció del div. Existeix també normal, slow...
//caja.fadeOut("fast"); //Fundido, fadeIn o fadeOut/mostrar o amagar.
//caja.fadeTo("fast"); //Necesita dos parametros, la velocidad y la opacidad, la opacidad viene por defecto a uno, que se muestra, y lo contrario seria 0 para que se oculte.


    $("#botonazo").click(function(){
        //caja.toggle("fast");
        //caja.fadeToggle("fast"); //Igual con efecto fade.
        caja.slideToggle("fast"); //Es plega cap amunt, n'hi ha up i down.
    })

    $("#animar").click(function(){
        caja.animate({//Les animacions s'escriuen en format json i puc encadenar tantes animacions com vulgui. No ficar ; a l'última propietat si encadeno. Els primers paràmetres son les propietats de l'objecte i el segon és la velocitat.
            marginLeft: "500px",
            fontSize: "40px",
            height: "110px"
            }, "slow")
            .animate({
                borderRadius: "900px",
                marginTop: "80px"
            }, "slow")
            .animate({
                borderRadius: "0px",
                marginLeft: "0px"
            }, "slow")
            .animate({
                borderRadius: "100px",
                marginTop: "0px"
            }, "slow")
            .animate({
                marginLeft: "500px",
                fontSize: "40px",
                height: "110px"
            }, "slow");
        });

    });

;



