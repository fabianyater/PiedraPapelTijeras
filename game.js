let playerscore = document.getElementById("ps");
playerscore.innerHTML = "0";
let computerscore = document.getElementById("cs");
computerscore.innerHTML = "0";
let mensaje = document.getElementById("msg");
mensaje.innerHTML = "Good luck!";
let winner = document.getElementById("winner");
let hideicons = document.getElementById("imgsH");
let playerPoints = 0, computerPoints = 0;
let computerchoice = document.getElementById("ccdefault");
let playerchoice = document.getElementById("hcdefault");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const reset = document.getElementById("restart");
let op = ['rock', 'paper', 'scissors'];

function computerPlay() {
    aleatorio = Math.floor(Math.random() * op.length);
    switch (aleatorio) {
        case 0:
            computerchoice.src = "imgs/rock.png";
            return op[0];
        case 1:
            computerchoice.src = "imgs/paper.png";
            return op[1];
        case 2:
            computerchoice.src = "imgs/scissors.png";
            return op[2];
    }
}

rock.addEventListener("click", function (e) {
    playerSelection="rock";
    playerchoice.src = "imgs/rock.png";
    game();
    
});

paper.addEventListener("click", function (e) {
    playerSelection="paper";
    playerchoice.src = "imgs/paper.png";
    game();
});

scissors.addEventListener("click", function (e) {
    playerSelection="scissors";
    playerchoice.src = "imgs/scissors.png";
    game();
});

reset.addEventListener("click", function (e) {
    restartGame();
})

function requestName(){
    let name = prompt("Player Name:","Player 1");
    if(name==null || name==" "){
        document.getElementById("humano").innerHTML ="Player1";
    }else {
        document.getElementById("humano").innerHTML =name;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        mensaje.innerHTML = "It's a tie!";
    } else if ((playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'PlayerWin';
    } else {
        return 'ComputerWin';
    }
}

function game() {
    computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);

    if (result === 'PlayerWin') {
        playerPoints++;
        mensaje.innerHTML = 'You Win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase() + '. Computer Lose';
    } else if (result === 'ComputerWin') {
        computerPoints++;
        mensaje.innerHTML = 'Computer Wins! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase() + '. You Lose';

    }
    playerscore.innerHTML = playerPoints;
    computerscore.innerHTML = computerPoints;

        if (playerPoints == 5) {
            hideicons.style.display = "none";
            winner.innerHTML = 'Yay! You win c:';
        } else if (computerPoints == 5) {
            hideicons.style.display = "none";
            winner.innerHTML = 'Sorry, you lost :c!';
        }
}

function restartGame() {
    computerPoints = 0;
    playerPoints = 0;
    playerscore.innerHTML = "0";
    computerscore.innerHTML = "0";
    mensaje.innerHTML = "Good luck!";
    winner.innerHTML = "Winner";
    hideicons.style.display = "flex";
    hideicons.style.justifyContent = "center";
    playerchoice.src = "imgs/índice2.png";
    computerchoice.src="imgs/índice2.png";
}

requestName();
