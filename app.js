import { MOVIE_QUOTES } from './assets/fallbackData/movieQuotes.js';
import { getRandomQuote } from './scripts/quote-widget.js';
import { getToDoItems } from './scripts/todo-widget.js';
import { bmiCalculator } from './scripts/bmi-calculator-widget.js';
import { getRandomPetImage } from './scripts/pet-image-widget.js';
import { getRandomJoke } from './scripts/joke-widget.js';
import { getNasaImage } from './scripts/nasa-widget.js';
import { getRandomFact } from './scripts/fact-widget.js';



// Movie Quote - RapidAPI (replace API_KEY with your actual key)
const movieQuoteButton = document.getElementById('movie-quote-button');
const movieQuoteText = document.getElementById('movie-quote-text');
const movieActor = document.getElementById('actor');
const movieCharacter = document.getElementById('character');
const movieMovieTitle = document.getElementById('movie-title');
const movieReleaseYear = document.getElementById('release-year');
movieQuoteButton.addEventListener('click', movieQuoteCallback);

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


function movieQuoteCallback() {
	const handleResponse = (data) => {
		const quote = data || MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
		movieQuoteText.textContent = `"${quote.quote}"`;
		movieActor.textContent = `(${quote.actor})`;
		movieCharacter.textContent = quote.character;
		movieMovieTitle.textContent = quote.quoteFrom;
		movieReleaseYear.textContent = `(${quote.year})`;
	}
	fetch('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote', {
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_KEY,
			'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
		}
	})
		.then(res => res.ok ? res.json() : null)
		.then(data => handleResponse(data))
		.catch(() => handleResponse());
}



getRandomPetImage();
movieQuoteCallback();
getRandomFact();
getRandomJoke();
getRandomQuote();
getNasaImage();
getToDoItems();
bmiCalculator();