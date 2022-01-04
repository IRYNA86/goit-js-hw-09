// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const buttonStart = document.querySelector('button[data-start]');
let date = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        date = selectedDates[0].getTime();
        if (date <= options.defaultDate.getTime()) {
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
        const endTime = Date.now();
        this.isActive = true;
        setInterval(() => {
            const currentTime = Date.now();
            const ms = currentTime - endTime;
            const { days, hours, minutes, seconds } = convertMs(ms);
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
            // updateTimerValue({ days, hours, minutes, seconds });
            console.log(`${days}, ${hours}, ${minutes}, ${seconds}`);
        }, 1000);
    }

}
