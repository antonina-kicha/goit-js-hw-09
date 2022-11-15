const body = document.querySelector('body')
const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let timerId = null;

startBtn.addEventListener('click', changeColor);
function changeColor() {
    startBtn.setAttribute('disabled', '')
    timerId = setInterval(() => { body.style.backgroundColor = getRandomHexColor()}, 1000);
    console.log(timerId);
}

stoptBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
});


