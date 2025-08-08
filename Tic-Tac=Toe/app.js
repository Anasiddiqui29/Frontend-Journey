let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");
let msgbox = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector(".new");

// PlayerX , PlayerO
let turnO = true;
let turnX = true ; 
let count = 0 ;

// 2D array to store the winning pattern
let win_pattern = [
    [0 , 1 , 2], 
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
];

const enableBoxes = () => {
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = ""
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgbox.classList.add("hide") ; 
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO === true)
        {
            box.innerText = "O";
            turnO = false ;
            count++ ;
        }
        else
        {
            box.innerText = "X"
            turnO = true ;
            count++ ;
        }
        box.disabled = true ;
         
        // After each button click , check for the winner
        checkwinner() ; 
        console.log(count);
        
    }) ;
}) ;

const disableBox = () => {
    for(box of boxes)
    {
        box.disabled = true;
    }
};

showWinner = (winner) => {
    msg.innerText = `Winner : ${winner} 🎉` ;
    msgbox.classList.remove("hide");
    disableBox();
};

const showDraw = () => {
    msg.innerText = `Match Drawn⚔️` ;
    msgbox.classList.remove("hide");
    disableBox();
}

checkwinner = () => {
    let winnerfound = false;

    for(let pattern of win_pattern)
    {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != "")
        {
            if(posVal1 === posVal2 && posVal2 === posVal3)
            {
                showWinner(posVal1) ;
            }
        }
    }
    if(count === 9 && !winnerfound)
    {
        showDraw() ;
    }
};

rstbtn.addEventListener("click" , resetGame);
newbtn.addEventListener("click" , resetGame);