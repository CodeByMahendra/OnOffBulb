let men=document.querySelector("#main")
let bt=document.querySelector("#btn")




bt.addEventListener("click",function(){
    if(btn==0){
       bt.innerHTML="OFF"
       men.style.backgroundColor="yellow"
       
       btn=1
    }
    else{
                   bt.innerHTML="ON"
                   men.style.backgroundColor="red"
                 
                   btn=0
            }
    
    })
