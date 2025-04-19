import { MOVIE_QUOTES } from './assets/fallbackData/movieQuotes.js';
import { FUN_fACTS } from './assets/fallbackData/funFact.js';
import { getRandomQuote } from './scripts/quote-widget.js';
import { getToDoItems } from './scripts/todo-widget.js';
import { bmiCalculator } from './scripts/bmi-calculator-widget.js';
import { getRandomPetImage } from './scripts/pet-image-widget.js';





// Get Random Joke
const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
jokeButton.addEventListener('click', randomJokeCallback);

// NASA Image of the Day
const nasaImage = document.getElementById('nasa-image');
const nasaTitle = document.getElementById('nasa-title');
const nasaDescription = document.getElementById('nasa-description');

function getNasaImage() {
	const handleResponse = (data) => {
		nasaImage.src = data && data.media_type === "image" ? data.url : '/assets/images/earth.webp';
		nasaTitle.textContent = data.title || 'Failed to load';
		nasaDescription.textContent = data.explanation;
	}

	fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API}`)
		.then(res => res.ok ? res.json() : null)
		.then(data => handleResponse(data))
		.catch(() => {
			nasaTitle.textContent = "Failed to load NASA image.";
		});
}

// Random Fact - Useless Facts API
const factButton = document.getElementById('fact-button');
const factText = document.getElementById('fact-text');
factButton.addEventListener('click', randomFactCallback);

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

function randomFactCallback() {
	const handleResponse = (data) => {
		const quote = data.text || FUN_fACTS[Math.floor(Math.random() * FUN_fACTS.length)];
		factText.textContent = `${quote.split(" - ")[0]}`;
	}

	fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
		.then(res => res.json())
		.then(data => handleResponse(data))
		.catch(() => handleResponse());
}

function randomJokeCallback() {
	fetch('https://v2.jokeapi.dev/joke/Any')
		.then(res => res.json())
		.then(data => {
			jokeText.textContent = data.type === "single"
				? data.joke
				: `${data.setup} ... ${data.delivery}`;
		})
		.catch(() => {
			jokeText.textContent = "Failed to load a joke!";
		});
}



getRandomPetImage();
movieQuoteCallback();
randomFactCallback();
randomJokeCallback();
getRandomQuote();
getNasaImage();
getToDoItems();
bmiCalculator();