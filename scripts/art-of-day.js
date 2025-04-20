export async function loadArtOfTheDay() {
	const img = document.getElementById('art-image');
	const title = document.getElementById('art-title');
	const artist = document.getElementById('art-artist');

	try {
		const response = await fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=100');
		const data = await response.json();
		const artworks = data.data;
		const art = artworks[Math.floor(Math.random() * artworks.length)];

		const imageId = art.image_id;
		const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;

		img.src = imageUrl;
		title.textContent = `"${art.title}"` || 'Untitled';
		artist.textContent = art.artist_title || 'Unknown Artist';

	} catch (error) {
		console.error('Error loading Art of the Day:', error);
		title.textContent = 'Failed to load artwork.';
		img.style.display = 'none';
	}
}