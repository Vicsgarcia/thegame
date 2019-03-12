
window.onload=function(){document.onkeydown=desplazar};
    function desplazar(objeto){
    var tecla = objeto.which;
    var situacionY = document.getElementById("rick").offsetLeft;
    var situacionX = document.getElementById("rick").offsetTop;
    var situacionV = document.getElementById("morty").offsetLeft;
    var situacionZ = document.getElementById("morty").offsetTop;
        switch (tecla){
            case 37 :   
                rick.style.left = situacionY-220+"px" ; break;
            case 38 : 
                rick.style.top = situacionX-220+"px" ;break;
            case 39 :  
                rick.style.left = situacionY-180+"px" ;break;
            case 40 : 
                rick.style.top = situacionX-180+"px" ;break;
            case 65 :   
                morty.style.left = situacionV-220+"px" ; break;
            case 87 : 
                morty.style.top = situacionZ-220+"px" ;break;
            case 83 :  
                morty.style.left = situacionV-180+"px" ;break;
            case 90 : 
                morty.style.top = situacionZ-180+"px" ;break;
        }
    }


