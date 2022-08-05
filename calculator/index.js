let show=document.getElementById("display")
let buttons=Array.from(document.getElementsByClassName("btn"))

buttons.map((btn) =>{
    btn.addEventListener("click",value)
});


function value(event){
    let key=event.target.innerText;

    if(key=="A/c"){
        show.innerText="0";
    }
   

    else if(key=="Del"){
        show.innerText=show.innerText.slice(0,-1);
    }
    else if(key=="="){
        show.innerText=eval(show.innerText);
    }
    else if(key=="√"){
        show.innerText=Math.sqrt( show.innerText);
    }
    else if(key=="^"){
        show.innerText  = Math.exp(show.innerText) ;
    }
    else if(key=="sin"){
        show.innerText=Math.sin( show.innerText);
        if(show.innerText > 0.5){
            show.innerText='1'
        }
        else{
            show.innerText=Math.sin( show.innerText);
        }
    }
    else if(key=="cos"){
        show.innerText=Math.cos( show.innerText);
    }
    else if(key=="tan"){
        show.innerText=Math.tan( show.innerText);
    }
    else if(key=="log"){
        show.innerText=Math.log( show.innerText);
    }
    else if(key=="x2"){
        show.innerText=eval(( show.innerText)**2);
    }
    else if(key=="1/x"){
        show.innerText=eval(1/( show.innerText));
    }
    else if(key=="e"){
        show.innerText=Math.exp( show.innerText);
    }
    else if(key=="rad"){
        show.innerText=(( show.innerText)*(3.14/180));
    }
    else if(key=="!"){
        show.innerText = function myfact(fact) {
            let factorial=1;
            for (let i = 1; i <= 5; i++) {
                factorial = factorial * i;
            }
            return factorial;
        }
        console.log(myfact(factorial))
    }
    else if(key=="π"){
        show.innerText +=3.14;
    }
    
 

    else{
        show.innerText +=key
    }
};

