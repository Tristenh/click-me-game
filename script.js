const start = document.getElementById("start");
const clickMe = document.getElementById("click-me");
const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const score = document.getElementById("score");
const result = document.getElementById("result");

let count = 0;
let time = 5;

function clickStart() {
  clickMe.addEventListener("click", function () {
    if (time > 0) {
      count++;
      score.innerHTML = count;
      return count;
    }
  });
}

start.addEventListener("click", function () {
  clickStart();
  start.style.display = "none";
  let startTime = setInterval(function () {
    time--;
    console.log(time);
    if (time === 0) {
      clearInterval(startTime);
    }
  }, 1000);
});

let storedInitials = [];
let storedCount = [];

function init() {
  let storedInitialsJSON = localStorage.getItem("storedInitials");
  if (storedInitialsJSON) {
    storedInitials = JSON.parse(storedInitialsJSON);
  }
  let storedCountJSON = localStorage.getItem("storedCount");
  if (storedCountJSON) {
    storedCount = JSON.parse(storedCountJSON);
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let storedInitialsValue = input.value;
  let storedCountValue = count;
  storedInitials.push(storedInitialsValue);
  form.value = "";
  storedCount.push(storedCountValue);
  displayResult();
  saveScores();
});

function displayResult() {
  result.innerHTML = ""; // Clear the previous content

  for (let i = 0; i < storedInitials.length; i++) {
    const initials = storedInitials[i];
    const count = storedCount[i];
    const scoreElement = document.createElement("div");
    scoreElement.textContent = `${initials} - ${count}`;
    result.appendChild(scoreElement);
  }
}
function saveScores() {
  localStorage.setItem("storedInitials", JSON.stringify(storedInitials));
  localStorage.setItem("storedCount", JSON.stringify(storedCount));
}
init();
displayResult();
