const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1//
    console.log(random)

    if(random == 1){
        computerChoice = 'rock';
    }
    
    if(random == 2){
        computerChoice = 'paper';
    }
    
    if(random == 3){
        computerChoice = 'scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice == userChoice){
        result = 'draw';
    }    
    if(computerChoice == 'rock' && userChoice == 'scissors'){
        result = 'rock crush scissors, you lose';
    }
    if(computerChoice == 'rock' && userChoice == 'paper'){
        result = 'paper covers rock, you win';
    }
    if(computerChoice == 'paper' && userChoice == 'scissors'){
        result = 'scissors cut paper, you win';
    }
    if(computerChoice == 'paper' && userChoice == 'rock'){
        result = 'paper covers rock, you lose';
    }
    if(computerChoice == 'scissors' && userChoice == 'paper'){
        result = 'scissors cut paper, you lose';
    }
    if(computerChoice == 'scissors' && userChoice == 'rock'){
        result = 'rock crush scissors, you win';
    }
    resultDisplay.innerHTML = result
}