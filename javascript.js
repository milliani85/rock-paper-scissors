let playerSelection;
let computerSelection;

let playerScore;
let computerScore;

let buttons = document.querySelectorAll('.buttons');
buttons.forEach((button => {
    button.addEventListener ('click', () => {
        playerSelection = button.innerHTML;
        playRound();
    })

}))


//Function that asks computer for a random selection.

function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}



//Function that plays the game.

function playRound() {
    computerSelection = computerPlay();
    if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
      const container = document.querySelector('#result');
        container.textContent = 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You lose! Paper beats Rock!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent = 'You draw! Rock and Rock is a tie!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent = 'You win! Paper beats Rock!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        const container = document.querySelector('#result');
          container.textContent = 'You lose! Scissors beats Paper!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You draw! Paper and Paper is a tie';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You win! Scissors beats Paper!';   
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent ='You lose! Rock beats Scissors!';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        const container = document.querySelector('#result');
          container.textContent ='You draw! Scissors and Paper is a tie!';
    } 
}    

//Plays 5 rounds of Rock, Paper, Scissors.
       
function game() {
    playerScore = 0;
    computerScore = 0;
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


    

    //Gives the final result

   /* if (playerScore > computerScore) {
        console.log('Well done, you win!');
    } else if (playerScore < computerScore) {
        console.log('Unlucky, you lose!');
    } else {
        console.log('This match is a draw!');
    }
*/