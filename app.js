//function to edit the player name
function edit(){
    var x=prompt("enter player1 name");
    var y=prompt("enter player2 name");
    document.getElementsByClassName("game name")[0].innerHTML=x;
    document.getElementsByClassName("game name")[1].innerHTML=y;
}
function play(){
    var x=(Math.floor(Math.random()*6))+1;
    var y=(Math.floor(Math.random()*6))+1;


    var pictures=[];
    pictures[1]="<img src='dice1.png'>";
    pictures[2]="<img src='dice2.png'>";
    pictures[3]="<img src='dice3.png'>";
    pictures[4]="<img src='dice4.png'>";
    pictures[5]="<img src='dice5.png'>";
    pictures[6]="<img src='dice6.png'>";

    if(x==y){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML="MATCH DRAW!!";
        
    }
    else if(x>y){
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML=document.getElementsByClassName("game name")[0].innerHTML+"WINS !!";
    }
    else{
        document.getElementById("dice1").innerHTML=pictures[x];
        document.getElementById("dice2").innerHTML=pictures[y];
        document.getElementById("result").innerHTML=document.getElementsByClassName("game  name")[1].innerHTML+"WINS !!";
    }

}
