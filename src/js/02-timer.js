// Библиотека flatpickr
// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// Библиотека для уведомлений
import Notiflix from 'notiflix';


// функция для подсчета значений из милисекунд

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// элементы интерфейса
const timerEl = document.querySelector('.timer');
const timeField = document.querySelectorAll('.field');
const timeValue = document.querySelectorAll('.value');
const timeLabel = document.querySelectorAll('.label');
const startBtn = document.querySelector('[data-start]')

// оформление элементов интерфейса
startBtn.setAttribute('disabled', '')

timerEl.style.display = 'flex';
timerEl.style.gap = '15px';
timerEl.style.marginTop = '15px';

timeField.forEach(function (el, index) {
    el.style.display = 'flex';
    el.style.flexDirection = 'column';
})
timeValue.forEach(function (el, index) {
    el.style.fontSize = '24px';
    el.style.textAlign = 'center';
})
timeLabel.forEach(function (el, index) {
    el.style.textTransform = 'uppercase';
    el.style.fontSize = '10px';
})

// использование библиотеки, проверка выбраной и текущей даты
let checkDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentdate = new Date();
        checkDate = selectedDates[0] - currentdate;
        if (checkDate < 0) {
            // window.alert("Please choose a date in the future");
            Notiflix.Notify.failure('Please choose a date in the future');
            startBtn.setAttribute('disabled', '')
            return;
        }
        startBtn.removeAttribute('disabled')    
    },
  
};
flatpickr("#datetime-picker", options);

// Запуск таймера по клику
let timerId;
startBtn.addEventListener('click', startTimer);
function startTimer() {
    timerId = setInterval(getValueTimer, 1000)
    startBtn.setAttribute('disabled', '')
}

function getValueTimer() {
   if (checkDate < 2000) {
     clearInterval(timerId);
    }
    checkDate -= 1000;
    const { days, hours, minutes, seconds } = convertMs(checkDate);
    document.querySelector('[data-days]').textContent = days.toString().padStart(2, '0');
    document.querySelector('[data-hours]').textContent = hours.toString().padStart(2, '0');
    document.querySelector('[data-minutes]').textContent = minutes.toString().padStart(2, '0');
    document.querySelector('[data-seconds]').textContent = seconds.toString().padStart(2, '0');
}




