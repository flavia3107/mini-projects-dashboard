export function countdown() {
	let countdownInterval;
	let endTime = 0;
	let isRunning = false;

	const display = document.getElementById('timer-display');
	const hoursInput = document.getElementById('hours');
	const minutesInput = document.getElementById('minutes');
	const secondsInput = document.getElementById('seconds');
	const alarmSound = document.getElementById('alarm-sound');

	document.getElementById('start-btn').addEventListener('click', startCountdown);
	document.getElementById('pause-btn').addEventListener('click', pauseCountdown);
	document.getElementById('reset-btn').addEventListener('click', resetCountdown);

	function startCountdown() {
		if (isRunning) return;

		const hours = parseInt(hoursInput.value) || 0;
		const minutes = parseInt(minutesInput.value) || 0;
		const seconds = parseInt(secondsInput.value) || 0;
		const totalMillis = (hours * 3600 + minutes * 60 + seconds) * 1000;

		if (totalMillis <= 0) return;

		endTime = Date.now() + totalMillis;
		isRunning = true;

		clearInterval(countdownInterval);
		countdownInterval = setInterval(updateCountdown, 50);
	}

	function updateCountdown() {
		const remainingMillis = endTime - Date.now();

		if (remainingMillis <= 0) {
			clearInterval(countdownInterval);
			display.textContent = '00:00:00.000';
			isRunning = false;
			alarmSound.play();
			return;
		}

		const hrs = Math.floor(remainingMillis / 3600000);
		const mins = Math.floor((remainingMillis % 3600000) / 60000);
		const secs = Math.floor((remainingMillis % 60000) / 1000);
		const ms = remainingMillis % 1000;

		display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${padMs(ms)}`;
	}

	function pauseCountdown() {
		clearInterval(countdownInterval);
		isRunning = false;
	}

	function resetCountdown() {
		clearInterval(countdownInterval);
		display.textContent = '00:00:00.000';
		hoursInput.value = '';
		minutesInput.value = '';
		secondsInput.value = '';
		isRunning = false;
	}

	function pad(n) {
		return n.toString().padStart(2, '0');
	}

	function padMs(n) {
		return n.toString().padStart(3, '0');
	}
}