const start = document.getElementById("start");
const clickMe = document.getElementById("click-me");
const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const score = document.getElementById("score");

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
