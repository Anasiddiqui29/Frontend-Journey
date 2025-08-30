let UserScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compS = document.querySelector("#comp-score");
const userS = document.querySelector("#user-score");
const compMsg = document.querySelector("#comp-msg");
const userMsg = document.querySelector("#user-msg");

const genCompChoice = () => {
    let options = ["rock" , "paper" , "scissor"];
    let idx = Math.floor(Math.random() * 3); //generating 0 till 2 inclusive    
    return options[idx];

}

const showWinner = (userWin , UserChoice , compChoice) => {
    if(userWin)
    {
        console.log("User won");
        msg.innerText = "You won";
        UserScore++ ;
        userS.innerText = UserScore;
        compS.innerText = CompScore;
        compMsg.innerText = "Computer : " + compChoice;
        userMsg.innerText = "You : " + UserChoice; 
    }
    else
    {
        console.log("Comp win");
        msg.innerText = "Computer won"
        CompScore++;
        userS.innerText = UserScore;
        compS.innerText = CompScore;
        compMsg.innerText = "Computer : " + compChoice;
        userMsg.innerText = "You : " + UserChoice;
    }


}

const playGame = (UserChoice) => {
    console.log("User choice = " , UserChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp choice = " , compChoice);
    //conditions
    if(compChoice === UserChoice)
    {
        console.log("draw");
        msg.innerText = "Draw";
        compMsg.innerText = "Computer : " + compChoice;
        userMsg.innerText = "You : " + UserChoice;
    }
    else
    {
        let userWin = true ;
        if(UserChoice === "rock")
        {
            //comp choice = paper or scissor
            if(compChoice === "paper")
            {
                userWin = false;
            }
        }
        else if(UserChoice === "paper")
        {
            //comp choice = rock or scissor
            if(compChoice === "scissor")
            {
                userWin = false;
            }
        }
        else if(UserChoice === "scissor")
        {
            //comp choice = rock or paper
            if(compChoice === "rock")
            {
                userWin = false;
            }
        }

        showWinner(userWin , UserChoice , compChoice);
    }
  
}

choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
        const UserChoice = choice.getAttribute("id"); 
        playGame(UserChoice);
    });

});

