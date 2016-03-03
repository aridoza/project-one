//Healthbar reduction
// figure out how to stop game once health reaches 0
//check for health counter being 0 needs to be outside window onload
var healthCounter;


window.onload = function() {

var healthCounter = 100;
var button1 = document.querySelector('.Haha');
console.log(button1);
var health = document.querySelector('.health');
health.innerText = healthCounter;


// if (healthCounter >= 0) { //wrapped ALL 3 attack functions in this loop

button1.addEventListener('click', function() {
  // alert("Why'd you click me?");
  var health = document.querySelector('.health');
  // healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  // health.innerText = healthCounter;
  var diceValue = Math.random();
  if (diceValue >= 0.30) {
    healthCounter = healthCounter - 1;
    health.innerText = healthCounter;
  } else {
    alert("Miss!")
  }
  if (healthCounter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button1.removeEventListener('click', function(){
    });
  
});

//trying to tie heavy attack hit success to random number
//Works! for med/light attacks: lower the >= diceValue for higher success rate
var button2 = document.querySelector('.Baba');
console.log(button2);

button2.addEventListener('click', function() {
  var health = document.querySelector('.health');
  var diceValue = Math.random();
  if (diceValue >= 0.35) {
    healthCounter = healthCounter - 3;
    health.innerText = healthCounter;
  } else {
    alert("Miss!");
  }
    if (healthCounter <= 0) { //endgame code, put into other 2 attack buttons
    alert("Player 1 slapped em silly!");
    alert("Game over!");
    health.innerText = "You cant HANDLE the slaps";
    var resetButton = document.createElement('button'); //resetbutton code start
    resetButton.setAttribute('type', 'button');
    resetButton.innerText = 'New Slapfest?'
    resetButton.addEventListener('click', function() {
      window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
    })
    var putButton = document.querySelector('.health');
    putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
  };
    button2.removeEventListener('click', function(){
      });

});

//Same for normal attack
var button3 = document.querySelector('.Jaja');
console.log(button2);

button3.addEventListener('click', function() {
  var health = document.querySelector('.health');
  var diceValue = Math.random();
  if (diceValue >= 0.65) {
    healthCounter = healthCounter - 5;
    health.innerText = healthCounter;
  } else {
    alert("Miss!");
  }
  if (healthCounter <= 0) { //endgame code, put into other 2 attack buttons
  alert("Player 1 slapped em silly!");
  alert("Game over!");
  health.innerText = "You cant HANDLE the slaps";
  var resetButton = document.createElement('button'); //resetbutton code start
  resetButton.setAttribute('type', 'button');
  resetButton.innerText = 'New Slapfest?'
  resetButton.addEventListener('click', function() {
    window.location.reload(); //found at http://stackoverflow.com/questions/5294842/refresh-a-page-using-javascript-or-html
  })
  var putButton = document.querySelector('.health');
  putButton.appendChild(resetButton); //resetButton code ends; remove/recode if something breaks
};
  button3.removeEventListener('click', function(){
    });

});


//
//  if (healthCounter <= 0) {
//   alert("Player 1 slapped em silly!");
//   return "Game Over";
// } else {
//
// }
//  //end of giant MAIN loop
//
// };

};




//build function to display reset button that reloads the game
//has to create new button after health is <= 0, then attach function to it to refresh the page
//probably best to put inside each attack button's code in case game ends when that button is pushed

var resetButton = document.createElement('button');
resetButton.setAttribute('type', 'button');
var putButton = document.querySelector('.health');
putButton.appendChild(resetButton);
