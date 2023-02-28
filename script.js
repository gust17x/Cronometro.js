const minutesEl = document.querySelector("#minutes")
const secondsEl = document.querySelector("#seconds")
const miliSecondsEl = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval

let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let ispaused = false;


startBtn.addEventListener("click", starttimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)
function starttimer() {

    interval = setInterval(() => {

        if(!ispaused) {
            miliSeconds += 10

            if(miliSeconds === 1000) {
                seconds ++;
                miliSeconds = 0;
            }

            if(seconds === 60){
                minutes ++;
                seconds = 0;
            }

            minutesEl.textContent = formaTime(minutes)
            secondsEl.textContent = formaTime(seconds)
            miliSecondsEl.textContent = formatMiliseconds(miliSeconds)
        }

    }, 10)

    startBtn.style.display = 'none'
    pauseBtn.style.display = 'block'
}

function pauseTimer() {
    ispaused = true
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'block'
} 

function resumeTimer() {
    ispaused = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    miliSecondsEl.textContent = "000"

    startBtn.style.display = 'block'
    pauseBtn.style.display = 'none'
    resumeBtn.style.display = 'none'
}

function formaTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}