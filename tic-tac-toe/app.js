const boxes=document.querySelectorAll(".box");
const reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgconst=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;

const winarr=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]];

const resetgame=()=>{
    turnO=true
    enableBoxes();
    msgconst.classList.add("hide")
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let showWinner=(winner)=>{
    msg.innerText=`congratulation the winner is ${winner}`
    msgconst.classList.remove("hide")
    disableBoxes();
}

const checkWinner=()=>{
    for(let ind of winarr){
        let pos1=boxes[ind[0]].innerText
        let pos2=boxes[ind[1]].innerText
        let pos3=boxes[ind[2]].innerText
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1)
                showWinner(pos1);
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
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

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame)