/*
var audio = document.createElement('audio');
audio.src = 'sounds/triciclo.ogg'
audio.play();

var audio = document.createElement('audio');
audio.src = 'sounds/quiero-jugar-a-un-juego-muneco-saw.ogg'
audio.play();
*/

document.getElementById("onePlayer").onclick = function () {
        location.href = "oneplayer.html";
}
document.getElementById("twoPlayer").onclick = function () {
    location.href = "twoplayer.html";
}

