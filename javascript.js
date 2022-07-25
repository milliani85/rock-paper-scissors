let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

let buttons = document.querySelectorAll('.buttons');
buttons.forEach((button => {
    button.addEventListener ('click', () => {
        playerSelection = button.innerText;
        playRound();
    })

}))

//Function that asks computer for a random selection.

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
    if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
      const container = document.querySelector('#result');
        container.textContent = 'You win! Rock beats Scissors!';
          playerScore += 1;
            const pScore = document.querySelector('#player-score');
              pScore.innerHTML = playerScore;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You lose! Paper beats Rock!';
            computerScore += 1;
              const cScore = document.querySelector('#computer-score');
                cScore.innerHTML = computerScore;
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent = 'You draw! Rock and Rock is a tie!';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent = 'You win! Paper beats Rock!';
            playerScore += 1;
              const pScore = document.querySelector('#player-score');
                pScore.innerHTML = playerScore;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        const container = document.querySelector('#result');
          container.textContent = 'You lose! Scissors beats Paper!';
            computerScore += 1;
              const cScore = document.querySelector('#computer-score');
                cScore.innerHTML = computerScore;
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You draw! Paper and Paper is a tie';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        const container = document.querySelector('#result');
          container.textContent = 'You win! Scissors beats Paper!'; 
            playerScore += 1;
              const pScore = document.querySelector('#player-score');
                pScore.innerHTML = playerScore;   
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        const container = document.querySelector('#result');
          container.textContent ='You lose! Rock beats Scissors!';
            computerScore += 1;
              const cScore = document.querySelector('#computer-score');
                cScore.innerHTML = computerScore;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        const container = document.querySelector('#result');
          container.textContent ='You draw! Scissors and Scissors is a tie!';
    } 
    if (playerScore > computerScore && playerScore === 5) {
        const container = document.querySelector('#result');
          container.textContent ='Well done! You are the champ!';
    } else if (playerScore < computerScore && computerScore === 5) {
        const container = document.querySelector('#result');
          container.textContent ='Oh no you lose! Better luck next time!';
    } 
    
    //Updates score board
    
    if (playerScore === 5 || computerScore === 5) {
          const pScore = document.querySelector('#player-score');
            pScore.innerHTML = playerScore;
          const cScore = document.querySelector('#computer-score');
            cScore.innerHTML = computerScore;
            disableButtons();
    }    


    //Disables buttons once game has finished

   function disableButtons() {
     buttons.forEach(button => {
      button.disabled = true
  })
}}



  




  

