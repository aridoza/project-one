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
// while player health is greater than Zero DONE
// user clicks on button DONE (try to map to key presses instead of click)
// roll dice - got into each attack function to return success rate of attack
// get dice value - tied to attack
// dice value = attack number (6 is a miss, dmg = 0) - 3 attacks,
// subtract attack number from player health (copy/paste for P2, update names)
// if player health <= 0 at this point:
// playerisdead changed to true;
// alert "player dead" - slapped silly
// overwrite player image with dead image (skullface?)
// else, console.log player health remaining
// keep playing!
//wait until player 2 attacks, then P1 can attack again
//
// repeat for player 2

////recent issues:
//1. getting p1, p2 attack buttons to have no input until after
//next player attacks DONE
//2. adding sound clips to button clicks DONE
//3. moving reset game button to top center of screen
//4.


///Things to add:
//1.character select screen
//2. title screen
//3. background music
//4. mega slap attack- after 3 hits, or after get hit 3 times
//5. fonts- grab google fonts main link, put in top of css, then
//choose font style like normal for specific tag/class etc.




/////ONCE EVERYTHING WORKS: MAKE YOUR CODE NEAT WITH INDENTS, etc.////







//EXTRAS
//add a character select screen to choose btwn different character images
//add presidential candidates?

window.onload = function() {



  // player1;
  // player2;
  // diceRollValue;
  var Player1Health = 100;
  var Player2Health= 100;
  var health1 = document.querySelector('.P1Health');
  health1.innerText = Player1Health;
  var health2 = document.querySelector('.P2Health');
  health2.innerText = Player2Health;
  player1IsDead = false;
  player2IsDead = false; //if one changes to true, game ends, alert("Player x got slapped senseless!")

  healthbar1 = document.querySelector('.healthbarP1');
  healthbar2 = document.querySelector('.healthbarP2');


///////getting player name////////////
var name1 = document.querySelector('.P1N');
var getName1 = prompt("Enter Player 1:");
name1.innerHTML = ("Hands ready, " + getName1 + "!");

var name2 = document.querySelector('.P2N');
var getName2 = prompt("Enter Player 2:");
name2.innerHTML = ("Hands steady, " + getName2 + "!");

alert("Ready...");
alert("FIGHT!!!!!!");
///////////////////////////////////////

var player1LAPress = false;
var player1MAPress = false;
var player1HAPress = false;
var player2LAPress = false;
var player2MAPress = false;
var player2HAPress = false;


////disable p1 buttons/////
  function disableP1Buttons() {
    player1LA.disabled = true;
    player1MA.disabled = true;
    player1HA.disabled = true;
  };

/////disable p2 buttons//////
  function disableP2Buttons() {
    player2LA.disabled = true;
    player2MA.disabled = true;
    player2HA.disabled = true;
  };

  ///////enable p1 buttons////////
  function enableP1Buttons() {
    player1LA.disabled = false;
    player1MA.disabled = false;
    player1HA.disabled = false;
  };



  ////////enable p2 buttons////////
  function enableP2Buttons() {
    player2LA.disabled = false;
    player2MA.disabled = false;
    player2HA.disabled = false;
  };



//Grab attack buttons & do stuff
var player1LA = document.querySelector('.lightAttackP1'); //player1LA => player 1 light attack (higher hit chance)
var player2LA = document.querySelector('.lightAttackP2');



/////////////LIGHT ATTACKS ///////////////////////
var player1LA = document.querySelector('.lightAttackP1'); //player1LA => player 1 light attack (higher hit chance)
var player2LA = document.querySelector('.lightAttackP2');

////////////////////P1 LIGHT ATTACK///////////////////////
player1LA.addEventListener('click', function() {
  // alert("Kirby barely attacks Kermit!");

  player1LAPress = true;

  if (player1LAPress = true) {
    disableP1Buttons();
    enableP2Buttons();
  }
  var health2 = document.querySelector('.P2Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.90) {
    var audio = new Audio('http://soundbible.com/grab.php?id=2047&type=mp3');
    audio.play();

    Player2Health = Player2Health - 5;
    health2.innerText = Player2Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player2Health <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health2.innerText = "You cant HANDLE the slaps!";
  // var grabReset = document.querySelector('h1');
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?';
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P2Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player1LA.removeEventListener('click', function(){
    });
});

///////////////////P2 LIGHT ATTACK//////////////////////
player2LA.addEventListener('click', function() {
  player2LAPress = true;

  if (player2LAPress = true) {
    disableP2Buttons();
    enableP1Buttons();
  }
  // alert("Kermit barely attacks Kirby!");
  var health1 = document.querySelector('.P1Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.90) {
    var audio = new Audio('http://soundbible.com/grab.php?id=2047&type=mp3');
    audio.play();
    Player1Health = Player1Health - 5;
    health1.innerText = Player1Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player1Health <= 0) { //endgame code, put into other 2 attack buttons
    var audio = new Audio('http://soundbible.com/grab.php?id=2045&type=mp3');
    audio.play();
  alert("Player 2 slapped em silly!");
  alert("Game over!");
  health1.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P1Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player2LA.removeEventListener('click', function(){
    });
});




///////NORMAL ATTACKS ///////////////////

var player1MA = document.querySelector('.medAttackP1'); //MA = medium attack (avg hit chance)
var player2MA = document.querySelector('.medAttackP2');

////////////////////////P1 NORMAL ATTACK////////////////////
player1MA.addEventListener('click', function() {
  player1MAPress = true;

  if (player1MAPress = true) {
    disableP1Buttons();
    enableP2Buttons();
  }
  // alert("Kirby mediumly attacks Kermit!");
  var health2 = document.querySelector('.P2Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.70) {
    var audio = new Audio('http://soundbible.com/grab.php?id=1418&type=mp3');
    audio.play();
    Player2Health = Player2Health - 10;
    health2.innerText = Player2Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player2Health <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health2.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P2Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player1MA.removeEventListener('click', function(){
    });
});

/////////////////////P2 NORMAL ATTACK///////////////////
player2MA.addEventListener('click', function() {
  player2MAPress = true;

  if (player2MAPress = true) {
    disableP2Buttons();
    enableP1Buttons();
  }
  // alert("Kermit mediumly attacks Kirby!");
  var health1 = document.querySelector('.P1Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.70) {
    var audio = new Audio('http://soundbible.com/grab.php?id=1418&type=mp3');
    audio.play();
    Player1Health = Player1Health - 10;
    health1.innerText = Player1Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player1Health <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 2 slapped em silly!");
  alert("Game over!");
  health1.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P1Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player2LA.removeEventListener('click', function(){
    });
});



//////////////////STRONG ATTACKS //////////////////////
var player1HA = document.querySelector('.strongAttackP1'); //heavy attack (has lower chance in dice roll. if roll less than certain value it misses)
var player2HA = document.querySelector('.strongAttackP2');

/////////////////P1 STRONG ATTACK////////////////////
player1HA.addEventListener('click', function() {
  player1HAPress = true;

  if (player1HAPress = true) {
    disableP1Buttons();
    enableP2Buttons();
  }
  // alert("Kirby bitch slaps Kermit!");
  var health2 = document.querySelector('.P2Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue >= 0.65) {
    var audio = new Audio('http://soundbible.com/grab.php?id=1948&type=mp3');
    audio.play();
    Player2Health = Player2Health - 20;
    health2.innerText = Player2Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player2Health <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health2.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P2Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player1LA.removeEventListener('click', function(){
    });
});

////////////P2 STRONG ATTACK/////////////////////////
player2HA.addEventListener('click', function() {
  player2HAPress = true;

  if (player2HAPress = true) {
    disableP2Buttons();
    enableP1Buttons();
  }
  // alert("Kermit bitch slaps Kirby!");
  var health1 = document.querySelector('.P1Health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue >= 0.65) {
    var audio = new Audio('http://soundbible.com/grab.php?id=1948&type=mp3');
    audio.play();
    Player1Health = Player1Health - 20;
    health1.innerText = Player1Health;
  } else {
    var audio = new Audio('http://soundbible.com/grab.php?id=2068&type=mp3');
    audio.play();
    // alert("Miss!")
  }
  if (Player1Health <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 2 slapped em silly!");
  alert("Game over!");
  health1.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.P1Health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player2LA.removeEventListener('click', function(){
    });
});


//Diceroll function
// var diceValue;
// var diceRoll = function() {
//   var roll = Math.random();
//   var diceValue = 0;
//   if (roll <= 0.17) {
//     diceValue = 1;
//   } else if (roll <= 0.33) {
//     diceValue = 2;
//   } else if (roll <= 0.50) {
//     diceValue = 3;
//   } else if (roll <= 0.67) {
//     diceValue = 4;
//   } else if (roll <= 0.84) {
//     diceValue = 5;
//   } else if (roll <= 1) {
//     diceValue = 6;
//   }
//   console.log(diceValue);
// }; UNNECESSARY, just worked into each attack. Maybe retry for similar
//                  game in future to use less code?





}; //end of window onload

////turn functions: set all button presses to false, then
////as each one is pressed, turns off all 3 for that player, then
////enables the 3 for second player


//changing character images
//      setTimeout(function() {
//        varname.innerHTML="";
//       }, 1000);


////CITATIONS
//soundbible.com
//stackoverflow.com - putting audio on button press
//
