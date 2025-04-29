export async function fetchPoem() {
	const poemContainer = document.getElementById('poem-content');
	const refreshBtn = document.getElementById('refresh-poem');
	poemContainer.innerHTML = `<p class="loading">Loading...</p>`;
	try {
		const res = await fetch('https://poetrydb.org/random');
		const data = await res.json();
		const poem = data[0];
		const { title, author, lines } = poem;

		const snippet = lines.join('<br>');

		poemContainer.innerHTML = `
      <p><strong>${title}</strong> — <em>${author}</em></p>
      <p class="poem">${snippet}</p>
    `;
	} catch (err) {
		poemContainer.innerHTML = `<p>Could not load poem. Try again.</p>`;
		console.error(err);
	}
	refreshBtn.addEventListener('click', fetchPoem);
}

