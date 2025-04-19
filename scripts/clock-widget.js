export function updateAnalogClock() {
	const now = new Date();

	const second = now.getSeconds();
	const minute = now.getMinutes();
	const hour = now.getHours();

	const secondDeg = second * 6; // 360 / 60
	const minuteDeg = minute * 6 + second * 0.1;
	const hourDeg = ((hour % 12) / 12) * 360 + minute * 0.5;

	document.getElementById("second-hand").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
	document.getElementById("minute-hand").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
	document.getElementById("hour-hand").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}