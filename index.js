var randomOne = Math.floor(Math.random() * 6) + 1;
var randomTwo = Math.floor(Math.random() * 6) + 1;
if(randomOne > randomTwo){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(randomTwo > randomOne){
  document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Game Tied";
}
var pic1 = "images/dice" + randomOne + ".png";
var pic2 = "images/dice" + randomTwo + ".png";
document.querySelector(".img1").setAttribute("src",pic1);
document.querySelector(".img2").setAttribute("src",pic2);

// if(randomOne === 1) document.querySelector(".img1").setAttribute("src","images/dice1.png");
// if(randomOne === 2) document.querySelector(".img1").setAttribute("src","images/dice2.png");
// if(randomOne === 3) document.querySelector(".img1").setAttribute("src","images/dice3.png");
// if(randomOne === 4) document.querySelector(".img1").setAttribute("src","images/dice4.png");
// if(randomOne === 5) document.querySelector(".img1").setAttribute("src","images/dice5.png");
// if(randomOne === 6) document.querySelector(".img1").setAttribute("src","images/dice6.png");
// if(randomTwo === 2) document.querySelector(".img2").setAttribute("src","images/dice2.png");
// if(randomTwo === 1) document.querySelector(".img2").setAttribute("src","images/dice1.png");
// if(randomTwo === 3) document.querySelector(".img2").setAttribute("src","images/dice3.png");
// if(randomTwo === 4) document.querySelector(".img2").setAttribute("src","images/dice4.png");
// if(randomTwo === 5) document.querySelector(".img2").setAttribute("src","images/dice5.png");
// if(randomTwo === 6) document.querySelector(".img2").setAttribute("src","images/dice6.png");
