async function getPlanetData() {
	const res = await fetch("https://ssd-api.jpl.nasa.gov/bodies.api");
	const data = await res.json();

	const planets = data.bodies.filter(body =>
		['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].includes(body.englishName.toLowerCase())
	);

	return planets;
}