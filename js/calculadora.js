/*Objeto para definir las propiedades de la calculadora*/
var propCal={
    teclado:document.querySelectorAll('#calculadora ul li'),
    accion:null,
    operaciones:document.querySelector('#operaciones'),
    digito:0,
    canidadSigno:0,
    cantidadDecimal:false,
}
/*Objeto para definir todos los metodos que vamos a definir en la calculadora*/
var metCal={
    inicio:function(){
        //console.log(propCal.teclado);
        propCal.teclado.forEach(element =>{
            element.addEventListener('click',metCal.oprimirTecla);
        })
    },
        oprimirTecla:function(tecla){
            //console.log(tecla);
            propCal.accion=tecla.target.getAttribute('class');
            // console.log(propCal.accion);
            propCal.digito=tecla.target.innerHTML;
            //console.log(propCal.digito);
            metCal.calculadora(propCal.accion,propCal.digito);
        },
        calculadora:function(accion,digito){
            switch(accion){
                case 'numero':
                propCal.canidadSigno=0;
                if (propCal.operaciones.innerHTML==0) {
                    propCal.operaciones.innerHTML=digito;   
                }
                else{
                    console.log(accion);
                    propCal.operaciones.innerHTML+=digito;
                    }
                break;
                case 'signo':
                prompt.canidadSigno++;
                console.log(propCal.canidadSigno)
                if (propCal.canidadSigno==1 ) {
                    if (propCal.operaciones.innerHTML==0) {
                        propCal.operaciones.innerHTML=0;
                    }
                    propCal.operaciones.innerHTML+=digito;  
                } 
                    console.log(accion);
                    propCal.operaciones.innerHTML+=digito;  
                   
               
                break;
                case 'decimal':
                if (!propCal.cantidadDecimal && propCal.cantidadDecimal!=1) {
                    propCal.operaciones.innerHTML+=digito;
                    propCal.cantidadDecimal=false;
                }
                     console.log(accion);
                break;
                case 'igual':
                propCal.operaciones.innerHTML=eval(propCal.operaciones.innerHTML);
                console.log(accion);
                break;
            }
        },
        borrar:function(){
            propCal.operaciones.innerHTML=0;
        }
    }
    metCal.inicio()

    
