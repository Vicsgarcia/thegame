
window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
    var tecla = objeto.which;
    
        var situacionY = document.getElementById("cuadrado").offsetLeft;
         var situacionX = document.getElementById("cuadrado").offsetTop;
        switch (tecla){
            case 37 :   
                cuadrado.style.left = situacionY-220+"px" ; break;
            case 38 : 
                cuadrado.style.top = situacionX-220+"px" ;break;
            case 39 :  
        cuadrado.style.left = situacionY-180+"px" ;break;
            case 40 : 
                cuadrado.style.top = situacionX-180+"px" ;break;
        default :alert("Se ha equivocado, debe pulsar las flechas del teclado");
        }
    }