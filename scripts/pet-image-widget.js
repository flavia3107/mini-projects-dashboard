
// Get Random Pet Image
export function getRandomPetImage() {
	const catButton = document.getElementById('cat-button');
	const dogButton = document.getElementById('dog-button');

	catButton.addEventListener('click', () => petCallback('cat'));
	dogButton.addEventListener('click', () => petCallback('dog'));

	petCallback('dog'); // Load a dog image by default
}

async function petCallback(type) {
	const petImage = document.getElementById('pet-image');

	const urls = {
		dog: 'https://dog.ceo/api/breeds/image/random',
		cat: 'https://api.thecatapi.com/v1/images/search'
	};

	try {
		const response = await fetch(urls[type]);
		const data = await response.json();

		petImage.src = type === 'dog' ? data.message : data[0].url;
	} catch (error) {
		petImage.src = "";
		alert(`Failed to load ${type} image!`);
	}
}