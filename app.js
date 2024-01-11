let yourScore = 0;
let botScore = 0;

const rps = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uscore = document.querySelector("#yourScore");
const bscore = document.querySelector("#botScore");


const genCompchoice = () =>{
    const options = ["rock" , "paper", "scissor"];
    const rndId = Math.floor(Math.random() * 3);
    return options[rndId];
};

const showWinner = (youWin ,yourChoice ,botChoice)=>{
    if(youWin){
        yourScore ++;
        uscore.innerText = yourScore;
        msg.innerText = `You Win! Your ${yourChoice} beats ${botChoice}`
        msg.style.backgroundColor = "green";

        
    }else{
        botScore ++;
        bscore.innerText = botScore;
       msg.innerText =  `You Loose!  ${botChoice} beats Your ${yourChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame= (yourChoice) =>{
    const botChoice = genCompchoice();
    if (yourChoice === botChoice){
        msg.innerText = "It's Draw! Play Again";
        msg.style.backgroundColor = "#081b31";
    }else{
        let youWin = true;
        if (yourChoice === "rock"){
            youWin = botChoice === "paper" ? false : true;
        }else if(yourChoice === "paper"){
            youWin = botChoice === "scissor" ? false : true;
        }else if(yourChoice === "scissor"){
            youWin = botChoice === "rock" ? false : true;
        }
        showWinner(youWin , yourChoice , botChoice);
    }
}

rps.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const yourChoice = choice.getAttribute("id");
        playGame(yourChoice);
       
    });
});