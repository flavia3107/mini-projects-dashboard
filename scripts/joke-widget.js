// Get Random Joke
export function getRandomJoke() {
	const jokeButton = document.getElementById('joke-button');
	jokeButton.addEventListener('click', randomJokeCallback);
	randomJokeCallback();
}

function randomJokeCallback() {
	const jokeText = document.getElementById('joke-text');
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

