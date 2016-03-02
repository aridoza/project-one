1. variables
player1
player2
diceRollValue
Player1Health = 30;
Player2Health= 30;
player1IsDead = false;
player2IsDead = false; //if one changes to true, game ends, alert("Player x got slapped senseless!")




2. game logic
dice roll (6 sided die)

//page loads, player1Health, player2Health both = 30
//have a button under each player image to attack
//attack buttons mapped to function that listens for click, then runs dice roll function, gets a value, store it in a variable, and subtract it from other players health
//only allow one player to attack at a time. First eventlistener is player1 click, then player2 click

//kirby vs kermit: kirby always ready to attack, but kermit can be super smug img in beginning, then change to more worried when closer to death

while player health is greater than Zero
user clicks on button
roll dice
get dice value
dice value = attack number (6 is a miss, dmg = 0)
subtract attack number from player health
if player health <= 0 at this point:
playerisdead changed to true;
alert "player dead"
overwrite player image with dead image (skullface?)
else, console.log player health remaining
keep playing!

repeat for player 2







//EXTRAS
//add a character select screen to choose btwn different character images
//add presidential candidates?
