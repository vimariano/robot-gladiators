var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "FIGHT" || promptFight === "fight"){
      
  
  enemyHealth = enemyHealth - playerAttack;
  console.log(enemyName + " health is now " + enemyHealth);
  if(enemyHealth <= 0){
      window.alert(enemyName + " has died");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.")
  }
  playerHealth = playerHealth - enemyAttack;
  console.log( playerName + " health is now " + playerHealth)
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    } 
  }
  else {
    window.alert("You need to choose a valid option. Try again!");
  }

};

fight();