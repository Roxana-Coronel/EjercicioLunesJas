//Objeto para las propiedades del formulario

var propForm={
    entradas:document.querySelectorAll('input.validar'),
    valorInput:null
}

var metForm={
    inicio:function(){
        propForm.entradas.forEach(element =>{
            element.addEventListener('focus', metForm.inpFoco),
            element.addEventListener('blur', metForm.inpFueraFoco),
            element.addEventListener('change', metForm.inpEscribiendo)
        });
    },
    inpFoco:function(input){
        console.log(input)
        propForm.valorInput=input.target.value;
        if (propForm.valorInput=="") {
           document.querySelector('#'+ input.target.id).style.background='rgba(255, 0, 0,.05)';
           document.querySelector('#'+ input.target.id).style.borderBottom='6px solid rgba(255, 0, 0,.5)';
           document.querySelector('[for='+input.target.id+'] .obligatorio').style.display='Block';
           
        }
        document.querySelector('[for='+input.target.id+']').appendChild(document.createElement("div")).setAttribute('class','error');
    },
    inpFueraFoco:function (input) {
        document.querySelector('[for='+input.target.id+'] .obligatorio').style.display='None';
        document.querySelector('[for='+input.target.id+'] .obligatorio').style.background='#FFF';
        document.querySelector('[for='+input.target.id+'] .obligatorio').style.borderBottom='3px solid rgba(255, 0, 0,.5)';
    },
    inpEscribiendo:function (input) {
        console.log('estoy cambiando' +input.target.id);
    },
    inpEscribiendo:function (input) {
        var tipo=input.target.type;
        switch (tipo) {
            case 'text':
                console.log('Esto es un tipo texto');
                break;
        
                case 'password':
                console.log('Esto es un tipo password');
                break;

                case 'number':
                console.log('Esto es un tipo number');
                break;

                case 'date':
                console.log('Esto es un tipo Date');
                break;
            
        }
        
    }
}
metForm.inicio();