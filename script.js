let scores = Array(10).fill(0);
let currentQ = 1;

document.getElementById('startBtn').onclick = function() {
  this.style.display = 'none';
  showQuestion(currentQ);
}

function showQuestion(num) {
  document.getElementById('q' + num).classList.add('active');
}

function choose(moodIndex, question) {
  scores[moodIndex]++;
  document.getElementById('q' + question).classList.remove('active');
  currentQ++;
  if(currentQ <= 9) { 
    showQuestion(currentQ);
  } else {
    showResult();
  }
}

function showResult() {
  let max = Math.max(...scores);
  let idx = scores.indexOf(max);
  let moods = [
    "Cheerful 😄",
    "Cool 😎",
    "Thoughtful 🤔",
    "Angry 😡",
    "Relaxed 😌",
    "Excited 🤩",
    "Calm 🌊",
    "Curious 🧐",
    "Playful 🐾",
    "Focused 🎯"
  ];
  document.getElementById('resultText').innerText = moods[idx];
  document.getElementById('result').classList.add('active');
}