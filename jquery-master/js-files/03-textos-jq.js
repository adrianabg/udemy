$(document).ready(function(){
    //alert("funciona");
    //console.log($("a").length); //Contar cuantos elementos hay.
    
    reloadLinks();

    $("#add_button")
        .removeAttr("disabled")
        .click(function(){
            $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a></li>');
            reloadLinks();
            //El método html sirve para incrustar en el html pero se carga lo que ya había en el caso de que queramos añadir. Para añadir utilizamos append, y prepend lo pone al incicio. El método before y after, hacen lo mismo pero justo antes/después del elemento, lo pone fuera.
        });
});

function reloadLinks(){
     $("a").each(function(index){
        //console.log($(this));
        
        var that = $(this);
        var enlace = $(this).attr("href"); //Me mostrará el enlace que yo le he escrito.
        that.attr("target","_blank");//Añadir atributos a los elementos.
        that.text(enlace);
        
    });
}

