let firstCard = 7;
let SecondCard = 8;
let sum = firstCard + SecondCard
// Introduce a variable that keeps the state of the game
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + firstCard + " " + SecondCard
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true;
  } else {
    message = "You're out of the game!"
    isAlive = false;
  }
  messageEl.textContent = message;
}

