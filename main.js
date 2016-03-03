//variables
// var player1 = function() {
//   prompt("Enter P1");}
// player2 = prompt("Enter P2");
// diceRollValue;
// Player1Health = 30;
// Player2Health= 30;
// player1IsDead = false;
// player2IsDead = false; //if one changes to true, game ends, alert("Player x got slapped senseless!")




//game logic
//dice roll (6 sided die)

//page loads, player1Health, player2Health both = 30
//have a button under each player image to attack
//attack buttons mapped to function that listens for click, then runs dice roll function, gets a value, store it in a variable, and subtract it from other players health
//only allow one player to attack at a time. First eventlistener is player1 click, then player2 click

//kirby vs kermit: kirby always ready to attack, but kermit can be super smug img in beginning, then change to more worried when closer to death
//
// while player health is greater than Zero
// user clicks on button
// roll dice
// get dice value
// dice value = attack number (6 is a miss, dmg = 0)
// subtract attack number from player health
// if player health <= 0 at this point:
// playerisdead changed to true;
// alert "player dead"
// overwrite player image with dead image (skullface?)
// else, console.log player health remaining
// keep playing!
//
// repeat for player 2







//EXTRAS
//add a character select screen to choose btwn different character images
//add presidential candidates?

window.onload = function() {


  // player1;
  // player2;
  // diceRollValue;
  var Player1Health = 30;
  var Player2Health= 30;
  var p1HealthDiv = document.querySelector('.P1Health');
  p1HealthDiv.innerText = Player1Health;
  var p2HealthDiv = document.querySelector('.P2Health');
  p2HealthDiv.innerText = Player2Health;
  player1IsDead = false;
  player2IsDead = false; //if one changes to true, game ends, alert("Player x got slapped senseless!")







//Grab attack buttons & do stuff
var player1LA = document.querySelector('.lightAttackP1'); //player1LA => player 1 light attack (higher hit chance)
var player2LA = document.querySelector('.lightAttackP2');
player1LA.addEventListener('click', function() {
  alert("Kirby barely attacks Kermit!");
});
player2LA.addEventListener('click', function() {
  alert("Kermit barely attacks Kirby!");
});

var player1MA = document.querySelector('.medAttackP1'); //MA = medium attack (avg hit chance)
var player2MA = document.querySelector('.medAttackP2');
player1MA.addEventListener('click', function() {
  alert("Kirby mediumly attacks Kermit!");
});
player2MA.addEventListener('click', function() {
  alert("Kermit mediumly attacks Kirby!");
});

var player1HA = document.querySelector('.strongAttackP1'); //heavy attack (has lower chance in dice roll. if roll less than certain value it misses)
var player2HA = document.querySelector('.strongAttackP2');
player1HA.addEventListener('click', function() {
  alert("Kirby bitch slaps Kermit!");
});
player2HA.addEventListener('click', function() {
  alert("Kermit bitch slaps Kirby!");
});


//Diceroll function
var diceValue;
var diceRoll = function() {
  var roll = Math.random();
  var diceValue = 0;
  if (roll <= 0.17) {
    diceValue = 1;
  } else if (roll <= 0.33) {
    diceValue = 2;
  } else if (roll <= 0.50) {
    diceValue = 3;
  } else if (roll <= 0.67) {
    diceValue = 4;
  } else if (roll <= 0.84) {
    diceValue = 5;
  } else if (roll <= 1) {
    diceValue = 6;
  }
  console.log(diceValue);
};



//Game begins
//trying out while loop tied to player health
// var count1 = 30;
// var count2 = 30;
// while (count1 > 0) {
//   player1AttackButton = document.getElementById('.AttackP1');
//   player1Click = player1AttackButton.addEventListener('click', function() {
//     alert("Hello!");
//   });
// }


};
