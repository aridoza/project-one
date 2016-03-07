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
//2. title screen DONE
//3. background music
//4. mega slap attack- after 3 hits, or after get hit 3 times
//5. fonts- grab google fonts main link, put in top of css, then
//choose font style like normal for specific tag/class etc.
//6. add input box type text, then grab its .value and it equals the
//inner text of something next to the name
//7. have input textbox, now make it so that text entered (.value of box)
//gets added as name of player (like how prompt was working)


//grab div class Reset - create reset button & hide it, make appear after
//either players health reaches zero
//INSTEAD of under health, feels/looks wonky





/////ONCE EVERYTHING WORKS: MAKE YOUR CODE NEAT WITH INDENTS, etc.////


window.onload = function() {

  ////background music/////
  var audioMain = new Audio('project-one/music/Slap Attack Theme v1.mp3');
  audioMain.play();


////GET PLAYER NAMES//////



//EXTRAS
//add a character select screen to choose btwn different character images
//add presidential candidates?


  var titleScreen = document.querySelector('.titleScreen');
  var charSelectScreen = document.querySelector('.characterSelectScreen');
  var readyScreen = document.querySelector('.readyScreen');
  var slapScreen = document.querySelector('.slapScreen')
  var mainGameScreen = document.querySelector('.container');
  var wowYouWinScreen = document.querySelector('.wowYouWin');
  var restartButton = document.querySelector('.restartButton');

  restartButton.style.visibility = 'hidden';
  wowYouWinScreen.style.visibility = 'hidden';

var resetGame = function() {
  restartButton.style.visibility = 'visible';
  wowYouWinScreen.style.visibility = 'visible';
};

  var titleButton = document.querySelector('.titleButton');
  var charButton = document.querySelector('.charButton');

  readyScreen.style.visibility = 'hidden';
  slapScreen.style.visibility = 'hidden';
  mainGameScreen.style.visibility = 'hidden';
  charSelectScreen.style.visibility = 'hidden';
  // charButton.style.visibility = 'hidden';

  titleButton.addEventListener('click', function() {
    titleScreen.style.visibility = 'hidden';
    charSelectScreen.style.visibility = 'visible';
  });









  /////HAVE PLAYERS ENTER NAME AT CHAR SELECT/////
  ///////getting player names////////////

  var p1NameSubmitClick;
  var p2NameSubmitClick;


  var player1 = document.createElement('h3');
  player1.innerText = "Player 1:"
  var p1Name = document.createElement('input');
  var p1NameSubmit = document.createElement('input');

  p1Name.setAttribute('type', 'text');
  p1NameSubmit.setAttribute('type', 'submit');
  var p1Div = document.querySelector('.p1Naming');
  p1Div.appendChild(player1);
  p1Div.appendChild(p1Name);
  p1Div.appendChild(p1NameSubmit);

  // if (p1Name.value > 1) {
  p1NameSubmit.addEventListener('click', function() {
      p1NameSubmitClick = true;
    p1Name.style.visibility = 'hidden';
    p1NameSubmit.style.visibility = 'hidden';
    player1.style.visibility = 'hidden';
    var p1GameName = document.querySelector('.P1N');
    var p1NameContent = p1Name.value;
    var displayP1Name = document.createElement('h3');
    displayP1Name.innerText = p1NameContent;
    p1GameName.appendChild(displayP1Name);
  });


  var player2 = document.createElement('h3');
  player2.innerText = "Player 2:"
  var p2Name = document.createElement('input');
  var p2NameSubmit = document.createElement('input');

  p2Name.setAttribute('type', 'text');
  p2NameSubmit.setAttribute('type', 'submit');
  var p2Div = document.querySelector('.p2Naming');
  p2Div.appendChild(player2);
  p2Div.appendChild(p2Name);
  p2Div.appendChild(p2NameSubmit);

  // if (p2Name.value > 1) {
  p2NameSubmit.addEventListener('click', function() {
      p2NameSubmitClick = true;
    p2Name.style.visibility = 'hidden';
    p2NameSubmit.style.visibility = 'hidden';
    player2.style.visibility = 'hidden';
    var p2GameName = document.querySelector('.P2N');
    var p2NameContent = p2Name.value;
    var displayP2Name = document.createElement('h3');
    displayP2Name.innerText = p2NameContent;
    p2GameName.appendChild(displayP2Name);

  });

//3 more screens, name input, READY, SLAP!!!, (then main Game)///

// var toggleCharButton = charButton.style.visibility = 'visible';

// if(player1.style.visibility == 'hidden' && player2.style.visibility == 'hidden'){
//   charButton.style.visibility = 'visible';
//   console.log("correctly reading name submissions");
// }



var changeToReady = charButton.addEventListener('click', function() {
  readyScreen.style.visibility = 'visible';
  charSelectScreen.style.visibility = 'hidden';
  console.log("correctly reading name submissions")
});

 readyScreen.addEventListener('click', function() {
   readyScreen.style.visibility = 'hidden';
   slapScreen.style.visibility = 'visible';
   var audio = new Audio('http://soundbible.com/grab.php?id=995&type=mp3');
   audio.play();
 });

 slapScreen.addEventListener('click', function() {
   slapScreen.style.visibility = 'hidden';
   mainGameScreen.style.visibility = 'visible';
 })


//remove container of content after button click:
  // middle.removeChild(enterName);
  // user.removeChild(input);
  // user.removeChild(enterButton);
  // parentnode.removeChild(childnode)



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





///add name inputs on separate screen, then make 2 more containers
//that just show READY.....
//then SLAP!!!
//THEN pull up main game window


// charButton.addEventListener('click', function() {
// var name1 = document.querySelector('.P1N');
// var newName1 = document.createElement ('input');
// newName1.type = 'text';
// newName1.value = "Enter your name...";
// name1.appendChild(newName1);
// newName1.setAttribute('name', 'username');
// newName1.setAttribute('value', 'default');
// var getName1 = newName1.value;
// });

// var getName1 = prompt("Enter Player 1:");
//after name is input:
// newName1.addEventListener('keypress', function() {
//   if (key === 13) {
//   name1.removeChild(newName1);
//   var getName1 = newName1.value;
//   newName1.style.visibility = 'hidden';
//   name1.innerHTML = ("Hands ready, " + getName1 + "!");
// } else {
//     newName1.style.visibility = 'hidden';
// };
// });


//
// var name2 = document.querySelector('.P2N');
// var getName2 = prompt("Enter Player 2:");
// name2.innerHTML = ("Hands steady, " + getName2 + "!");

// alert("Ready...");
// alert("FIGHT!!!!!!");
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
var player1MA = document.querySelector('.medAttackP1'); //MA = medium attack (avg hit chance)
var player2MA = document.querySelector('.medAttackP2');
var player1HA = document.querySelector('.strongAttackP1'); //heavy attack (has lower chance in dice roll. if roll less than certain value it misses)
var player2HA = document.querySelector('.strongAttackP2');


disableP2Buttons();

/////////////LIGHT ATTACKS ///////////////////////


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
  // alert("Player 1 slapped em silly!");
  // alert("Game over!");
  resetGame();
  var p2LostMsg = document.querySelector('.P2N');
  var p1WonMsg = document.querySelector('.P1N');
  p1WonMsg.innerText = "MASTER of SLAPS!"
  p2LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage2 = document.querySelector('.p2Img');
  hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  var hurtImageB = function(){
    var hurtImage2 = document.querySelector('.p2Img');
    hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  };setTimeout ("hurtImageB()", 2000);

  // var grabReset = document.querySelector('h1');
  // var resetButton = document.createElement('button'); //resetbutton code start
  // resetButton.setAttribute('type', 'button');
  // resetButton.innerText = 'New Slapfest?';
  var resetButton = document.querySelector('.restartButton'); //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P2Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
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
    // var hurtP1Image = function() {
    //
      // var hurtImage1 = document.querySelector('.p1Img');
      // hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
      // var hurtImageA = function(){
      //   var hurtImage1 = document.querySelector('.p1Img');
      //   hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
      // };setTimeout ("hurtImageA()", 2000);


      function switchImage(pic) {
        var pic = document.querySelector('.p1Img');
        pic.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
      }
      function damageSwitch(pic) {
        var timer = setTimeout("switchImage(pic)", 2000);
      }




      // var oldImg = document.querySelector('.p1Img');
      // oldImg.replaceChild(oldImg, hurtImageA);

      // var hurtChange1 = setTimeout("hurtP1Image()", 2000);
      // return hurtChange1;

      // var hurtImageB = document.querySelector('.p1Img');
      // hurtImageB.src = "https://media.giphy.com/media/soOVcuMDExGrS/giphy.gif";
    // hurtP1Image;
    // hurtP1Image;

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
  // alert("Player 2 slapped em silly!");
  // alert("Game over!");
  resetGame(); //shows wow image & reset button
  // health1.innerText = "You cant HANDLE the slaps";
  var p1LostMsg = document.querySelector('.P1N');
  var p2WonMsg = document.querySelector('.P2N');
  p2WonMsg.innerText = "MASTER of SLAPS!"
  p1LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage1 = document.querySelector('.p1Img');
  hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  var hurtImageA = function(){
    var hurtImage1 = document.querySelector('.p1Img');
    hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  };setTimeout ("hurtImageA()", 2000);

  var resetButton = document.querySelector('.restartButton'); //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P1Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player2LA.removeEventListener('click', function(){
    });
});




