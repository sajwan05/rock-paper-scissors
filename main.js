// console.log(`Rock Paper Scissors Shoot! 
//     The game will go on for 5 rounds whoever have maximum  points after 5 rounds wins.
//     You get 1 point for winning round.
//     If you lose computer get 1 point,
//     For Tie you get 1 point each:
//     Let's Play: `);

let humanScore = 0;
let computerScore = 0;
let humanChoice;
const result = document.querySelector(".result");
const buttons = document.querySelector(".buttons");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const human = document.querySelector(".human .who");
const bot = document.querySelector(".computer .who");

function getComputerChoice () {
    let computerChoice = Math.random();

    if (computerChoice < 0.34) {
        return `scissors`;
    }else if (computerChoice < 0.67) {
        return `rock`;
    }else {
        return `paper`;
    }
    
}


buttons.addEventListener("click", (event) => {
    let target = event.target;
    humanChoice = target.id;
    botChoice = getComputerChoice();

    playRound(humanChoice, botChoice);
});



function playRound (humanChoice, computerChoice){
    
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        return `This round got Tied! You both chose player: ${humanChoice} and Computer: ${computerChoice}.
        
        Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
            || (humanChoice === 'paper' && computerChoice === 'rock') 
            || (humanChoice === 'scissors' && computerChoice === 'paper')){
                
                humanScore++;
                return `You won this round! You: ${humanChoice} beats Computer: ${computerChoice}.
                
                Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }else {
                computerScore++;

                return `You lose this round! Computer: ${computerChoice} beats You: ${humanChoice}.
                
                Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }
   
} 



// function playGame () {

//     for (i = 1; i <= 5; i++){

//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(humanSelection, computerSelection));
//     }

//     if(humanScore > computerScore){

//         console.log(`You won the game!Let's goo!🎉🎉
            
//             Final Score: You: ${humanScore} --- Bot: ${computerScore}`);

//     }else if(humanScore === computerScore) {

//         console.log(`Game is Tied! Woahh soo close!
            
//             Final Score: You: ${humanScore} --- Bot: ${computerScore}`);

//     }else {

//         console.log(`You lose! the game! Sad!!! 😭😭
            
//             Final Score: You: ${humanScore} --- Bot: ${computerScore}`);
//     }


//     console.log(`Thanks for playing!!`);


// }

// playGame();



