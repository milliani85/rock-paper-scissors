//Prompts player for their selection, then converts the first letter to uppercase and the rest lowercase.

let playerSelection = prompt('Player, choose your weapon');
playerSelection = playerSelection.charAt(0).toUpperCase() + 
                  playerSelection.slice(1).toLowerCase();
                
//Function that asks computer for a random selection.

function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'Rock' && computerSelection === 'Scissors');


}