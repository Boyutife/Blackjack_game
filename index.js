let firstCard = 7;
let SecondCard = 8;
let cards = [firstCard, SecondCard]
let sum = firstCard + SecondCard
// Introduce a variable that keeps the state of the game
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
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

function newCard() {
  let card = 2;
  sum += card
  cards.push(card)
  renderGame()
}

