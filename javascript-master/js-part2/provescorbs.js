
//***************************VERSIÓ FINAL *********************//

function marcarOpcio(seleccionada){
    document.getElementById("rating").onclick
    console.log("Me has dado click:"+seleccionada);
 
    for(var i = 1; i <= 5; i++){
        var rating = document.getElementById("corb"+i);
        // console.log(seleccionada + '>='+ i);
 
        if(seleccionada <=i){
            rating.style.color = "black";
        }else{
           rating.style.color = "white";
        }
       // console.log("Bucle for");
    }
}

var container = document.querySelector("#rating");
//Detecta tots els clics del document:
document.addEventListener("click", function(event) {
    if(event.target.closest("#rating")) return;
    //Si es clica fora del element:
    //container.classList.add("js-is-white");
    document.getElementById("corb1").style.color = "white";
    document.getElementById("corb2").style.color = "white";
    document.getElementById("corb3").style.color = "white";
    document.getElementById("corb4").style.color = "white";
    document.getElementById("corb5").style.color = "white";
    //NO DETECTA CLICK document.getElementById("rating").style.color = "white";
    //PERQUE EL IF NO PORTA CORC
});
//************************************ VERSIÓ FINAL ************************//









//Manera diferent de pintar els corbs clicats, enlloc d'inicialitzar a 1 fins a 5, de 0 fins a 4.

function marcarOpcio(seleccionada){
    document.getElementById("rating").onclick
    console.log("Me has dado click:"+seleccionada);


    for(var i = 0; i <= 4; i++){
     var rating = document.getElementById("corb"+(i+1));

     console.log(seleccionada + '>='+ i);
    
        if(seleccionada <=(i+1) ){
            //console.log(i);
            
            rating.style.color = "black";
        }else{
           rating.style.color = "white";
        }
        console.log("Bucle for");
    }

}


//Igual però inicialitzant d'1 a 5
function marcarOpcio(seleccionada){
    document.getElementById("rating").onclick
    console.log("Me has dado click:"+seleccionada);


    for(var i = 1; i <= 5; i++){
     var rating = document.getElementById("corb"+i);

     console.log(seleccionada + '>='+ i);
    
        if(seleccionada <=i){
            rating.style.color = "black";
        }else{
           rating.style.color = "white";
        }
        console.log("Bucle for");
    }

}


/* 
***** PROVES CLICK OUT CORBS ***** 

function resetColor(selected){
    document.getElementById("rating").onclick
    console.log("Borrar "+selected);
    rating.style.color = "white";
}

var rating = document.getElementById("corb");

rating.addEventListener("click", function(){ 
    resetColor(); 
    console.log(rating);
    rating.style.border = "white";
}); 

*/


/*
function resetColor(selected){
    document.getElementsByTagName("span").onclick;
    selected.style.color = "white";
}

window.addEventListener("click", function(e) { //capturo cualquier click en cualquier sitio “e” es el nombre argument
    if(!document.getElementById(rating)) { //si el click NO está dentro del div, limpiar todo
        resetColor();
    }
});
/*

// var clear = document.getElementById("rating");
// for(var i = 1; i<=5; i++){
//     clear[i].onclick = null;
// }


/*
function desmarcarOpcio(seleccionada){
    var clear = !document.getElementById("rating");
    if(clear.contains(seleccionada).reset{

    }
}
*/

/*
function desmarcarOpcio(selecciofora){
    document.getElementById("rating").onclick;
    console.log("M'has clicat"+selecciofora);
}
*/

/*
var ratingDiv = document.getElementById("rating");
document.onclick = inputChange(corb);
function inputChange(e){
    ratingDiv.textContent = "reset";
}


/*
document.addEventListener("click", function(evt){
    var divElement = !document.getElementById("rating");
    var targetElement = evt.target; //Element clicat
    //do{
        if (targetElement == divElement){
            resetColor();
            console.log("El bucle 2 funciona");
            //return;
        }
        /*targetElement = targetElement.parentNode;
    } while (targetElement);
    
    document.getElementsByClassName("crew").style.color = "white";*/
//});

/*
function clearAll(rating){
    resetColor();
    for(var i = 1; i <= 5; i++){
        var rating = document.getElementById("corb"+i);
        if(i <= rating){
            alert("Desclicando");
            document.getElementById("corb"+i).style.color = "white";

        }
    }
}


document.addEventListener("click", function(evt){
    var divElement = document.getElementById("rating");
    var targetElement = evt.target; //Element clicat
    do{
        if (targetElement == divElement){
            // resetColor();
            console.log("El bucle 2 funciona");
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    
    document.getElementsByClassName("crew").style.color = "white";
});
*/
