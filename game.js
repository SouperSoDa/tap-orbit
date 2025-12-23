// ==========================
// TAP ORBIT GAME.JS
// ==========================

// Game variables
let score = 0;
let taps = 0;
let spinSpeed = 2; // seconds per rotation

// DOM elements
const scoreEl = document.getElementById("score");
const circle = document.getElementById("circle");
const interstitial = document.getElementById("interstitial");
const rewardBtn = document.getElementById("rewardBtn");

// High score
let highScore = localStorage.getItem('tapOrbitHighScore') || 0;

// Add High Score display
const highScoreEl = document.createElement('p');
highScoreEl.textContent = `High Score: ${highScore}`;
document.body.insertBefore(highScoreEl, circle);

// Audio elements
const tapSound = document.getElementById('tapSound');
const levelSound = document.getElementById('levelSound');

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  // Ensure fullscreen ad hidden
  interstitial.style.display = "none";

  // Show cookie notice if needed
  if (!localStorage.getItem("cookiesAccepted")) {
    const cookieNotice = document.getElementById("cookieNotice");
    if (cookieNotice) cookieNotice.style.display = "block";
  }
});

// ==========================
// TAP CIRCLE
// ==========================
circle.addEventListener("click", () => {
  score++;
  taps++;
  scoreEl.textContent = score;

  // Play tap sound
  if (tapSound) tapSound.play();

  // Update high score
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('tapOrbitHighScore', highScore);
    highScoreEl.textContent = `High Score: ${highScore}`;
  }

  // Increase speed every 10 points
  if (score % 10 === 0) {
    spinSpeed = Math.max(0.5, spinSpeed - 0.2); // min 0.5s
    circle.style.animation = `spin ${spinSpeed}s linear infinite`;
  }

  // Milestone alert every 25 points
  if (score % 25 === 0 && score !== 0) {
    if (!document.getElementById(`milestone-${score}`)) {
      const div = document.createElement('div');
      div.id = `milestone-${score}`;
      div.style.display = 'none';
      document.body.appendChild(div);
      alert(`Great Job! You reached ${score} points!`);
      if (levelSound) levelSound.play();
    }
  }

  // Show fullscreen ad at 30 taps
  if (taps === 30) {
    interstitial.style.display = "flex";
  }
});

// ==========================
// IDLE POINTS
// ==========================
setInterval(() => {
  score++;
  scoreEl.textContent = score;

  // Update high score
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('tapOrbitHighScore', highScore);
    highScoreEl.textContent = `High Score: ${highScore}`;
  }

  // Increase speed every 10 points
  if (score % 10 === 0) {
    spinSpeed = Math.max(0.5, spinSpeed - 0.2);
    circle.style.animation = `spin ${spinSpeed}s linear infinite`;
  }

  // Milestone alert every 25 points
  if (score % 25 === 0 && score !== 0) {
    if (!document.getElementById(`milestone-${score}`)) {
      const div = document.createElement('div');
      div.id = `milestone-${score}`;
      div.style.display = 'none';
      document.body.appendChild(div);
      alert(`Great Job! You reached ${score} points!`);
      if (levelSound) levelSound.play();
    }
  }
},
