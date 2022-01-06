import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const buttonStart = document.querySelector('button[data-start]');
const fieldDays = document.querySelector('[data-days]');
const fieldHours = document.querySelector('[data-hours]');
const fieldMinutes = document.querySelector('[data-minutes]');
const fieldSeconds = document.querySelector('[data-seconds]');
let date = Date.now(0);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
        date = selectedDates[0].getTime();
        console.log(date);
        const currentDate = options.defaultDate.getTime();
        if (date <= currentDate) {
            window.alert('Пожалуйста выберите будущую дату');
            return;
        }
        buttonStart.disabled = false;
      },
};
flatpickr('input[type="text"]', options);
buttonStart.disabled = true;
buttonStart.addEventListener('click', () => {
    timer.end();
});
const timer = {
    isActive: false,
    end() {
        if (this.isActive) {
            return;
        }
            setInterval(() => {
            const currentTime = Date.now();
            console.log(currentTime);
            const ms = date - currentTime;
            const { days, hours, minutes, seconds } = convertMs(ms);
            fieldDays.textContent = `${days}`;
            fieldHours.textContent = `${hours}`;
            fieldMinutes.textContent = `${minutes}`;
            fieldSeconds.textContent = `${seconds}`;
            console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
        }, 1000);
    }
}

function pad(value) {
    return String(value).padStart(2, '0');
}
 function convertMs(ms) {
   const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
           