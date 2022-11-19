import { Notify } from 'notiflix/build/notiflix-notify-aio';


const btn = document.querySelector('[type="submit"]');
const parentForm = document.querySelector('.form');
const delayEL = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="step"]');

parentForm.addEventListener('change', getParametr)
btn.addEventListener('click', arrCreatePromise)

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

// Запуск цикла для создания массива промисов
function arrCreatePromise() {
  for (let i = 1; i <= parametr.amount; i += 1)
  {
    createPromise(i, parametr.delay)
    parametr.delay += parametr.step;
  }
}

function createPromise(position, delay) {
  event.preventDefault();
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve(`Fulfilled promis ${position} in ${delay}ms`)
  } else {
      reject(`Rejected promis ${position} in ${delay}ms`);
  }}, delay)
  })
  promise
    .then(resolve => Notify.success(resolve))
    .catch(reject => Notify.failure(reject))
  
}

