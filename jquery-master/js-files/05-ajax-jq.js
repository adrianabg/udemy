$(document).ready(function(){
    
    //MÉTODO LOAD.

    //Nos permite hacer una petición ajax por GET e incrustar el resultado dentro de un div o de cualquier elemento de la página.
   
    //$("#datos").load("http://reqres.in/");

    //GET - PETICIONES
    
    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+ element.first_name +"</p>");
        });
    });

    //POST

    $("#formulario").submit(function(e){
        e.preventDefault();//Esto es para que no nos redirija a otra página, además de añadir debajo un return false.

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
        console.log(usuario);
/*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
*/
        $.ajax({
            type: "POST",
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario..."); //Hace algo antes de que se ejecute la petición.
            },
            success: function(){
                console.log(response);
            },
            error: function(){
                console.log("Ha ocurrido un error");
            },
            timeout: 2000 //Cuanto tiempo quiero que tarde como máximo la petición. Si tarda más dirá que ha ocurrido un error.

        });


        return false;

    });

    
    





});