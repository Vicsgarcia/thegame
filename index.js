
var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var jugador = 1;
function seleccionar(){
 for(i=0; i<9; i++){
 if(tablero[i] == 0) document.getElementById("c"+i).style="background-color: white";
 if(tablero[i] == 1) document.getElementById("c"+i).style="background-color: red";
 if(tablero[i] == 2) document.getElementById("c"+i).style="background-color: blue"; 
 }
}
function pcelda(celda){
if (tablero[celda]==0) {
 if (jugador==1){
 tablero[celda]=1;
 jugador=2;
 } else {
 tablero[celda]=2;
 jugador=1; 
 }
} else {
window.alert("No puedes pulsar sobre una celda coloreada");
}
seleccionar();
 var r = winner();
 switch(r){
  case 0:
   break;
  case 1:
   window.alert("¡Gana el rojo!");
   location.reload()
   break;
  case 2:
   window.alert("¡Gana el azul!");
   location.reload()
   break;
  case 3:
   window.alert("¡Empate!");
   location.reload()
   break; 
}
}
function winner(){
var numEspacios=0;
for(i=0; i<9; i++){
if(tablero[i] == 0) numEspacios++;
}
//  líneas horizontales
if(tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] !=0) return tablero[0];
if(tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] !=0) return tablero[3];
if(tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] !=0) return tablero[6];
// líneas verticales
if(tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] !=0) return tablero[0];
if(tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] !=0) return tablero[1];
if(tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] !=0) return tablero[2];
// diagonales
if(tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] !=0) return tablero[0];
if(tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] !=0) return tablero[2];

if (numEspacios > 0){
return 0;
} else {
return 3;
}
}
