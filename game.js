let userScore=0;
let botScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector(".message");

let displayUser=document.querySelector("#user");
let displayBot=document.querySelector("#bot");

const genBotChoice=()=>{
    const rand=Math.floor(Math.random()*3);
    if(rand==0){
        return "rock";
    }
    else if(rand==1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

let msg="This is a message for the user";
let userWin=10;

const decide=(userWin)=>{
    if(userWin===1){
        message.style.backgroundColor="green";
    }
    else if(userWin===0){
        message.style.backgroundColor="red";
    }
    else if(userWin===2){
        message.style.backgroundColor="rgb(14, 14, 90)";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const botChoice=genBotChoice();
    console.log("bot choice=",botChoice);
    if(userChoice==botChoice){
        msg="It was a draw";
        userWin=2;

    }
    else if(userChoice=="rock"){
        if(botChoice=="paper"){
            botScore++;
            userWin=0;
            msg="You Lose.Paper Covers Rock!";
        }
        else if(botChoice=="scissor"){
            userScore++;
            userWin=1;
            msg="You Win.Rock Crushes Scissors!";
        }
    }
    else if(userChoice=="paper"){
        if(botChoice=="rock"){
            userScore++;
            userWin=1;
            msg="You Win.Paper Covers Rock!";
        }
        else if(botChoice=="scissor"){
            botScore++;
            userWin=0;
            msg="You Lose.Scissor cuts Paper!";
        }
    }
    else{
        if(botChoice=="rock"){
            botScore++;
            userWin=1;
            msg="You Win.Rock Crushes Scissors!";
        }
        else if(botChoice=="paper"){
            userScore++;
            userWin=0;
            msg="You Lose.Scissor cuts Paper!";
        }
    }
    decide(userWin);
    message.innerText=msg;
    displayUser.innerText=userScore;
    displayBot.innerText=botScore;

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