///////NORMAL ATTACKS ///////////////////



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
  // alert("Player 1 slapped em silly!");
  // alert("Game over!");
  resetGame();
  var p2LostMsg = document.querySelector('.P2N');
  var p1WonMsg = document.querySelector('.P1N');
  p1WonMsg.innerText = "MASTER of SLAPS!"
  p2LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage2 = document.querySelector('.p2Img');
  hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  var hurtImageB = function(){
    var hurtImage2 = document.querySelector('.p2Img');
    hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  };setTimeout ("hurtImageB()", 2000);

  var resetButton = document.querySelector('.restartButton'); //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  // var resetButton = document.createElement('button'); //resetbutton code start
  // resetButton.setAttribute('type', 'button');
  // resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P2Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
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
  // alert("Player 2 slapped em silly!");
  // alert("Game over!");
  resetGame();
  var p1LostMsg = document.querySelector('.P1N');
  var p2WonMsg = document.querySelector('.P2N');
  p2WonMsg.innerText = "MASTER of SLAPS!"
  p1LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage1 = document.querySelector('.p1Img');
  hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  var hurtImageA = function(){
    var hurtImage1 = document.querySelector('.p1Img');
    hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  };setTimeout ("hurtImageA()", 2000);

  // var resetButton = document.createElement('button'); //resetbutton code start
  // resetButton.setAttribute('type', 'button');
  // resetButton.innerText = 'New Slapfest?'
  var resetButton = document.querySelector('.restartButton'); //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P1Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  player2LA.removeEventListener('click', function(){
    });
});



