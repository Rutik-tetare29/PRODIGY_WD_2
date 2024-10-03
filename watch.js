let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startPauseButton = document.getElementById('startPause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('lapsList');

function updateTime() {
    elapsedTime += 1000; 
    display.textContent = new Date(elapsedTime).toISOString().substr(11, 8);
}

startPauseButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        startPauseButton.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startPauseButton.textContent = 'Start';
    lapsList.innerHTML = '';
    isRunning = false;
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = display.textContent;
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
});