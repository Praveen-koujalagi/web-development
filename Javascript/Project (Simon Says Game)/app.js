let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ['yellow','red','purple','green'];

document.addEventListener("keypress", function(event) {
    if(started == false) {
        console.log("Game started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {  
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250); 

}

function userFlash(btn) {  
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // choose a random button
    let randIdx = Math.floor(Math.random() * btns.length);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    gameFlash(randbtn);
}

function checkAnswer(idx) {

    if (userseq[idx] === gameseq[idx]) {
        if( userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over!, <b>Your score ${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAnswer(userseq.length - 1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;
}
