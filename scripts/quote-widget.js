import { QUOTES } from '../fallbackData/quotes.js';

// Get Random Quote
export function getRandomQuote() {
	const quoteButton = document.getElementById('quote-button');
	const quoteText = document.getElementById('quote-text');
	const quoteAuthor = document.getElementById('quote-author');
	const handleResponse = (data) => {
		const quote = data || QUOTES[Math.floor(Math.random() * QUOTES.length)];
		quoteText.textContent = `${quote.split(" - ")[0]}`;
		quoteAuthor.textContent = `~${quote.split(" - ")[1]}`;
	}

	const randomQuoteCallback = () => {
		fetch('https://quotes85.p.rapidapi.com/getrandomquote',
			{
				headers: {
					'X-RapidAPI-Key': import.meta.env.VITE_RapidAPI_KEY,
					'X-RapidAPI-Host': 'quotes85.p.rapidapi.com'
				}
			})
			.then(res => res.ok ? res.text() : null)
			.then(data => handleResponse(data))
			.catch(error => handleResponse(null));
	}
	quoteButton.addEventListener('click', randomQuoteCallback);
	randomQuoteCallback();
}


