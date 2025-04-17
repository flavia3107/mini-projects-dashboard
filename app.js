
// Get Random Quote
const quoteButton = document.getElementById('quote-button');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
quoteButton.addEventListener('click', randomQuoteCallback);

// Get Todo List (using JSONPlaceholder API)
const todoList = document.getElementById('todo-list');
fetch('https://jsonplaceholder.typicode.com/todos')
	.then(response => response.json())
	.then(data => {
		todoList.innerHTML = data.sort(() => Math.random() - 0.5).slice(0, 5).map(todo => `<li class="flex-row"><span>${todo.completed ? '\u{1F7E9}' : '\u2B1C'}</span> <span>${todo.title}</span></li>`).join('');
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
		updateChart(bmi);
	} else {
		bmiResult.textContent = "Please enter valid values!";
	}
});

// Get Random Cat Image
const catButton = document.getElementById('cat-button');
const petImage = document.getElementById('pet-image');
catButton.addEventListener('click', () => {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			petImage.src = data[0].url;
		})
		.catch(error => {
			petImage.src = "";
			alert("Failed to load cat image!");
		});
});

// Get Random Dog Image
const dogButton = document.getElementById('dog-button');
dogButton.addEventListener('click', dogCallback);

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

	fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`)
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

function dogCallback() {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => {
			petImage.src = data.message;
		})
		.catch(error => {
			petImage.src = "";
			alert("Failed to load dog image!");
		});
}

function movieQuoteCallback() {
	const handleResponse = (data) => {
		const quote = data || MOVIE_QUOTES[Math.floor(Math.random() * MOVIE_QUOTES.length)];
		console.log('MOVIE_QUOTES', data)
		movieQuoteText.textContent = `"${quote.quote}"`;
		movieActor.textContent = `(${quote.actor})`;
		movieCharacter.textContent = quote.character;
		movieMovieTitle.textContent = quote.quoteFrom;
		movieReleaseYear.textContent = `(${quote.year})`;
	}
	fetch('https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote', {
		headers: {
			'X-RapidAPI-Key': RapidAPI_KEY,
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

function randomQuoteCallback() {
	const handleResponse = (data) => {
		const quote = data || QUOTES[Math.floor(Math.random() * QUOTES.length)];
		quoteText.textContent = `${quote.split(" - ")[0]}`;
		quoteAuthor.textContent = `~${quote.split(" - ")[1]}`;
	}

	fetch('https://quotes85.p.rapidapi.com/getrandomquote',
		{
			headers: {
				'X-RapidAPI-Key': RapidAPI_KEY,
				'X-RapidAPI-Host': 'quotes85.p.rapidapi.com'
			}
		})
		.then(res => res.ok ? res.text() : null)
		.then(data => handleResponse(data))
		.catch(error => handleResponse(null));
}

function updateChart(bmiResult) {
	let bmiCategory;
	if (bmiResult < 18.5) {
		bmiCategory = 'Underweight';
	} else if (bmiResult >= 18.5 && bmiResult < 24.9) {
		bmiCategory = 'Normal weight';
	} else if (bmiResult >= 25 && bmiResult < 29.9) {
		bmiCategory = 'Overweight';
	} else {
		bmiCategory = 'Obesity';
	}


	Highcharts.chart('container', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: '',
		},
		exporting: {
			enabled: false // Disable the menu
		},
		tooltip: {
			useHTML: true,
			formatter: function () {
				return `<b>${this.point.name}</b><br>BMI Range: <b>${this.point.range}</b>`;
			}
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: false,
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%'
			}
		},
		series: [{
			type: 'pie',
			name: 'BMI Results',
			innerSize: '50%',
			data: [
				{
					name: 'Underweight',
					y: 25,
					range: '< 18.5',
					color: '#ADD8E6'
				},
				{
					name: 'Normal weight',
					y: 25,
					range: '18.5 – 24.9',
					color: '#32CD32'
				},
				{
					name: 'Overweight',
					y: 25,
					range: '25.0 – 29.9',
					color: '#FFD700'
				},
				{
					name: 'Obesity',
					y: 25,
					range: '30.0 and above',
					color: '#FF6347'
				}
			],
			colors: ['#ADD8E6', '#32CD32', '#FFD700', '#FF6347'], // Custom colors for each section

		}]
	}, function (chart) {
		// Find the correct slice based on the BMI result
		let sliceIndex;

		switch (bmiCategory) {
			case 'Underweight':
				sliceIndex = 0;
				break;
			case 'Normal weight':
				sliceIndex = 1;
				break;
			case 'Overweight':
				sliceIndex = 2;
				break;
			case 'Obesity':
				sliceIndex = 3;
				break;
		}

		// Select the slice
		chart.series[0].data[sliceIndex].select(true); // Select the corresponding slice
	});

}

dogCallback();
movieQuoteCallback();
randomFactCallback();
randomJokeCallback();
randomQuoteCallback();
getNasaImage();