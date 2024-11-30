// script.js
const startBtn = document.getElementById('start-btn');
const scoreBoard = document.getElementById('score-board');
const timerDisplay = document.getElementById('timer');
const gameArea = document.getElementById('game-area');
const coffeeCup = document.getElementById('coffee-cup');

let score = 0;
let timeLeft = 30;
let gameInterval;

// Oyunu başlatan fonksiyon
function startGame() {
    score = 0;
    timeLeft = 30;
    scoreBoard.textContent = `Puan: ${score}`;
    timerDisplay.textContent = `Kalan Süre: ${timeLeft}`;
    coffeeCup.style.display = 'block';

    // Zamanlayıcı başlat
    gameInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Kalan Süre: ${timeLeft}`;
        } else {
            endGame();
        }
    }, 1000);

    moveCoffeeCup(); // İlk kahve bardağını hareket ettir
}

// Oyunu bitiren fonksiyon
function endGame() {
    clearInterval(gameInterval);
    coffeeCup.style.display = 'none';
    alert(`Oyun bitti! Toplam puanınız: ${score}`);
}

// Kahve bardağını oyun alanı içinde rastgele bir pozisyona taşı
function moveCoffeeCup() {
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;
    const cupWidth = coffeeCup.offsetWidth;
    const cupHeight = coffeeCup.offsetHeight;

    // Oyun alanının sınırları içinde rastgele bir pozisyon seç
    const x = Math.random() * (gameAreaWidth - cupWidth);
    const y = Math.random() * (gameAreaHeight - cupHeight);

    coffeeCup.style.left = `${x}px`;
    coffeeCup.style.top = `${y}px`;
}

// Kahve bardağına tıklanınca puanı artır ve bardak yer değiştir
coffeeCup.addEventListener('click', () => {
    score++;
    scoreBoard.textContent = `Puan: ${score}`;
    moveCoffeeCup();
});

// Oyunu başlatma düğmesine tıklayınca oyun başlasın
startBtn.addEventListener('click', startGame);
