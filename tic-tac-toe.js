let X=true;
window.onload=function(){
var square=document.getElementById("board").children;
for (let p=0; p < square.length; p++){
    square[p].setAttribute("class","square");
    square[p].addEventListener("mouseover",function(){
        square[p].classList.add("hover");
    })
    square[p].addEventListener("mouseout",function(){
        square[p].classList.remove("hover");
    })
    square[p].addEventListener("click",function()
    {
        if (X==true){
            square[p].innerHTML="X";
            square[p].classList.add("X");
        X=false
        }
        else{
            square[p].innerHTML="O";
            square[p].classList.add("O");
            X=true
        }
    for (let p=0; p<square.length;p+=3)
    {
        if(square[p].innerHTML==square[p+1].innerHTML&&square[p].innerHTML==square[p+2].innerHTML&&square[p+1].innerHTML!="")
        {
            if (X ==false)
            {
            console.log("Congratulations! X is the Winner!")
            }
            else
            {
                console.log("Congratulations! O is the Winner!")
            }
        }
    }  
    for (let p=0; p<3;p+=3)
    {
       if(square[p].innerHTML==square[p+3].innerHTML&&square[p].innerHTML==square[p+6].innerHTML&&square[p].innerHTML!="") 
       {
        if (X ==false)
        {
        console.log("Congratulations! X is the Winner!")
        }
        else
        {
            console.log("Congratulations! O is the Winner!")
        }
    }
} 
    if(square[2].innerHTML == square[4].innerHTML && square[2].innerHTML == square[6].innerHTML && square[2].innerHTML != "")
    {
        if (X ==false)
        {
        console.log("Congratulations! X is the Winner!")
        }
        else
        {
            console.log("Congratulations! O is the Winner!")
        }
    }
    if(square[0].innerHTML == square[4].innerHTML && square[0].innerHTML == square[8].innerHTML && square[0].innerHTML != "")
    {   
        if (X ==false)
        {
        console.log("Congratulations! X is the Winner!")
        }
        else
        {
            console.log("Congratulations! O is the Winner!")
        }
    }
    });
   
}
}
