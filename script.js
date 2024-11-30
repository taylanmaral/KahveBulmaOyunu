// script.js
const startBtn = document.getElementById('start-btn');
const scoreBoard = document.getElementById('score-board');
const timerDisplay = document.getElementById('timer');
const gameArea = document.getElementById('game-area');
const coffeeCup = document.getElementById('coffee-cup');

let score = 0;
let timeLeft = 30;
let gameInterval;

function startGame() {
    score = 0;
    timeLeft = 30;
    scoreBoard.textContent = `Puan: ${score}`;
    timerDisplay.textContent = `Kalan Süre: ${timeLeft}`;
    coffeeCup.style.display = 'block';

    // Timer Başlat
    gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Kalan Süre: ${timeLeft}`;
        } else {
            endGame();
        }
    }, 1000);

    moveCoffeeCup();
}

function endGame() {
    clearInterval(gameInterval);
    coffeeCup.style.display = 'none';
    alert(`Oyun bitti! Toplam puanınız: ${score}`);
}

function moveCoffeeCup() {
    const x = Math.random() * (gameArea.offsetWidth - 50);
    const y = Math.random() * (gameArea.offsetHeight - 50);
    coffeeCup.style.left = `${x}px`;
    coffeeCup.style.top = `${y}px`;
}

coffeeCup.addEventListener('click', () => {
    score++;
    scoreBoard.textContent = `Puan: ${score}`;
    moveCoffeeCup();
});

startBtn.addEventListener('click', startGame);
