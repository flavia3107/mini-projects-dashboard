// Get Random Joke
export function getRandomJoke() {
	const jokeButton = document.getElementById('joke-button');
	jokeButton.addEventListener('click', randomJokeCallback);
	randomJokeCallback();
}

async function randomJokeCallback() {
	const jokeText = document.getElementById('joke-text');
	try {
		const response = await fetch('https://v2.jokeapi.dev/joke/Any');
		const data = await response.json();
		jokeText.textContent = data.type === "single"
			? data.joke
			: `${data.setup} ... ${data.delivery}`;
	} catch (error) {
		jokeText.textContent = "Failed to load a joke!";
	}
}