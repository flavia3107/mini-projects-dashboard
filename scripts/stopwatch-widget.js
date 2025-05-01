export function initStopwatchWidget() {
	const display = document.querySelector('.stopwatch-display');
	const startPauseBtn = document.getElementById('start-pause-btn');
	const resetBtn = document.getElementById('reset-btn');

	let timer = null;
	let elapsedSeconds = 0;
	let running = false;

	startPauseBtn.addEventListener('click', () => {
		if (running) {
			clearInterval(timer);
			startPauseBtn.textContent = 'Start';
		} else {
			timer = setInterval(() => {
				elapsedSeconds++;
				display.textContent = formatTime(elapsedSeconds);
			}, 1000);
			startPauseBtn.textContent = 'Pause';
		}
		running = !running;
	});

	resetBtn.addEventListener('click', () => {
		clearInterval(timer);
		elapsedSeconds = 0;
		display.textContent = '00:00:00';
		startPauseBtn.textContent = 'Start';
		running = false;
	});

	function formatTime(sec) {
		const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
		const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
		const secs = String(sec % 60).padStart(2, '0');
		return `${hrs}:${mins}:${secs}`;
	}
}
