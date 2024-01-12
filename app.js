let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#userScore")
const compScorePara = document.querySelector("#compScore")

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const compChoice = genCompChoice()
    console.log("Computer choice = " + compChoice)

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp = paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // comp = scissor, rock
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // userchoice = rock paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You win")
        userScore++;
        userScorePara.innerText = userScore

        msg.innerText = `You Win🎉! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else {
        // console.log("You Loose")
        compScore++;
        compScorePara.innerText = compScore

        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3)
    return choices[randomIdx]

}

choices.forEach((val) => {
    val.addEventListener("click", () => {
        const userChoice = val.getAttribute("id")

        playGame(userChoice);

    })
})

const drawGame = () => {
    console.log("Game Draw")
    msg.innerText = "Game draw! Play again"
    msg.style.backgroundColor = "#09182A"
}