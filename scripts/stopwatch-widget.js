export function initStopwatchWidget() {
	const display = document.querySelector('.stopwatch-display');
	const startPauseBtn = document.getElementById('start-pause-btn');
	const resetBtn = document.getElementById('reset-btn');

	let timer = null;
	let startTime = null;
	let elapsed = 0;
	let running = false;

	startPauseBtn.addEventListener('click', () => {
		if (running) {
			clearInterval(timer);
			elapsed += Date.now() - startTime;
			startPauseBtn.textContent = 'Start';
		} else {
			startTime = Date.now();
			timer = setInterval(updateDisplay, 10); // update every 10 ms
			startPauseBtn.textContent = 'Pause';
		}
		running = !running;
	});

	resetBtn.addEventListener('click', () => {
		clearInterval(timer);
		elapsed = 0;
		display.textContent = '00:00:00.00';
		startPauseBtn.textContent = 'Start';
		running = false;
	});

	function updateDisplay() {
		const time = elapsed + (Date.now() - startTime);
		display.textContent = formatTime(time);
	}

	function formatTime(ms) {
		const totalSeconds = Math.floor(ms / 1000);
		const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
		const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
		const secs = String(totalSeconds % 60).padStart(2, '0');
		const centis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
		return `${hrs}:${mins}:${secs}.${centis}`;
	}
}
