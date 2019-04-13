'use strict'

/*
BOM - BROWSER OBJECT MODEL
Sirve para trabajar con los elementos que nos da el navegador web.
*/ 

//SABER TAMAÑO VENTANA DEL NAVEGADOR

function getBom (){
    console.log(screen.height);
    console.log(screen.width); /* Permet accedir a l'objecte de la finestra del navegador. També val posar window.height o widht*/
}
getBom();

//SABER URL DONDE ESTAMOS
console.log(window.location);
console.log(window.location.href);
//Podria posar-ho dins la funció anterior. Podem posar les propietats que volguem saber.

//REDIRIGIR A UNA ALTRA WEB
function redirect(url){
    window.location.href = url;
}

//ABRIR UNA VENTANA NUEVA DE NAVEGADOR
function abrirventana(url){
    window.open(url, "", "width=400, height=500");
    //Si només li poso el paràmetre de url obra una pestanya nova.
}