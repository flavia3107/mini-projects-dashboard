
// Get Random Cat Image
export function getRandomPetImage() {
	const catButton = document.getElementById('cat-button');
	catButton.addEventListener('click', catCallback);

	const dogButton = document.getElementById('dog-button');
	dogButton.addEventListener('click', dogCallback);

	dogCallback();
}

function dogCallback() {
	const petImage = document.getElementById('pet-image');
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

function catCallback() {
	const petImage = document.getElementById('pet-image');
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			petImage.src = data[0].url;
		})
		.catch(error => {
			petImage.src = "";
			alert("Failed to load cat image!");
		});
}