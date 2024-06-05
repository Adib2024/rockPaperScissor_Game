let computer_score = 0;
let user_score = 0;

let choices_object = {
    rock:{
        rock: "draw",
        scissors: "win",
        paper: "lose",
    },
    scissor:{
        rock: "lose",
        scissors: "draw",
        paper: "win",
    },
    paper:{
        rock: "win",
        scissors: "lose",
        paper: "draw",
    },
};

function checkResult (input) {
    let choices = ["rock", "scissors", "paper"];
    let index = Math.floor(Math.random() * choices.lenth);
    let computer_choice = choices[index];
}