//////////////////STRONG ATTACKS //////////////////////


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
  // alert("Player 1 slapped em silly!");
  // alert("Game over!");
  resetGame();
  var resetButton = document.querySelector('.restartButton'); //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  var p2LostMsg = document.querySelector('.P2N');
  var p1WonMsg = document.querySelector('.P1N');
  p1WonMsg.innerText = "MASTER of SLAPS!"
  p2LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage2 = document.querySelector('.p2Img');
  hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  var hurtImageB = function(){
    var hurtImage2 = document.querySelector('.p2Img');
    hurtImage2.src = "http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg";
  };setTimeout ("hurtImageB()", 2000);

  // var resetButton = document.createElement('button'); //resetbutton code start
  // resetButton.setAttribute('type', 'button');
  // resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P2Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
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
  // alert("Player 2 slapped em silly!");
  // alert("Game over!");
  resetGame(); //shows wow and reset button
  var p1LostMsg = document.querySelector('.P1N');
  var p2WonMsg = document.querySelector('.P2N');
  p2WonMsg.innerText = "MASTER of SLAPS!"
  p1LostMsg.innerText = "You cant HANDLE the slaps!";

  var hurtImage1 = document.querySelector('.p1Img');
  hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  var hurtImageA = function(){
    var hurtImage1 = document.querySelector('.p1Img');
    hurtImage1.src = "http://orig07.deviantart.net/893c/f/2011/228/7/5/injured_kirby_without_blood_by_xxkaijuking91xx-d46qlwk.png";
  };setTimeout ("hurtImageA()", 2000);

  // var resetButton = document.createElement('button'); //resetbutton code start
  // resetButton.setAttribute('type', 'button');
  var resetButton = document.querySelector('.restartButton');  //resetbutton code start
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  // var putButton = document.querySelector('.P1Health');
  // putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};

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


// hurt kermit= http://40.media.tumblr.com/1c4156c5210170458e652ce25c92a6a9/tumblr_inline_ny8vxtzwwV1qdvldn_400.jpg


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
