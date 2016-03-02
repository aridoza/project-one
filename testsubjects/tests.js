//Healthbar reduction

var button1 = document.querySelector('.Haha');
console.log(button1);
var healthCounter = 30;
button1.addEventListener('click', function() {
  alert("Why'd you click me?");
  var health = document.querySelector('.health');
  healthCounter = healthCounter - 3; //every time user clicks, health amt updates as 3 less; change -3 to -(somevariable from diceroll value)
  health.innerText = healthCounter;
});
