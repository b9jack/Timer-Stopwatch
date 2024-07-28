stopwatchButton = document.getElementById("stopwatch")
timerButton = document.getElementById("timer")
time = document.getElementById("timeRef")
int = null;
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timerOptions = document.querySelector(".timer-options")
let timerOptionsInputs = document.querySelectorAll(".timer-options input")
let countDownHours = document.getElementById("hours")
let countDownMinutes = document.getElementById("minutes")
let countDownSeconds = document.getElementById("seconds")
let initialHours, initialMinutes, initialSeconds;



timerButton.addEventListener("click", () =>{
    clearInterval(int)
    int = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
    time.innerText = "00 : 00 : 00 "
    let timeButtons = document.querySelectorAll(".time button");
    timeButtons.forEach(button => {
        button.style.display = "none"
    })
    timerOptions.classList.remove("hide")

    initialHours = parseInt(countDownHours.value) || 0
    initialMinutes = parseInt(countDownMinutes.value) || 0
    initialSeconds = parseInt(countDownSeconds.value) || 0

    if(initialHours == 0 && initialMinutes == 0 && initialSeconds == 0){
        alert("Invalid Inputs")
    }else{
        int = setInterval(goDown, 1000)
    }
})

stopwatchButton.addEventListener("click", () =>{
    let timeButtons = document.querySelectorAll(".time button");
    timeButtons.forEach(button => {
        button.style.display = "block"
    })
    if(int != null){
        clearInterval(int)
    }
    int = setInterval(goUp, 10)

    timerOptions.classList.add("hide")

})

document.getElementById("stop").addEventListener("click", () =>{
    clearInterval(int)
})

document.getElementById("reset").addEventListener("click", () =>{
    clearInterval(int)
    int = null;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
    time.innerText = "00 : 00 : 00 : 000"
})

function goUp(){
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0
        seconds += 1;
        if(seconds == 60){
            minutes += 1;
            if(minutes == 60){
                hours += 1;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 100 ? "0" + milliseconds : milliseconds;

    time.innerText = `${h} : ${m} : ${s} : ${ms}`
}

function goDown() {
    if (initialHours === 0 && initialMinutes === 0 && initialSeconds === 0) {
        clearInterval(int);
        alert("Time's up!");
        return;
    }

    if (initialSeconds > 0) {
        initialSeconds -= 1;
    } else if (initialMinutes > 0) {
        initialMinutes -= 1;
        initialSeconds = 59;
    } else if (initialHours > 0) {
        initialHours -= 1;
        initialMinutes = 59;
        initialSeconds = 59;
    }
    let h = initialHours < 10 ? "0" + initialHours : initialHours;
    let m = initialMinutes < 10 ? "0" + initialMinutes : initialMinutes;
    let s = initialSeconds < 10 ? "0" + initialSeconds : initialSeconds;

    time.innerText = `${h} : ${m} : ${s}`;
}