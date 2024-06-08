let userseq=[];
let gameseq = [];
let level =0;
let start =false;
let btns =["yellow","blue","green","red"];
let h2 =document.querySelector("h2") ;
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start = true ; 
        levelup();
    }

});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq =[];
    level++;
    h2.innerText  = `level ${level}` ; 
    let randidx = Math.floor(Math.random()*3) ;
    let randcolor = btns[randidx] ; 
    let randbtn = document.querySelector(`.${randcolor}`) ; 
    gameseq.push(randcolor) ; 
    console.log(gameseq) ; 
    btnflash(randbtn);
};
function highestscore(){
    let high = [];
    high.push(`${level}`);
    console.log(high) ;
     let final =high[0];
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
         setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML =`Game over!,<b>Your score was ${level}<br>press any key to start`;
        highestscore();

        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor ="white";
        },150);
        reset();
    }
}
function btnpress(){
    btn = this;
    userflash(btn) ;
    let usercolor = btn.getAttribute("id") ;
    userseq.push(usercolor); 
    // console.log(userseq) ; 
    checkans(userseq.length-1);
};
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress) ; 
}
function reset(){
    start = false;
    gameseq =[];
    userseq =[];
    level =0;
}