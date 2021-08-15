const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  min: document.querySelector('[data-value="mins"]'),
  sec: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({targetDate}) {
        this.targetDate = targetDate;
        const endDate = targetDate.getTime();
        setInterval(() => {
        const now = new Date().getTime();
        const time = endDate - now;
            if (time >= 0) {
                const days = Math.floor(time / (1000 * 60 * 60 * 24));
                const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((time % (1000 * 60)) / 1000);

        refs.day.innerHTML = days;
        refs.hour.innerHTML = ('0' + hours).slice(-2);
        refs.min.innerHTML = ('0' + mins).slice(-2);
        refs.sec.innerHTML = ('0' + secs).slice(-2);
  }
}, 1000);
};};

new CountdownTimer({
  targetDate: new Date('Aug 31, 2021 00:00:00'),
});




