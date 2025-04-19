import { getRandomQuote } from './scripts/quote-widget.js';
import { getToDoItems } from './scripts/todo-widget.js';
import { bmiCalculator } from './scripts/bmi-calculator-widget.js';
import { getRandomPetImage } from './scripts/pet-image-widget.js';
import { getRandomJoke } from './scripts/joke-widget.js';
import { getNasaImage } from './scripts/nasa-widget.js';
import { getRandomFact } from './scripts/fact-widget.js';
import { getMovieQuote } from './scripts/movie-quote-widget.js';


function updateAnalogClock() {
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

setInterval(updateAnalogClock, 1000);
updateAnalogClock(); // initial call


let display = document.getElementById("calc-display");
let buttons = document.querySelectorAll(".calculator .btn");

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const value = button.dataset.value;

		if (value) {
			display.value += value;
		}

		if (button.id === "clear") {
			display.value = "";
		}

		if (button.id === "equals") {
			try {
				display.value = eval(display.value);
			} catch {
				display.value = "Error";
			}
		}
	});
});





getRandomPetImage();
getMovieQuote();
getRandomFact();
getRandomJoke();
getRandomQuote();
getNasaImage();
getToDoItems();
bmiCalculator();