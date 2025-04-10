// app.js

// Get Random Quote
const quoteButton = document.getElementById('quote-button');
const quoteText = document.getElementById('quote-text');
quoteButton.addEventListener('click', () => {
	fetch('https://quotes.rest/qod')
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
