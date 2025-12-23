let score = 0;
let taps = 0;

const scoreEl = document.getElementById("score");
const circle = document.getElementById("circle");
const interstitial = document.getElementById("interstitial");
const rewardBtn = document.getElementById("rewardBtn");

circle.onclick = () => {
  score++;
  taps++;
  scoreEl.textContent = score;

  // Show ad every 30 taps
  if (taps % 30 === 0) {
    interstitial.classList.remove("hidden");
  }
};

rewardBtn.onclick = () => {
  alert("Ad watched!");
  score += 50;
  scoreEl.textContent = score;
};

function closeAd() {
  interstitial.classList.add("hidden");
}
