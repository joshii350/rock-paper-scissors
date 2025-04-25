// init two variables for global score
let humanScore = 0;
let computerScore = 0;

// computer will randomise a number between 1,2,3
function getComputerChoice() {
    let rand = Math.random() * 3;
    if (rand < 1) {
        return 'scissors';
    }

    else if (rand < 2) {
        return 'rock';
    }

    else {
        return 'paper';
    }
}

// request input from user on rock, paper or scissors
function getHumanChoice() {
    return prompt(`What do you choose?`)
}

// function to clear game text
function clear() {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

// function for scoreboard. win condition is 5
function scoreboard() {
    if (humanScore < 5 && computerScore < 5) {
        return `computer: ${computerScore}, human ${humanScore}`
    }
    else if (humanScore === 5) {
        humanScore = 0
        computerScore = 0
        clear()
        return 'You win!!!'
    }
    else {
        humanScore = 0
        computerScore = 0
        clear()
        return 'Computer wins >:('
    }
}

// function to play round
function playRound(h, c ) {
    let humanChoice = h.toLowerCase();
    let computerChoice = c;

    if (humanChoice === computerChoice) {
        return 'you both tied!';
    }

    else if (computerChoice === 'rock') {
        if (humanChoice === 'paper') {
            humanScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you win!`;
            
        }
        else {
            computerScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`;
            
        }
    }

    else if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            humanScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you win!`;
            
        }
        else {
            computerScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`;
            
        }
    }
    else if (computerChoice === 'paper') {
        if (humanChoice === 'scissors') {
            humanScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you win!`;
            
        }
        else {
            computerScore++;
            return `computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`;
            
        }
    }
}

// creating ui to play the game - variables
const b1 = document.createElement('button');
const b2 = document.createElement('button');
const b3 = document.createElement('button');
const div = document.createElement('div')
const sb = document.createElement('h3')
b1.textContent = 'rock';
b2.textContent = 'paper';
b3.textContent = 'scissors';
sb.textContent = `computer: ${computerScore}, human ${humanScore}`

// adding the buttons into the html
body = document.querySelector('body');
body.appendChild(sb)
body.appendChild(b1)
body.appendChild(b2)
body.appendChild(b3)
body.appendChild(div)

// assigning functions to each button
const buttons = [b1, b2, b3]
buttons.forEach((b) => {
    b.addEventListener('click',() =>{
        const text = document.createElement('p');
        text.textContent = playRound(b.textContent, getComputerChoice())
        sb.textContent = scoreboard()
        div.appendChild(text)
    })
});