var score = 0;
var timeLeft = null;
var time;
var codeQuestions = 0;
const quizStart = document.getElementById('quizStart');
const gameQ = document.getElementById('gameQ');
const highScore = document.getElementById('highScore');

var questions = [
    {
        prompt: "what does html stand for",
        response: [
            "Hypertext Markup Language", "Hypertext Makeup Language", "Hype Text Markup Language", ""
        ],
        corretAnswer:"Hypertext Markup Language"
    },
    {
        prompt: "what does css stand for",
        response: [
            "create stylish styles", "Cascading Style Sheets", "casting sheets", "cascading Styled Sheet"
        ],
        corretAnswer:"Cascading Style Sheets"
    },
    {
        prompt: "what does pop() do in an arry",
        response: [
            "removes the last element from an array", "removes the first element from an arry", "cuts arry in half", "deletes whole arry"
        ],
        corretAnswer:"removes the last element from an array"
    },
    {
        prompt: "what are Arrys stored in",
        response: [
            "{}", "()", "[]", "''"
        ],
        corretAnswer:"[]"
    },
    {
        prompt: "what does the map() do for an array",
        response: [
            "return new arry", "deletes current arry and starts fresh", "makes list for arry", "deletes arry"
        ],
        corretAnswer:"return new arry"
    },
];

//function to start game
function start() {
    quizStart.style.display = 'none';
    gameQ.style.display = 'block';
    timer();
    score = 0;
    quizQuestion();
};

// function for timer
function timer(){
    time = 10;
    timeLeft =setInterval(function () {
        document.getElementById('timer').innerHTML = 'Timer:' + time 
        time--;
    },1000);
}

// function to show highscores
function scores() {
    quizStart.style.display = 'none';
    gameQ.style.display = 'none';
    highScore.style.display = 'block';
};

//function to take user back to start
function goBack() {
    highScore.style.display = 'none';
    quizStart.style.display = 'block';

};

//function to clear scores
function zero() {
    localStorage.clear()
    var list = document.getElementById("score").value;
    document.getElementById("demo").innerHTML = list;
}

//function to save highscores
function saveScore() {
    localStorage.setItem("score", score);
    var list = document.getElementById("score").value;
    document.getElementById("demo").innerHTML = list;
};

// quiz function
function nextQuest() {
    document.getElementById("quiz").innerHTML = questions[codeQuestions].prompt
    for(i = 0; i < questions[codeQuestions].response.length ; i++) {
        var aswBtn = `<li> <button class = 'response-btn'>${questions[codeQuestions].response[i]}</button></li>`
        document.getElementById('posAns').innerHTML += newBtn;
    }
    var chosie = document.querySelector(".response-btn")
    for(i = 0; i < chosie.length; i++) {
        chosie[i].addEventListner("click", function (e) {
            var userResponse = e.target.innerText();
        })
    };
};

//scoring function
function codeScore(){
    nextQuest();
    score = 0
    if (nextQuest == 0) {
        question();
    } else if (nextQuest == 1) {
        question2();
    }else if (time < 1 || nextQuest == 2) {
        end();
    }
};

//function for questions
function question(){
    document.getElementById("question").innerHTML = questions[0];

    document.getElementById("answer1").innerHTML = answers1[0];
    document.getElementById("answer2").innerHTML = answers1[1];
    document.getElementById("answer3").innerHTML = answers1[2];
    document.getElementById("answer4").innerHTML = answers1[3];

    document.getElementById("answer1").onclick = correct;
    document.getElementById("answer2").onclick = incorrect;
    document.getElementById("answer3").onclick = incorrect;
    document.getElementById("answer4").onclick = incorrect;

}

//right answer function
function right() {
    document.getElementById("userResponse").innerHTML = "Great!";
    nextQuest = nextQuest + 1;
};

//wrong answer function
function wrong() {
    document.getElementById("userResponse").innerHTML = "wrong next time 🙁";
    time = time - 3;
    nextQuest = nextQuest + 1;
};

//function to end game
function end() {
    clearInterval(timeLeft);
    quizStart.style.display = 'none';
    gameQ.style.display = 'none';
    highScore.style.display = 'block';
};