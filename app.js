const elapsed = document.querySelector('.time__elapsed')
const progressBar = document.querySelector('.time__inner_progress')
let secondsPrompt = window.prompt('Combien de secondes?')
let seconds = +secondsPrompt > 0 ? +secondsPrompt : 25;
let repeatPrompt = window.prompt('Repeat Delay (minutes)');
let repeat = +repeatPrompt > 0 ? +repeatPrompt : 2;
let time = 0

let breakerInterval = null;
launchProgress();
setInterval(launchProgress, (repeat * 60 * 1000) + seconds * 1000)
function launchProgress() {
    elapsed.textContent = seconds + ' seconds'
    breakerInterval = setInterval(incrementTime, 1000)
}

function incrementTime() {
    console.log(time, seconds)
    if (time === seconds) {
        clearInterval(breakerInterval)
        setTimeout(() => {
            elapsed.textContent = ' -- '
            progressBar.style.width = '0%'
            time = 0;
        }, 1000)
        return;
    }
    time++;
    elapsed.textContent = seconds - time + ' seconds'
    progressBar.style.width = (100 * (time)) / seconds + '%'
}
// setTimeout(() => {
//     progressBar.style.width = "100%"
// }, 3000)