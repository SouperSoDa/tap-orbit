let score = 0;
let taps = 0;

const scoreEl = document.getElementById("score");
const circle = document.getElementById("circle");
const interstitial = document.getElementById("interstitial");
const rewardBtn = document.getElementById("rewardBtn");

// 🔒 FORCE HIDE on load
interstitial.classList.add("hidden");

circle.addEventListener("click", () => {
  score++;
  taps++;
  scoreEl.textContent = score;

  // Show fullscreen ad ONLY after 30 taps
  if (taps === 30) {
    interstitial.classList.remove("hidden");
  }
});

rewardBtn.addEventListener("click", () => {
  alert("Simulated ad watched!");
  score += 50;
  scoreEl.textContent = score;
});

function closeAd() {
  interstitial.classList.add("hidden");
}
