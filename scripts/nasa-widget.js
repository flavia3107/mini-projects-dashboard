// NASA Image of the Day

export function getNasaImage() {
	const nasaImage = document.getElementById('nasa-image');
	const nasaTitle = document.getElementById('nasa-title');
	const nasaDescription = document.getElementById('nasa-description');
	const handleResponse = (data) => {
		nasaImage.src = data && data.media_type === "image" ? data.url : 'images/earth.webp';
		nasaTitle.textContent = data.title || 'Failed to load';
		nasaDescription.textContent = data.explanation;
	}

	fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API}`)
		.then(res => res.ok ? res.json() : null)
		.then(data => handleResponse(data))
		.catch(() => {
			nasaTitle.textContent = "Failed to load NASA image.";
		});
}