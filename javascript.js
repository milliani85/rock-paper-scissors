//Prompts player for their selection, then converts the first letter to uppercase and the rest lowercase.

let playerSelection = prompt('Player, choose your weapon');
playerSelection = playerSelection.charAt(0).toUpperCase() + 
                  playerSelection.slice(1).toLowerCase();
                
//Function that asks computer for a random selection.(will need to bring computerSelection outside scope)

function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

//Stores the result of compterPlay inside of computerSelection

let computerSelection = computerPlay();

//Function that plays the game.

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'You draw! Rock and Rock is a tie';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'You draw! Paper and Paper is a tie';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper!';   
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'You Draw! Scissors and Paper is a tie!';
    } 
}    

//Stores the result of the game in the variable result.

let roundResult = playRound(playerSelection, computerSelection);
console.log(roundResult);

//Function thst groups results into win, lose or draw.

function decision(roundResult) {
    if (roundResult === 'You win! Rock beats Scissors!' 
        || roundResult === 'You win! Paper beats Rock!' 
        || roundResult === 'You win! Scissors beats Paper!') {
        return 'Win'; 
    } else if (roundResult === 'You lose! Paper beats Rock!' 
        || roundResult === 'You lose! Scissors beats Paper!' 
        || roundResult === 'You lose! Rock beats Scissors!') {
        return 'Lose';    
    } else if (roundResult === 'You draw! Rock and Rock is a tie'
        || roundResult === 'You draw! Paper and Paper is a tie'
        || roundResult === 'You Draw! Scissors and Paper is a tie!') {
        return 'Draw';
        }
          
}

let gameDecision = decision(roundResult);

//Use a for loop to repeat the game


function game() {
    for(let i = 0; i < 5; i++) {
        if (gameDecision === 'Win')
    }
}
