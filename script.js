let boxex = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// players turns 
let turnO= true;

//array to store the winning patterns in 2d format
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],                      
    [2,4,6]
];

//for finding player turn and returing value 
boxex.forEach ((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText="O";
            turnO=false;
        }else{
             box.innerText="X";
            turnO=true;
        }   
        box.disabled=true;

        checkWinner(); 
    });
});


//after one winner, disable all button function
const disableBtn = () => {
    for(let box of boxex){
        box.disabled=true;
    }
}


//Enable all button function
const enableBtn = () => {
    for(let box of boxex){
        box.disabled=false;
        box.innerText="";
    }
}

//Showing the winner 
const showWinner = (winner) => {
    msg.innerText = `Congratulation..!! \n Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner= () => {
        for(let pattern of winPatterns){
            let pos1Val= boxex[pattern[0]].innerText;
            let pos2Val= boxex[pattern[1]].innerText;
            let pos3Val= boxex[pattern[2]].innerText;

            //checking that the button is empty or not
            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val=== pos3Val){
                    console.log("Winner", pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}



//reseting entire Game 
const resetGame = () => {
    turnO=true;
    enableBtn();
    msgContainer.classList.add("hide");
}

resetbtn.addEventListener("click", resetGame);