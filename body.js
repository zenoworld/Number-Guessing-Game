let randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const input = document.querySelector('#number')
const prevGuess = document.querySelector('.guess')
const leftGuess = document.querySelector('.guess-left')
const loworhi = document.querySelector('.last')

const startOver = document.querySelector('#result')

const p = document.createElement('p')
 
let previousGuess = []
let numberGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click' , function(e){
    e.preventDefault()
    const guess = parseInt(input.value);
    console.log(guess);
    validateGuess(guess)
    })
}
function validateGuess(guess){
if(isNaN(guess)){
    alert('Please Enter a Valid Number')
}
else if(guess < 1){
    alert('Please Enter a Number Greater than 1')
}
else if(guess > 100){
    alert('Please Enter a Number less than 100')
}else{
    previousGuess.push(guess)
    if(numberGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over . Random Number was ${randomNumber}`);
      endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess)
    }
}
} 


function checkGuess(guess){
if (guess === randomNumber) {
    displayMessage(`You Guessed it Right , Well Done`)
    endGame()
}
else if (guess > randomNumber) {
    displayMessage(`Number is too High`)
}
else if (guess < randomNumber) {
    displayMessage(`Number is too Low`)
}
} 


function displayGuess(guess){
input.value = ''
prevGuess.innerHTML += `${guess} , `
numberGuess++
leftGuess.innerHTML = `${11 - numberGuess}`
} 


function displayMessage(message){
loworhi.innerHTML = `<h2>${message}</h2>`
} 

function endGame(){
input.value = ''
input.setAttribute('disabled' , '')
p.classList.add('button')
p.innerHTML = `<h2 id ="newgame">Start A New Game</h2>`
startOver.appendChild(p)
playGame = false
newGame()
}


function newGame(){
    const newgame = document.querySelector('#newgame')
    newgame.addEventListener('click' , function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    previousGuess = []
    numberGuess = 1
    prevGuess.innerHTML = ''
    leftGuess.innerHTML = `${11 - numberGuess}`
    input.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
})

}
