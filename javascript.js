//Prompts player for their selection, then converts the first letter to uppercase and the rest lowercase.

function playerPlay() {
    let playerSelection = prompt('Player, choose your weapon');
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
                  playerSelection.slice(1).toLowerCase();
    return playerSelection;              
}     


//Function that asks computer for a random selection.(will need to bring computerSelection outside scope)

function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return computerSelection;
}


//Function that plays the game.

function playRound() {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
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

//Plays 5 rounds of Rock, Paper, Scissors.
       
function game() {
    playerScore = 0;
    computerScore = 0;
         for(let i = 0; i < 5; i++) {
            let roundResult = playRound();
            console.log(roundResult);
         if (roundResult === 'You win! Rock beats Scissors!' ||
            roundResult === 'You win! Paper beats Rock!' ||
            roundResult === 'You win! Scissors beats Paper!') {
                playerScore += 1;
                console.log('Player Score ' + playerScore,  ' - ', 'Computer Score ' + computerScore);
        } else if (roundResult === 'You lose! Paper beats Rock!' ||
                   roundResult === 'You lose! Scissors beats Paper!' ||
                   roundResult === 'You lose! Rock beats Scissors!') {
                       computerScore += 1;
                       console.log('Player Score ' + playerScore, ' - ', 'Computer Score ' + computerScore);
        } else { console.log('Player Score ' + playerScore, ' - ', 'Computer Score ' + computerScore);
        } 
    }
}

    game();

    //Gives the final result

    if (playerScore > computerScore) {
        console.log('Well done, you win!');
    } else if (playerScore < computerScore) {
        console.log('Unlucky, you lose!');
    } else {
        console.log('This match is a draw!');
    }
