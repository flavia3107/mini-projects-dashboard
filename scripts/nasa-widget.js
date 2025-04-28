// NASA Image of the Day
export async function getNasaImage() {
	const nasaImage = document.getElementById('nasa-image');
	const nasaTitle = document.getElementById('nasa-title');
	const nasaDescription = document.getElementById('nasa-description');

	const handleResponse = (data) => {
		nasaImage.src = data && data.media_type === "image" ? data.url : 'images/earth.webp';
		nasaTitle.textContent = data?.title || 'Failed to load';
		nasaDescription.textContent = data?.explanation || '';
	};
	const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API}`);
	const data = response.ok ? await response.json() : null;
	handleResponse(data);
}