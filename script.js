


// depending what value it is it will convert to rock, paper or scissors
// depending on how your value compares to the computer value, give 1 of 3 outcomes

// computer will randomise a number between 1,2,3
function getComputerChoice() {
    let rand = Math.random() * 3 
    if (rand < 1) {
        return 'scissors'
    }

    else if (rand < 2) {
        return 'rock'
    }

    else {
        return 'paper'
    }
}

// request input from user on rock, paper or scissors
function getHumanChoice() {
    return prompt(`What do you choose?`)
}

// run both functions
let computer = getComputerChoice()
let human = getHumanChoice()

// init two variables for global score
let humanScore = 0
let cumptuerScore = 0

function playRound(h, c ) {
    let humanChoice = h.toLowerCase()
    let computerChoice = c

    if (humanChoice === computerChoice) {
        console.log('you both tied!')
    }

    else if (computerChoice === 'rock') {
        if (humanChoice === 'paper') {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you win!`)
        }
        else {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`)
        }
    }

    else if (computerChoice === 'scissors') {
        if (humanChoice === 'rock') {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you win!`)
        }
        else {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`)
        }
    }
    else if (computerChoice === 'paper') {
        if (humanChoice === 'scissors') {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you win!`)
        }
        else {
            console.log(`computer chose ${computerChoice} and you chose ${humanChoice}, you lose!`)
        }
    }
}

playRound(human, computer)