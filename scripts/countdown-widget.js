export function countdown() {
	let countdownInterval;
	let remainingTime = 0;

	const display = document.getElementById('timer-display');
	const hoursInput = document.getElementById('hours');
	const minutesInput = document.getElementById('minutes');
	const secondsInput = document.getElementById('seconds');

	document.getElementById('start-btn').addEventListener('click', startCountdown);
	document.getElementById('pause-btn').addEventListener('click', pauseCountdown);
	document.getElementById('reset-btn').addEventListener('click', resetCountdown);

	function startCountdown() {
		const hours = parseInt(hoursInput.value) || 0;
		const minutes = parseInt(minutesInput.value) || 0;
		const seconds = parseInt(secondsInput.value) || 0;
		remainingTime = hours * 3600 + minutes * 60 + seconds;

		if (remainingTime <= 0) return;

		clearInterval(countdownInterval);
		countdownInterval = setInterval(updateCountdown, 1000);
	}

	function updateCountdown() {
		if (remainingTime <= 0) {
			clearInterval(countdownInterval);
			display.textContent = '00:00:00';
			alert('Time is up!');
			return;
		}

		remainingTime--;
		const hrs = Math.floor(remainingTime / 3600);
		const mins = Math.floor((remainingTime % 3600) / 60);
		const secs = remainingTime % 60;

		display.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
	}

	function pauseCountdown() {
		clearInterval(countdownInterval);
	}

	function resetCountdown() {
		clearInterval(countdownInterval);
		display.textContent = '00:00:00';
		hoursInput.value = '';
		minutesInput.value = '';
		secondsInput.value = '';
	}

	function pad(n) {
		return n.toString().padStart(2, '0');
	}
}