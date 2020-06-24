// Generating random numbers for first dice.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//naming images using concatenation
var diceName = "dice" + randomNumber1 + ".png";
//creating full path name using concatenation
var imageSource = "images/" + diceName;

//changing first dice image according to random numbers.
var firstDice = document.querySelector(".img1").setAttribute("src", imageSource);

//Generating random numbers for second dice.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//image name
var diceName1 = "dice" + randomNumber2 + ".png";
//creating full path name using concatenation
var imageSource1 = "images/" + diceName1;

//changinig second dice image according to random numbers.
var secondDice = document.querySelector(".img2").setAttribute("src", imageSource1);


// Conditional checking for Result declaration.
if (randomNumber1 === randomNumber2) { //Condition when match DRAWS
  document.querySelector("h1").innerHTML = "MATCH DRAW";
} else if (randomNumber1 > randomNumber2) { //Condition when player 1 wins
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
} else { //Condition when player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
