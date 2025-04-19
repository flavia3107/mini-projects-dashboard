import { getRandomQuote } from './scripts/quote-widget.js';
import { getToDoItems } from './scripts/todo-widget.js';
import { bmiCalculator } from './scripts/bmi-calculator-widget.js';
import { getRandomPetImage } from './scripts/pet-image-widget.js';
import { getRandomJoke } from './scripts/joke-widget.js';
import { getNasaImage } from './scripts/nasa-widget.js';
import { getRandomFact } from './scripts/fact-widget.js';
import { getMovieQuote } from './scripts/movie-quote-widget.js';
import { updateAnalogClock } from './scripts/clock-widget.js';





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






setInterval(updateAnalogClock, 1000);
updateAnalogClock();
getRandomPetImage();
getMovieQuote();
getRandomFact();
getRandomJoke();
getRandomQuote();
getNasaImage();
getToDoItems();
bmiCalculator();