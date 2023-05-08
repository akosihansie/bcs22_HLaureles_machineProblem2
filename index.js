const randomNumber = Math.floor(Math.random() * 100) + 1;

let numTries = 0;
let guess = 0;

while (guess !== randomNumber) {

  do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
  } while (isNaN(guess) || guess < 1 || guess > 100);
  
  if (guess < randomNumber) {
    alert("Too low! Guess again.");
  } else if (guess > randomNumber) {
    alert("Too high! Guess again.");
  } else {
    alert("Congratulations, you guessed the number in " + numTries + " tries!");
  }
  
  numTries++;
  
  if (numTries === 10) {
    alert("Sorry, you ran out of tries. The number was " + randomNumber + ".");
    break;
  }
}
