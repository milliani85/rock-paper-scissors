let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//Rock, paper, scissors buttons.

let buttons = document.querySelectorAll('.buttons');
buttons.forEach((button => {
    button.addEventListener ('click', () => {
        playerSelection = button.innerText;
        playRound();
    })

}))

//Asks computer for a random selection.

function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}


//Play again button.

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click',() => location.reload());


//Function that plays the game.

function playRound() {
    computerSelection = computerPlay();
      if((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
         (playerSelection === 'Paper' && computerSelection === 'Rock') ||
         (playerSelection === 'Scissors' && computerSelection === 'Paper'))
{   const container = document.querySelector('#result');
      container.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection;
        playerScore += 1;
          const pScore = document.querySelector('#player-score');
            pScore.innerHTML = playerScore;

    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
              (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
              (playerSelection === 'Scissors' && computerSelection === 'Rock'))
{   const container = document.querySelector('#result');
      container.textContent = 'You lose! ' + computerSelection + ' beats ' + playerSelection;
        computerScore += 1;
          const cScore = document.querySelector('#computer-score');
            cScore.innerHTML = computerScore;

    } else if ((playerSelection === 'Rock' && computerSelection === 'Rock') ||
               (playerSelection === 'Paper' && computerSelection === 'Paper') ||
               (playerSelection === 'Scissors' && computerSelection === 'Scissors'))
{   const container = document.querySelector('#result');
      container.textContent = 'You draw! ' + playerSelection +' and ' + computerSelection + ' is a tie!';
    
  }   
      //Gives the final result

    if (playerScore > computerScore && playerScore === 5) {
        const container = document.querySelector('#result');
          container.textContent ='Well done! You are the champ!';
    } else if (playerScore < computerScore && computerScore === 5) {
        const container = document.querySelector('#result');
          container.textContent ='Oh no you lose! Better luck next time!';
    } 
    

    //Updates score board
    
    const pScore = document.querySelector('#player-score');
      pScore.innerHTML = playerScore;
        const cScore = document.querySelector('#computer-score');
          cScore.innerHTML = computerScore;
    if (playerScore === 5 || computerScore === 5) {
      disableButtons();
    }    


    //Disables buttons once game has finished

   function disableButtons() {
     buttons.forEach(button => {
      button.disabled = true
  })
}}



  




  

