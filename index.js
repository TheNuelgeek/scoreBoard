let score1 = document.getElementById("score");
let score2 = document.getElementById("score22")
let Reset = document.getElementById("resets")

let _score = 0
let _score2 = 0 

function add1(){
    
    let mainScore = _score += 1;
    score1.textContent = mainScore  
}

function add1_(){
    let mainScore = _score2 +=1;
    score2.textContent = mainScore
}

function add2(){
    let mainScore =_score += 2;
    score1.textContent = mainScore
}

function add2_(){
    let mainScore = _score2 +=2;
    score2.textContent = mainScore
}


function add3(){
    let mainScore = _score += 3;
    score1.textContent = mainScore
}

function add3_(){
    let mainScore = _score2 +=3;
    score2.textContent = mainScore
}

function _reset(){
    let a = 0;
    let b = 0;
    _score = a;
    _score2 = b;
    score1.textContent = 0
    score2.textContent = 0
}




