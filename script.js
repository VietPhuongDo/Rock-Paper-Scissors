function getHumanChoice(){
    let humanChoice = prompt("What is your choice?","Rock")
    humanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
    console.log("Human choose " + humanChoice)
    return humanChoice
}

function getComputerChoice(){
    const computerChoiceNumber = Math.floor(Math.random()*3);
    let computerChoice;
    if (computerChoiceNumber === 0){
        computerChoice = "Rock"
    }
    else if(computerChoiceNumber === 1){
       computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
    console.log("Computer choose "+ computerChoice);
    return computerChoice

}


let computerPoint;

let humanPoint;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Draw, not plus point for player and computer")
    }
    else{
        if(humanChoice === "Rock" && computerChoice==="Scissors"){
            console.log("You win!Rock beats Scissors")
            humanPoint +=1
        }
        if(humanChoice === "Paper" && computerChoice==="Rock"){
            console.log("You win!Paper beats Rock")
            humanPoint +=1
        }
        if(humanChoice === "Scissors" && computerChoice=== "Paper"){
            console.log("You win!Scissors beats Paper")
            humanPoint +=1
        }

        if(humanChoice === "Rock" && computerChoice==="Paper"){
            console.log("You lose!Paper beats Rock")
            computerPoint+=1
        }
        if(humanChoice === "Paper"  && computerChoice==="Scissors"){
            console.log("You lose!Scissors beats Paper")
            computerPoint+=1
        }
        if(humanChoice === "Scissors" && computerChoice==="Rock"){
            console.log("You win!Rock beats Scissors")
            computerPoint+=1
        }
    }
}

function playGame(){
    for(i=0;i<5;i++){

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection)
        console.log("Human point is: "+humanPoint);
        console.log("Computer point is: "+computerPoint);
    }
}

computerPoint = 0;
humanPoint = 0;
playGame()