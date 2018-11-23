let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const ko_div = document.getElementById("r");
const papir_div = document.getElementById("p");
const ollo_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Kő";
    if (letter === "p") return "Papír";
    return "Olló";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "Te".fontsize(3).sub();
    const smallCompWord = "Gép".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} erősebb, mint a(z) ${convertToWord(computerChoice)}${smallCompWord}. NYERTÉL!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "Te".fontsize(3).sub();
    const smallCompWord = "Gép".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice); 
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gyengébb, mint a(z) ${convertToWord(computerChoice)}${smallCompWord}. VESZTETTÉL!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "Te".fontsize(3).sub();
    const smallCompWord = "Gép".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} egál ${convertToWord(computerChoice)}${smallCompWord}. DÖNTETLEN!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }    
}

function main() {
    ko_div.addEventListener('click', () => game ("r"));
    papir_div.addEventListener('click', () => game ("p"));
    ollo_div.addEventListener('click', () => game ("s"));
}

main();
