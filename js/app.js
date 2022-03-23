const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll(`button`);

let userChoice;
let computerChoice;
let result;


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
        
        userChoice = e.target.id; 
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoie()
        getResult();

}));

function generateComputerChoie(){
    const randomNum = Math.floor(Math.random()* possibleChoices.length);
    
    if (randomNum === 1){
        computerChoice = `rock`;
    }
    if (randomNum === 2){
        computerChoice = `scissors`;
    }
    if (randomNum === 3){
        computerChoice = `paper`;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult(){
    if (computerChoice === userChoice){
        result = `It's a draw!`
    }
    
    if (computerChoice === `rock` && userChoice === "paper"){
        result = `You win!`
    }

    if (computerChoice === `rock` && userChoice === "scissors"){
        result = `You lose!`
    }

    if (computerChoice === `paper` && userChoice === "paper"){
        result = `It's a draw!`
    }

    if (computerChoice === `paper` && userChoice === "scissors"){
        result = `You win!`
    }

    if (computerChoice === `paper` && userChoice === "rock"){
        result = `You lose!`
    }

    if (computerChoice === `scissors` && userChoice === "scissors"){
        result = `It's a draw!`
    }

    if (computerChoice === `scissors` && userChoice === "rock"){
        result = `You win!`
    }

    if (computerChoice === `scissors` && userChoice === "paper"){
        result = `You lose!`
    }   
    resultDisplay.innerHTML = result;
};