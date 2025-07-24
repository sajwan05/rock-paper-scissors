console.log("hey");

function getComputerChoice () {
    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "Rock";
    } else if ( computerChoice === 2){
        return "Paper";
    }else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper scissors shoot! ").toLowerCase();
    console.log(humanChoice);
}

getHumanChoice()
console.log(getComputerChoice());