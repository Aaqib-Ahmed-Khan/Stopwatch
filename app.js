const timer = document.getElementById("stopwatch");
const beepSound = document.getElementById("beep");
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
        beepSound.play();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
        beepSound.pause(); 
        beepSound.currentTime = 0; 
    }
}

function timerCycle() {
    if (stoptime == false) {
        msec = parseInt(msec);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        msec = msec + 1;

        if (msec == 100) {
            sec = sec + 1;
            msec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
            msec = 0;
        }

        if (msec < 10) {
            msec = "0" + msec;
        }
        if (sec < 10 ) {
            sec = "0" + sec;
        }
        if (min < 10 ) {
            min = "0" + min;
        }
        if (hr < 10 ) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec + ":" + msec;

        setTimeout(timerCycle, 10); 
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
    msec = 0;
    beepSound.pause(); 
    beepSound.currentTime = 0;
}

