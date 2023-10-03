// Create a simple "Guess the Number" game where the computer generates a random number between 1-10, and the player has to guess it. Provide feedback on whether the guess is too high or too low.
function guessNumber() {
  let ranNum = Math.floor(Math.random() * 10) + 1;
  let attempts = 3;
  for (let i = 0; i < attempts; i++) {
    let guessInput = parseInt(prompt("Guess a number between 1-10"));

    if (!isNaN(guessInput) && guessInput >= 1 && guessInput <= 10) {
      if (guessInput === ranNum) {
        return alert(`Your guess is right!`);
      } else if (guessInput > ranNum) {
        alert(`Your guess is too high`);
      } else if (guessInput < ranNum) {
        alert(`Your guess is too low`);
      }
    } else {
      alert(`Enter a valid number between 1 and 10`);
    }
  }
  return `You've used all your attempts.`;
}

let result = guessNumber();
console.log(result);
