document.addEventListener('DOMContentLoaded', () => {
    const timeOptions = document.querySelectorAll('.minutes span');
    const counter = document.getElementById('counter');
    const startButton = document.getElementById('start-timer');
    let selectedTime = 0;
    let timerInterval;

    timeOptions.forEach(option => {
        option.addEventListener('click', () => {
            setTime(option);
            stopCountdown(); 
        });
    });

    startButton.addEventListener('click', startCountdown);

    function setTime(option) {
        selectedTime = parseInt(option.textContent) * 60;
        updateCounter(selectedTime);
    }

    function startCountdown() {
        if (selectedTime > 0) {
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                selectedTime--;
                updateCounter(selectedTime);
                if (selectedTime <= 0) {
                    clearInterval(timerInterval);
                    alert("Time's up!");
                }
            }, 1000);
        }
    }

    function stopCountdown() {
        clearInterval(timerInterval);
    }

    function updateCounter(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        counter.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
});
