const randomNumber = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(g) {
    if (isNaN(g)){
        alert('Please enter a valid Number');
    } else if (g < 1) {
        alert('Please enter a Number greater than 1');
    } else if (g > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(g);
        if (numGuess === 11){
            displayGuess(g);
            displayMessage(`Game over, random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(g)
            checkGuess(g);
        }
    }
}

function checkGuess (g) {
    if(g === randomNumber){
        displayMessage(`you guessed it right`)
        endGame();
    } else if (g < randomNumber){
        displayMessage(`number is too low`);
    } else if (g > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess (g) {
    userInput.value = '';
    guessSlot.innerHTML += `${g} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage (msg) {
    LowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame () {
    userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame () {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener ('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild('p');
  
      playGame = true;
    });
}