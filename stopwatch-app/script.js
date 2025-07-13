let [ms, sec, min, hr] = [0, 0, 0, 0];
let timer = null;

const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

function updateStopwatch() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }

  const h = hr.toString().padStart(2, '0');
  const m = min.toString().padStart(2, '0');
  const s = sec.toString().padStart(2, '0');
  const milli = ms.toString().padStart(3, '0');

  display.innerText = `${h}:${m}:${s}:${milli}`;
}

function start() {
  if (timer === null) {
    timer = setInterval(updateStopwatch, 10);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  [ms, sec, min, hr] = [0, 0, 0, 0];
  display.innerText = "00:00:00:000";
  lapsContainer.innerHTML = "";
}

function lap() {
  const lapTime = display.innerText;
  const lapItem = document.createElement("div");
  lapItem.className = "lap-item";
  lapItem.textContent = `Lap ${lapsContainer.children.length + 1}: ${lapTime}`;
  lapsContainer.appendChild(lapItem);
}
