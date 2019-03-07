document

document.body

document.body.header

document.querySelector("header");

document.querySelector('.barra nav');


console.log('1');
(function(){
    'use strict'
    document.addEventListener('DOMContentLoaded',function(){
        console.log('2');
    })
})();
console.log('3');


document.getElementById('barra');
 var barra = document.getElementById('barra');
 console.log(barra);
 //Permite concocer si tiene un atributo llamada clase//
 console.log(barra.hasAttribute('class'));
 //Permite obtener el nombre de la clase//
 console.log(barra.getAttribute('class')),

 //Cambiar atributos clase en el primer parametro es el atributo a cambiar  el otro el nombre//

 barra.setAttribute('class','barra2');
 console.log(barra);

 //Seleccionando lanavegacin principal y ocultandola//
 var  navegacionPrincipal=document.querySelector('.navegacionPrincipal');
 navegacionPrincipal.style.display='none';


 //Seleccionando elementosde la misma clase//

 var contenedor= document.getElementsByClassName('contenedor');
 console.log(contenedor);
 console.log(contenedor[2]);

 //Seleccionado varias//
 var contenedor=document.getElementsByClassName('contenidoPrincipal');
 console.log(contenedor[0]);

//Desaparecer elemento contenedor principal//
contenedor[2].style.display='none';

//Seleccionar enlaces//Code.VisualElementsManifest.xml
var enlaces= documet.getElementsByTagName('a');
console.log(enlaces);
for (const iterator of enlaces){
    iterator.setAttribute('target','blank');
}

//Selecciones multiples//
var enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
console.log(enlacesSidebar);
for (const iterator of enlacesSidebar) {
        iterator.setAttribute('href','http://www.google.com.co');   
    }


    var enlacesSidebar =documet.querySelectorAll('#sidebar .otrasEntradas ul li a');
    console.log(enlacesSidebar);
    for(const iterator of enlacesSidebar){
        iterator.setAttribute('href','http://www.google.com.co');
    }


    var encDos =document.querySelectorAll('h2');
    console.log(encDos[1].innerHTML);
    console.log(encDos[1].innerHTML);


    //Seleccionando mas de un parametro//
    var masUno=document.querySelectorAll('h2, footer p');
    console.log(masUno);
    console.log(masUno);


    var enlaces =document.querySelectorAll('a');
    console.log(enlaces);


    var enlaces=document.querySelectorAll('a');
    console.log(enlaces);


    var enlaces=document.querySelectorAll('a');
    console.log(enlaces);
    enlaces.forEach(element => {
        console.log(element.inerText);
    });


var enlacesMenu =document.querySelectorAll('#nav a');
//Que tipoes tipo nodo//
console.log(enlacesMenu[1].nodeType);
console.log(enlacesMenu[1].nodeType);


















