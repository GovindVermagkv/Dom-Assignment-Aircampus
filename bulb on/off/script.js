var image=document.getElementById("myimage");
var x=document.getElementById("myAudio")
var y=document.getElementById("myAudio2")
function bulbon(){
    if(image.src.match("offo")){
        image.src="bulbon.png"
        x.play();
        y.pause();
    }
    else{
    image.src="bulboffo.png";
    x.pause();
    y.play();

    }
}