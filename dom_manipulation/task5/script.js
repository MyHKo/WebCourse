'use strict';

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


let timerInterval;
let secondsLapsed = 0;

startButton.addEventListener('click', (event) => {
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    secondsLapsed = 0;
    timerInterval = setInterval(() => {
        secondsLapsed++;
        seconds.textContent = (secondsLapsed % 60).toString().padStart(2, '0');
        minutes.textContent = Math.floor(secondsLapsed / 60).toString().padStart(2, '0');
        hours.textContent = Math.floor(secondsLapsed / 3600).toString().padStart(2, '0');
    }, 1000);
});

stopButton.addEventListener('click', (event) => {
    clearInterval(timerInterval);
})