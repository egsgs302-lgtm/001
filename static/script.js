let timerInterval;
let isWorkPhase = true;
let workDuration, restDuration, timeLeft;
let mode = "countdown"; // "countdown" or "stopwatch"

function startCountdown(work, rest) {
    clearInterval(timerInterval);
    mode = "countdown";
    workDuration = work * 1000;
    restDuration = rest * 1000;
    isWorkPhase = true;
    timeLeft = workDuration;
    runCountdown();
}

function runCountdown() {
    const startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        timeLeft = (isWorkPhase ? workDuration : restDuration) - elapsed;

        if (timeLeft <= 0) {
            isWorkPhase = !isWorkPhase;
            clearInterval(timerInterval);
            runCountdown(); // restart with new phase
            return;
        }

        document.getElementById("timer").innerText = formatTime(timeLeft);
    }, 10);
}

function startStopwatch() {
    clearInterval(timerInterval);
    mode = "stopwatch";
    const startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        document.getElementById("timer").innerText = formatTime(elapsed);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "00:00.000";
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = ms % 1000;
    return `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}.${milliseconds.toString().padStart(3,"0")}`;
}
