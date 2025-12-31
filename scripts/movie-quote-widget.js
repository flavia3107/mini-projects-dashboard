import { MOVIE_QUOTES } from '../fallbackData/movieQuotes.js';

export function getMovieQuote() {
	const movieQuoteButton = document.getElementById('movie-quote-button');
	movieQuoteButton.addEventListener('click', movieQuoteCallback);
	movieQuoteCallback();
}

async function movieQuoteCallback() {
	const movieQuoteText = document.getElementById('movie-quote-text');
	const movieActor = document.getElementById('actor');
	const movieCharacter = document.getElementById('character');
	const movieMovieTitle = document.getElementById('movie-title');
	const movieReleaseYear = document.getElementById('release-year');
	const handleResponse = (quote) => {
		const selectedQuote = quote ?? MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
		movieQuoteText.textContent = `"${selectedQuote.quote}"`;
		movieActor.textContent = `(${selectedQuote.actor})`;
		movieCharacter.textContent = selectedQuote.character;
		movieMovieTitle.textContent = selectedQuote.quoteFrom;
		movieReleaseYear.textContent = `(${selectedQuote.year})`;
	};
	const response = await fetch('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote', {
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_KEY,
			'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
		}
	});
	const data = response.ok ? await response.json() : null;
	handleResponse(data);
}