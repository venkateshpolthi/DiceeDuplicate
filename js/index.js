var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6
var randomImage = "dice"+randomNumber1+".png";//dice1.png-dice2.png
var randomLocation ="images/"+randomImage;//images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomLocation);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomLocation2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomLocation2);

/*var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","images/dice" + randomNumber2 + ".png");*/


//If player1 wins
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML ="🚩Player1 Wins!";
}

//If player2 wins
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}

//If both are same
else
{
  document.querySelector("h1").innerHTML = "Draw!";
}
