const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
const words = [
  "joyal",
  "tense",
  "airplane",
  "admire",
  "javascript",
  "juice",
  "warlike",
  "youtube",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "it buddies",
  "feeble",
  "admit",
  "reactjs",
  "loving",
];
let randomWord;
let score = 0;
let time = 10;
text.focus();
const timeInterval = setInterval(updateTime, 1000);
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onClick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = "flex";
}
addWordToDom();
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDom();
    e.target.value = "";
    updateScore();
    time += 5;
    updateTime();
  }
});
