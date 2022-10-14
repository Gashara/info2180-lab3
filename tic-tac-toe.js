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
});
}
}