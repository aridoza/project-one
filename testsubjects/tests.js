//Healthbar reduction
window.onload = function() {


var button1 = document.querySelector('.Haha');
console.log(button1);
var healthCounter = 30;
var health = document.querySelector('.health');
health.innerText = healthCounter;
button1.addEventListener('click', function() {
  // alert("Why'd you click me?");
  var health = document.querySelector('.health');
  healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  health.innerText = healthCounter;
});

//trying to tie heavy attack hit success to random number
//Works! for med/light attacks: lower the >= diceValue for higher success rate
var button2 = document.querySelector('.Jaja');
console.log(button2);
button2.addEventListener('click', function() {
  var health = document.querySelector('.health');
  var diceValue = Math.random();
  if (diceValue >= 0.90) {
    healthCounter = healthCounter - 3;
    health.innerText = healthCounter;
  } else {
    alert("Miss!");

  }

})






};
