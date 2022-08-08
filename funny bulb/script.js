var image=document.getElementById("myimage");
var x=document.getElementById("myAudio")
var y=document.getElementById("myAudio2")
var textchange=document.getElementById("text")
function bulbon(){
    if(image.src.match("offo")){
        image.src="bulbon.png"
        x.play();
        y.pause();
        textchange.innerText="Jaldi Off karo bhai"
    }
    else{
    image.src="bulboffo.png";
    x.pause();
    y.play();
    textchange.innerText="Dar gye kya bhai"
    }
}