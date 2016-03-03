//Healthbar reduction
// figure out how to stop game once health reaches 0
//check for health counter being 0 needs to be outside window onload
var healthCounter;


window.onload = function() {

  function playSound(file) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', file);
    audioElement.play();
  }

var health1Counter = 100;
var health2Counter = 100;

var button1 = document.querySelector('.Haha');
console.log(button1);
var health1 = document.querySelector('.health1');
health1.innerText = health1Counter;
var health2 = document.querySelector('.health2');
health2.innerText = health2Counter;


// if (healthCounter >= 0) { //wrapped ALL 3 attack functions in this loop

//LIGHT ATTACK
button1.addEventListener('click', function() {
  // alert("Why'd you click me?");


  var health2 = document.querySelector('.health2');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.90) {
    health2Counter = health2Counter - 5;
    health2.innerText = health2Counter;
  } else {
    alert("Miss!")
  }
  if (health2Counter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health2.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health2');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button1.removeEventListener('click', function(){
    });

});

//trying to tie heavy attack hit success to random number
//Works! for med/light attacks: lower the >= diceValue for higher success rate
var button2 = document.querySelector('.Baba');
console.log(button2);

//NORMAL ATTACK
button2.addEventListener('click', function() {
  var health2 = document.querySelector('.health2');
  var diceValue = Math.random();
  if (diceValue <= 0.70) {
    health2Counter = health2Counter - 10;
    health2.innerText = health2Counter;
  } else {
    alert("Miss!");
  }
    if (health2Counter <= 0) { //endgame code, put into other 2 attack buttons
    alert("Player 1 slapped em silly!");
    alert("Game over!");
    health2.innerText = "You cant HANDLE the slaps";
    var resetButton = document.createElement('button'); //resetbutton code start
    resetButton.setAttribute('type', 'button');
    resetButton.innerText = 'New Slapfest?'
    resetButton.addEventListener('click', function() {
      window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
    })
    var putButton = document.querySelector('.health2');
    putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
  };
    button2.removeEventListener('click', function(){
      });

});

//Same for normal attack
var button3 = document.querySelector('.Jaja');
console.log(button2);

//STRONG ATTACK
button3.addEventListener('click', function() {
  var health2 = document.querySelector('.health2');
  var diceValue = Math.random();
  if (diceValue >= 0.65) {
    health2Counter = health2Counter - 20;
    health2.innerText = health2Counter;
  } else {
    alert("Miss!");
  }
  if (health2Counter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health2.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health2');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button3.removeEventListener('click', function(){
    });

});


///////END PLAYER 1 ATTACKS ///////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////



/////////PLAYER 2 ATTACKS ////////////////


var button4 = document.querySelector('.P2L');
console.log(button1);
var health1 = document.querySelector('.health1');
health1.innerText = health1Counter;
var health2 = document.querySelector('.health2');
health2.innerText = health2Counter;


// if (healthCounter >= 0) { //wrapped ALL 3 attack functions in this loop

//LIGHT ATTACK
button4.addEventListener('click', function() {
  // alert("Why'd you click me?");
  var health1 = document.querySelector('.health1');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue <= 0.90) {
    health1Counter = health1Counter - 5;
    health1.innerText = health1Counter;
  } else {
    alert("Miss!")
  }
  if (health1Counter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health1.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health1');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button4.removeEventListener('click', function(){
    });

});

//trying to tie heavy attack hit success to random number
//Works! for med/light attacks: lower the >= diceValue for higher success rate
var button5 = document.querySelector('.P2M');
console.log(button2);

//NORMAL ATTACK
button5.addEventListener('click', function() {
  //trying to add playSound
    function playSound(file) {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', file);
      audioElement.play('https://www.freesound.org/people/waterboy920/sounds/67034/');
    }
  //end trying to add playSound
  var health1 = document.querySelector('.health1');
  var diceValue = Math.random();
  if (diceValue <= 0.70) {
    health1Counter = health1Counter - 10;
    health1.innerText = health1Counter;
  } else {
    alert("Miss!");
  }
    if (health1Counter <= 0) { //endgame code, put into other 2 attack buttons
    alert("Player 2 slapped em silly!");
    alert("Game over!");
    health1.innerText = "You cant HANDLE the slaps";
    var resetButton = document.createElement('button'); //resetbutton code start
    resetButton.setAttribute('type', 'button');
    resetButton.innerText = 'New Slapfest?'
    resetButton.addEventListener('click', function() {
      window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
    })
    var putButton = document.querySelector('.health1');
    putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
  };
    button5.removeEventListener('click', function(){
      });

});

//Same for normal attack
var button6 = document.querySelector('.P2H');
console.log(button2);

//STRONG ATTACK
button6.addEventListener('click', function() {
  var health2 = document.querySelector('.health1');
  var diceValue = Math.random();
  if (diceValue >= 0.65) {
    health1Counter = health1Counter - 20;
    health1.innerText = health1Counter;
  } else {
    alert("Miss!");
  }
  if (health1Counter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 2 slapped em silly!");
  alert("Game over!");
  health1.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health1');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button6.removeEventListener('click', function(){
    });

});





};




//build function to display reset button that reloads the game
//has to create new button after health is <= 0, then attach function to it to refresh the page
//probably best to put inside each attack button's code in case game ends when that button is pushed

//just reset button
// var resetButton = document.createElement('button');
// resetButton.setAttribute('type', 'button');
// var putButton = document.querySelector('.health');
// putButton.appendChild(resetButton);

//full reset button code with page refresh
// if (healthCounter <= 0) { //endgame code, put into other 2 attack buttons
// alert("Player 1 slapped em silly!");
// alert("Game over!");
// health.innerText = "You cant HANDLE the slaps";
// var resetButton = document.createElement('button'); //resetbutton code start
// resetButton.setAttribute('type', 'button');
// resetButton.innerText = 'New Slapfest?'
// resetButton.addEventListener('click', function() {
//   window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
// })
// var putButton = document.querySelector('.health');
// putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
// };
// button2.removeEventListener('click', function(){
//   });


//trying to add playSound
  // function playSound(file) {
  //   var audioElement = document.createElement('audio');
  //   audioElement.setAttribute('src', file);
  //   audioElement.play('https://www.freesound.org/people/waterboy920/sounds/67034/');
  // }
//end trying to add playSound
