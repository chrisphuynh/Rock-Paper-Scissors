let playerScore = 0;
let computerScore = 0;
const resDis = document.querySelector('#resultDisplay');

document.getElementById("rock").addEventListener("click", function()    {
    let result = playRound("Rock", computerPlay());
    updateScore(result);

});
document.getElementById("scissor").addEventListener("click", function()    {
    let result = playRound("Scissor", computerPlay());
    updateScore(result);
});
document.getElementById("paper").addEventListener("click", function()    {
    let result = playRound("Paper", computerPlay());
    updateScore(result);
});

function updateScore(score)  {
    if (playerScore == 5 || computerScore == 5) {  //I think this can be replaced with a ternary operator (?)
        if (playerScore == 5)   {
            resDis.innerHTML = "Player is the winner!!"
            
        }

        else {
            resDis.innerHTML = "Computer is the winner!!"
            
        }
    }
    else    {
        resDis.innerHTML = score;
    }
}

function computerPlay() {
    let hand = ["Rock", "Paper", "Scissor"]
    let randomHand = hand[Math.floor(Math.random() * hand.length)];
    return(randomHand);
}

function playRound(playerSelection, computerSelection)  {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return("Computer wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissor") {
        playerScore++;
        return("Player wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        playerScore++;
        return("Player wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        computerScore++;
        return("Computer wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        playerScore++;
        return("Player wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        computerScore++;
        return("Computer wins! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
    else {
        return("It's a tie! The score is: Computer " + computerScore + " || Player " + playerScore);
    }
}



/**
    function play() {
    let playerSelect = prompt("Please enter Rock, Paper, or Scissors", computerPlay());
    alert(playRound(playerSelect, computerPlay()));

    if (confirm("Would you like to play again?")) {
        play();
    }
    else {
        return;
    }
}
**/




        