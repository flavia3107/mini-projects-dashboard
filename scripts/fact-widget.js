// Random Fact - Useless Facts API
import { FUN_fACTS } from '../fallbackData/funFact.js';

export function getRandomFact() {
	const factButton = document.getElementById('fact-button');
	factButton.addEventListener('click', randomFactCallback);
	randomFactCallback();
}

async function randomFactCallback() {
	const factText = document.getElementById('fact-text');
	const handleResponse = (data) => {
		const quote = data?.text || FUN_fACTS[Math.floor(Math.random() * FUN_fACTS.length)];
		factText.textContent = `${quote.split(" - ")[0]}`;
	}
	const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
	const data = response.ok ? await response.json() : null;;
	handleResponse(data);
}