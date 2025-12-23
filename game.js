let score = 0;
let taps = 0;

const scoreEl = document.getElementById("score");
const circle = document.getElementById("circle");
const interstitial = document.getElementById("interstitial");
const rewardBtn = document.getElementById("rewardBtn");

// EXTRA SAFETY: hide on load
document.addEventListener("DOMContentLoaded", () => {
  interstitial.style.display = "none";
});

circle.addEventListener("click", () => {
  score++;
  taps++;
  scoreEl.textContent = score;

  // Show fullscreen ad only after 30 taps
  if (taps === 30) {
    interstitial.style.display = "flex";
  }
});

rewardBtn.addEventListener("click", () => {
  alert("Simulated ad watched!");
  score += 50;
  scoreEl.textContent = score;
});

function closeAd() {
  interstitial.style.display = "none";
}
