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

    if (humanChoice === "rock"){
        human.textContent = `${humanChoice}`;
        bot.textContent = botChoice;
    }else if (humanChoice === 'scissors'){
        human.textContent = humanChoice;
        bot.textContent = botChoice;
    }else {
        human.textContent = humanChoice;
        bot.textContent = botChoice;
    }
});



function playRound (humanChoice, computerChoice){
    
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        result.textContent =`This round got Tied!
        
        Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }else if ((humanChoice === 'rock' && computerChoice === 'scissors') 
            || (humanChoice === 'paper' && computerChoice === 'rock') 
            || (humanChoice === 'scissors' && computerChoice === 'paper')){
                
                humanScore++;
                result.textContent = `You won this round! 
                
                Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }else {
                computerScore++;

                result.textContent = `You lose this round!

                Score: Player: ${humanScore} --- Computer: ${computerScore}`;
    }

    if (humanScore === 5) {
        result.textContent = "";
        result.style.color = "darkgreen";
        result.textContent = `Hurrah!! You won this game!
        
        FinalScore: You: ${humanScore} ---- Bot: ${computerScore}\n
        Game Over!!\n
        
        Reload to restart!`;
        humanScore = 0;
        computerScore = 0;
    }else if(computerScore === 5) {
        result.textContent = "";
        result.style.color = "red";
        result.textContent = `Sad! You lost this game!
        
        Final Score: You: ${humanScore} ---- Bot: ${computerScore}\n
        
        Game Oer!!!\n
        
        Reload to restart!`;
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



