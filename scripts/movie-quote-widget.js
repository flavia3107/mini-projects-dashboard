import { MOVIE_QUOTES } from '../assets/fallbackData/movieQuotes.js';

export function getMovieQuote() {
	const movieQuoteButton = document.getElementById('movie-quote-button');
	movieQuoteButton.addEventListener('click', movieQuoteCallback);
	movieQuoteCallback();
}

function movieQuoteCallback() {
	const movieQuoteText = document.getElementById('movie-quote-text');
	const movieActor = document.getElementById('actor');
	const movieCharacter = document.getElementById('character');
	const movieMovieTitle = document.getElementById('movie-title');
	const movieReleaseYear = document.getElementById('release-year');
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
