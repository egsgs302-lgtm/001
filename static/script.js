// static/script.js
let timerInterval;
let isWorkPhase = true;
let workDuration, restDuration, timeLeft;

function startTimer(work, rest) {
    clearInterval(timerInterval);
    workDuration = work;
    restDuration = rest;
    isWorkPhase = true;
    timeLeft = workDuration;
    runTimer();
}

function runTimer() {
    timerInterval = setInterval(() => {
        document.getElementById("timer").innerText = formatTime(timeLeft);
        timeLeft--;

        if (timeLeft < 0) {
            isWorkPhase = !isWorkPhase;
            timeLeft = isWorkPhase ? workDuration : restDuration;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "00:00";
}

function formatTime(seconds) {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    return `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}
