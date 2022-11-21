// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';


const btn = document.querySelector('[type="submit"]');
const parentForm = document.querySelector('.form');
const delayEL = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="step"]');

parentForm.addEventListener('change', getParametr)
btn.addEventListener('click', onClick)

//сохраняю введенные данные
let parametr = {
  delay: 0,
  step: 0,
  amount: 0}

function getParametr(evt) {
  const {
    elements: { delay, step, amount}
  } = evt.currentTarget;
  parametr.delay = Number(delay.value);
  parametr.step = Number(step.value);
  parametr.amount = Number(amount.value);

  console.log(parametr);
}

// Создание промиса

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {resolve({ position, delay})}
      else { reject({ position, delay})}
    }, delay)
         
  })
}

// Запуск цикла для создания массива промисов
function onClick(event) {
  event.preventDefault();
  for (let i = 1; i <= parametr.amount; i += 1)
  {
    createPromise(i, parametr.delay)
      .then(({ position, delay }) => Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`))
      .catch(({ position, delay }) => Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`));
    parametr.delay += parametr.step;
  }
}


