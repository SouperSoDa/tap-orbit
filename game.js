let score = 0;
let taps = 0;
let spinSpeed = 2; // seconds for one rotation

const scoreEl = document.getElementById("score");
const circle = document.getElementById("circle");
const interstitial = document.getElementById("interstitial");
const rewardBtn = document.getElementById("rewardBtn");

// Hide fullscreen ad on load
document.addEventListener("DOMContentLoaded", () => {
  interstitial.style.display = "none";
});

// Tap circle
circle.addEventListener("click", () => {
  score++;
  taps++;
  scoreEl.textContent = score;

  // Increase speed every 10 points
  if (score % 10 === 0) {
    spinSpeed = Math.max(0.5, spinSpeed - 0.2); // speed up, min 0.5s
    circle.style.animation = `spin ${spinSpeed}s linear infinite`;
  }

  // Show ad after 30 taps
  if (taps === 30) {
    interstitial.style.display = "flex";
  }
});

// Reward button
rewardBtn.addEventListener("click", () => {
  alert("Ad watched!");
  score += 50;
  scoreEl.textContent = score;
});

// Close ad
function closeAd() {
  interstitial.style.display = "none";
}
