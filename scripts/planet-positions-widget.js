// scripts/planetWidget.js
const planetListEl = document.getElementById('planet-list');

export async function getPlanetData() {
	try {
		const res = await fetch("https://ssd-api.jpl.nasa.gov/bodies.api");
		const data = await res.json();

		const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
		const planets = data.bodies.filter(body => planetNames.includes(body.englishName));

		renderPlanets(planets);
	} catch (err) {
		planetListEl.innerHTML = `<li>Error loading planet data. 🚫</li>`;
		console.error(err);
	}
}

function renderPlanets(planets) {
	planetListEl.innerHTML = '';
	planets.forEach((planet) => {
		const li = document.createElement('li');
		li.innerHTML = `
      <div class="planet-row">
        <span class="planet-name">${planet.englishName}</span>
        <span class="planet-detail">${planet.gravity?.toFixed(2)} m/s²</span>
      </div>
    `;
		planetListEl.appendChild(li);
	});
}