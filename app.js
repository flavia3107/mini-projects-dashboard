// app.js

// Get Random Quote
const quoteButton = document.getElementById('quote-button');
const quoteText = document.getElementById('quote-text');
quoteButton.addEventListener('click', () => {
	fetch('https://quotes85.p.rapidapi.com/getrandomquote',
		{
			headers: {
				'X-RapidAPI-Key': RapidAPI_KEY,
				'X-RapidAPI-Host': 'quotes85.p.rapidapi.com'
			}
		})
		.then(response => response.json())
		.then(data => {
			quoteText.textContent = `"${data.contents.quotes[0].quote}" - ${data.contents.quotes[0].author}`;
		})
		.catch(error => {
			quoteText.textContent = "Failed to load quote!";
		});
});

// Get Todo List (using JSONPlaceholder API)
const todoList = document.getElementById('todo-list');
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(data => {
		todoList.innerHTML = data.slice(0, 5).map(todo => `<li>${todo.title}</li>`).join('');
	})
	.catch(error => {
		todoList.innerHTML = "<li>Failed to load todo list.</li>";
	});

// BMI Calculator functionality
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');
bmiForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const weight = parseFloat(document.getElementById('bmi-weight').value);
	const height = parseFloat(document.getElementById('bmi-height').value);
	if (weight && height) {
		const bmi = weight / (height * height);
		bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;
	} else {
		bmiResult.textContent = "Please enter valid values!";
	}
});

// Get Random Cat Image
const catButton = document.getElementById('cat-button');
const catImage = document.getElementById('cat-image');
catButton.addEventListener('click', () => {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			catImage.src = data[0].url;
		})
		.catch(error => {
			catImage.src = "";
			alert("Failed to load cat image!");
		});
});

const jokeButton = document.getElementById('joke-button');
const jokeText = document.getElementById('joke-text');
jokeButton.addEventListener('click', () => {
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
});

// Lyrics Finder - lyrics.ovh
const lyricsButton = document.getElementById('lyrics-button');
const lyricsResult = document.getElementById('lyrics-result');
lyricsButton.addEventListener('click', () => {
	const artist = document.getElementById('artist').value;
	const song = document.getElementById('song').value;

	if (!artist || !song) {
		lyricsResult.textContent = "Please enter both artist and song.";
		return;
	}

	fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
		.then(res => res.json())
		.then(data => {
			lyricsResult.textContent = data.lyrics || "Lyrics not found.";
		})
		.catch(() => {
			lyricsResult.textContent = "Failed to load lyrics.";
		});
});

// NASA Image of the Day
const nasaImage = document.getElementById('nasa-image');
const nasaTitle = document.getElementById('nasa-title');
const nasaDescription = document.getElementById('nasa-description');

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
	.then(res => res.json())
	.then(data => {
		if (data.media_type === "image") {
			nasaImage.src = data.url;
		} else {
			nasaImage.style.display = 'none';
		}
		nasaTitle.textContent = data.title;
		nasaDescription.textContent = data.explanation;
	})
	.catch(() => {
		nasaTitle.textContent = "Failed to load NASA image.";
	});

// Random Fact - Useless Facts API
const factButton = document.getElementById('fact-button');
const factText = document.getElementById('fact-text');
factButton.addEventListener('click', () => {
	fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
		.then(res => res.json())
		.then(data => {
			factText.textContent = data.text;
		})
		.catch(() => {
			factText.textContent = "Couldn't fetch a fact.";
		});
});

// Movie Quote - RapidAPI (replace API_KEY with your actual key)
const movieQuoteButton = document.getElementById('movie-quote-button');
const movieQuoteText = document.getElementById('movie-quote-text');
movieQuoteButton.addEventListener('click', () => {
	fetch('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote', {
		headers: {
			'X-RapidAPI-Key': RapidAPI_KEY,
			'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
		}
	})
		.then(res => res.json())
		.then(data => {
			const quote = data[0];
			movieQuoteText.textContent = `"${quote.quote}" - ${quote.author}`;
		})
		.catch(() => {
			movieQuoteText.textContent = "Failed to load movie quote.";
		});
});