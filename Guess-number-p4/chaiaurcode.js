const  randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter Valid Number');
  } else if (guess > 100) {
    alert('please Enter Number less than 100');
  } else if (guess < 1) {
    alert('Please Enter Number Greater than 1');
  } else {
    preGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Gave Over ! Random Number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guess it right');
  } else if (guess < randomNumber) {
    displayMessage('You guess number is too short');
  } else if (guess > randomNumber) {
    displayMessage('you guess number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disable', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" >Click to Restart Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
