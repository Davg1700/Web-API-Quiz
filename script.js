var score = 0;
var timeLeft = null;
var time;
const quizStart = document.getElementById('quizStart');
const gameQ = document.getElementById('gameQ');
const highScore = document.getElementById('highScore');

//function to start game
function start() {
    quizStart.style.display = 'none';
    gameQ.style.display = 'block';
};

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
function loop(){
for (let i = 0; i < list.length; i++) {
    text += list[i] + "<br>";
  }
}