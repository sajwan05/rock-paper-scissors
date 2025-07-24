// console.log("hey");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    // console.log(computerChoice);
    if (computerChoice === 1) {
        let computeChoice = "rock";
        return computeChoice;
    } else if ( computerChoice === 2){
        let computeChoice = "paper";
        return computeChoice;
    }else {
        let computeChoice = "scissors";
        return computeChoice;
    }
    
}



function getHumanChoice() {
    let humanChoice = prompt("Rock Paper scissors shoot! ").toLowerCase();
    // console.log(humanChoice);
    return humanChoice;
}



function playGame () {
    humanScore = 0;
    computerScore = 0;
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();

    function playRound (humanChoice, computerChoice){
    // Computer wins if computer choose paper human choose rock

    if (computerChoice === "paper" && humanChoice === "rock"){
        console.log(`You lose! Paper beats Rock`);

        computerScore += 1;

        return `You lose! ${computerChoice} beats ${humanChoice}`;

    }else if (computerChoice === "rock" && humanChoice === "scissors"){

        console.log("You lose! Rock beat Scissors!")

        computerScore += 1;

        return `You lose! ${computerChoice} beats ${humanChoice}`;

    } else if (computerChoice === "scissors" && humanChoice === "paper") {

        console.log("You lose! Scissors beats Paper")
        computerScore += 1;

        return `You lose! ${computerChoice} beats ${humanChoice}`;

    } else if ( computerChoice === humanChoice){

        console.log(`It's a Tie both of you chose ${computerChoice} and ${humanChoice}`);

        computerScore += 1;

        humanScore += 1;

        return `It's a Tie! Both chose ${computerChoice}`;

    }else {

        console.log(`You wins! ${humanChoice} beats ${computerChoice} `);

        humanScore += 1;

        return `You win! ${humanChoice} beats ${computerChoice}`;
    }
   
} 

    for (i =0; i < 5; i++){

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){

        console.log(`You won the game ${humanScore} to ${computerScore}`);

    }else if(humanScore === computerScore) {

        console.log(`Game is tied at score of ${computerScore} to ${humanScore}`);

    }else {
        
        console.log(`You lose! the game ${humanScore} to ${computerScore}`);
    }


}

playGame();



// playRound(humanSelection, computerSelection);

