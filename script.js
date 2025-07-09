// Initialize time values
let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

// Get the display element
let displayTime = document.querySelector("h1");

// Update time each second
function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  // Format time with leading zeros
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

// Start stopwatch
function watchStart() {
  if (timer !== null) {
    clearInterval(timer); // prevent multiple intervals
  }
  timer = setInterval(stopwatch, 1000);
}

// Stop stopwatch
function watchStop() {
  clearInterval(timer);
}

// Reset stopwatch
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}

// Add event listeners to buttons
document.getElementById("start-btn").addEventListener("click", watchStart);
document.getElementById("stop-btn").addEventListener("click", watchStop);
document.getElementById("reset-btn").addEventListener("click", watchReset);
