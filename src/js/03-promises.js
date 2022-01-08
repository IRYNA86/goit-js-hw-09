import Notiflix from 'notiflix';
const formLabel = document.querySelector('.form');
formLabel.addEventListener('submit', onButtonSubmit);
let position = 0;
function onButtonSubmit(event) {
  event.preventDefault();
  let delay = Number(event.currentTarget.delay.value);
  let step = Number(event.currentTarget.step.value);
  let amount = Number(event.currentTarget.amount.value);
  setInterval(() => {
    if (position >= amount) {
      return;
    }
    position += 1;
    setTimeout(() => {
      delay += step;
    });
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, step);
}
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
  return promise;
  }