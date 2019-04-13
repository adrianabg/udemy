'use strict'

//CONSTANTES. Es un contenedor de datos, como una variable, pero su valor no puede cambiar, no se podrá modificar.

var web = "https://www.adrianabiarnes.com"; //Es pot modificar.
const ip = "192.88.0.12"; //Es construeix igual que una var.

web = "https://www.adrianabg.com"
ip = 123453 //TypeError: Assignment to constant variable. Ens avisa que no podem assingnar-li un valor nou a la constant.

console.log(web, ip); 
