const wordList = ['serendipity', 'ephemeral', 'mellifluous', 'sonder', 'epiphany'];

export async function loadWordOfTheDay() {
	const container = document.querySelector('#word-of-the-day');
	const randomWord = wordList[Math.floor(Math.random() * wordList.length)];

	try {
		const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
		const data = await res.json();
		const wordData = data[0];

		const { word, phonetic, meanings, phonetics } = wordData;
		const audio = phonetics.find(p => p.audio)?.audio;
		const definition = meanings[0]?.definitions[0]?.definition;
		const partOfSpeech = meanings[0]?.partOfSpeech;

		container.innerHTML = `
			<h3>Word of the Day</h3>
			<div class="word-card flex-column">
				<h3>${word}</h3>
				<p class="phonetic">${phonetic || ''}${audio ? `<button id="play-audio">🔊 Listen</button>` : ''}</p>
				<p><em>${partOfSpeech}</em>: ${definition}</p>
				
			</div>
		`;

		if (audio) {
			document.querySelector('#play-audio').addEventListener('click', () => {
				new Audio(audio).play();
			});
		}
	} catch (err) {
		container.innerHTML = `<p>Could not fetch the word. Please try again later.</p>`;
	}
}