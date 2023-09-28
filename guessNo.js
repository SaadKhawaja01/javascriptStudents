// Create a simple "Guess the Number" game where the computer generates a random number between 1-10, and the player has to guess it. Provide feedback on whether the guess is too high or too low.
let guessInput = prompt("Guess a number between 1-10");

let ranNum = Math.floor(Math.random() * 10) + 1;

if (guessInput > 10 || guessInput < 1) {
  document.write(`Please enter number from 1 to 10`);
} else if (guessInput > ranNum) {
  document.write(
    `Random no is ${ranNum} and guess is ${guessInput} so it is too high`
  );
} else if (guessInput < ranNum) {
  document.write(
    `Random no is ${ranNum} and guess is ${guessInput} so it is too low`
  );
} else if (guessInput == ranNum) {
  document.write(`Random no is ${ranNum}  is equal to guess no ${guessInput}`);
}
