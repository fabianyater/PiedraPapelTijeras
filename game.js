let playerscore = document.getElementById("ps");
playerscore.innerHTML = "0";
let computerscore = document.getElementById("cs");
computerscore.innerHTML = "0";
let mensaje = document.getElementById("msg");
mensaje.innerHTML = "Good luck!";
let winner = document.getElementById("winner");
let hideicons = document.getElementById("imgsH");
let playerPoints = 0, computerPoints = 0;

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const reset = document.getElementById("restart");
let op = ['rock', 'paper', 'scissors'];

function computerPlay() {
    aleatorio = Math.floor(Math.random() * op.length);
    let computerchoice;
    switch (aleatorio) {
        case 0:
            computerchoice = document.getElementById("ccdefault");
            computerchoice.src = "imgs/rock.png";
            return op[0];
        case 1:
            computerchoice = document.getElementById("ccdefault");
            computerchoice.src = "imgs/paper.png";
            return op[1];
        case 2:
            computerchoice = document.getElementById("ccdefault");
            computerchoice.src = "imgs/scissors.png";
            return op[2];
    }
}

rock.addEventListener("click", function (e) {
    playerSelection="rock";
    ChangeToRock();
    game();
    
});

paper.addEventListener("click", function (e) {
    playerSelection="paper";
    ChangeToPaper();
    game();
});

scissors.addEventListener("click", function (e) {
    playerSelection="scissors";
    ChangeToScissors();
    game();
});

reset.addEventListener("click", function (e) {
    restartGame();
})

function ChangeToRock() {
    const playerchoice = document.getElementById("hcdefault");
    playerchoice.src = "imgs/rock.png";
}

function ChangeToPaper() {
    const playerchoice = document.getElementById("hcdefault");
    playerchoice.src = "imgs/paper.png";
}

function ChangeToScissors() {
    const playerchoice = document.getElementById("hcdefault");
    playerchoice.src = "imgs/scissors.png";
}

function requestName(){
    let txt = prompt("Player Name:","Player 1");
    if(txt==null || txt==" "){
        document.getElementById("humano").innerHTML ="Player1";
    }else {
        document.getElementById("humano").innerHTML =txt;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        mensaje.innerHTML = "It's a tie!";
        console.log('It\'s a tie');
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
        mensaje.innerHTML = 'Computer Win! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase() + '. You Lose';

    }
    playerscore.innerHTML = playerPoints;
    computerscore.innerHTML = computerPoints;

    if (computerPoints == 5 || playerPoints == 5) {
        if (playerPoints == 5) {
            hideicons.style.display = "none";
            winner.innerHTML = 'Congratulations! You are the final winner.';
        } else if (computerPoints == 5) {
            hideicons.style.display = "none";
            winner.innerHTML = 'Sorry, you lost :c! Computer is the final winner.';
        }
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
}

requestName();
