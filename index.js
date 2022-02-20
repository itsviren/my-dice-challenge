function reload(){
    var x,y;
    x = Math.floor(Math.random()*6)+1;
    y = Math.floor(Math.random()*6)+1;
    if(x>y){
        document.getElementById("result").innerHTML="Player 1 wins.";
     }
     else if (x<y){
         document.getElementById("result").innerHTML="Player 2 win.";
     }
     else{
         document.getElementById("result").innerHTML="Draw";
     }
     document.getElementsByClassName("dice1")[0].setAttribute("src","images/dice"+x+".png");
     document.getElementsByClassName("dice2")[0].setAttribute("src","images/dice"+y+".png");
   };
   reload();