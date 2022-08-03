let show=document.getElementById("display")
let buttons=Array.from(document.getElementsByClassName("btn"))

buttons.map((btn) =>{
    btn.addEventListener("click",value)
});


function value(event){
    let key=event.target.innerText;

    if(key=="A/c"){
        show.innerText="";
    }
    else if(key=="Del"){
        show.innerText=show.innerText.slice(0,-1);
    }
    else if(key=="="){
        show.innerText=eval(show.innerText);
    }
    else if(key=="√"){
        show.innerText=Math.sqrt(show.innerText).toFixed(3);
    }
    else if(key=="π"){
        show.innerText=3.18*(show.innerText);
    }

    else{
        show.innerText +=key
    }
};