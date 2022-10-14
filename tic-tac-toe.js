 var X=true;
window.onload=function(){
var resetbutton=document.getElementsByClassName("btn")[0];
resetbutton.addEventListener('click', function() {
var stat=document.getElementById("status");
stat.innerHTML=("Move your mouse over a square and click to play an X or an O.");
stat.classList.remove("you-won")
var square=document.getElementById("board").children;   
X=true;
for (let p=0; p < square.length; p++){
    square[p].setAttribute("class","square");
    square[p].innerHTML="";
    square[p].addEventListener("mouseover",function(){
        square[p].classList.add("hover");
    })
    square[p].addEventListener("mouseout",function(){
        square[p].classList.remove("hover");
    })
    square[p].addEventListener("click",function()
    {
        console.log(X);
        console.log(square[p]);
        
            if (X==true&&square[p].innerHTML=="")
            {
                square[p].innerHTML="X";
                square[p].classList.add("X");
            X=false
            }
            else 
                if (X==false&&square[p].innerHTML=="")
            {
                
                square[p].innerHTML="O";
                square[p].classList.add("O");
                X=true
            }
        for (let y=0; y<square.length;y+=3)
    {
        if(square[y].innerHTML==square[y+1].innerHTML&&square[y].innerHTML==square[y+2].innerHTML&&square[y].innerHTML!="")
        {
            if (X ==false)
            {
                stat.innerHTML=("Congratulations! X is the Winner!");
                stat.classList.add("you-won");
                
               
            }
            else
            {
                stat.innerHTML=("Congratulations! O is the Winner!");
                stat.classList.add("you-won");
               
                
            }
        }
    }  
    for (let p=0; p<3;p+=3)
    {
       if(square[p].innerHTML==square[p+3].innerHTML&&square[p].innerHTML==square[p+6].innerHTML&&square[p].innerHTML!="") 
       {
        if (X ==false)
        {
            stat.innerHTML=("Congratulations! X is the Winner!");
            stat.classList.add("you-won");
        }
        else
        {
            stat.innerHTML=("Congratulations! O is the Winner!");
            stat.classList.add("you-won");
        }
       }
    } 
    if(square[2].innerHTML == square[4].innerHTML && square[2].innerHTML == square[6].innerHTML && square[2].innerHTML != "")
        {
            if (X ==false)
            {
                stat.innerHTML=("Congratulations! X is the Winner!");
                stat.classList.add("you-won");
            }
            else
            {
                stat.innerHTML=("Congratulations! O is the Winner!")
                stat.classList.add("you-won");
            }
        }
    
    if(square[0].innerHTML == square[4].innerHTML && square[0].innerHTML == square[8].innerHTML && square[0].innerHTML != "")
        {   
            if (X ==false)
            {
                stat.innerHTML=("Congratulations! X is the Winner!");
                stat.classList.add("you-won");
            }
            else
            {
                stat.innerHTML=("Congratulations! O is the Winner!");
                stat.classList.add("you-won");
            }
        }
    });
   
}
});

}