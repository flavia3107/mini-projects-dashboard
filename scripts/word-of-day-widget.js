const wordList = ["serendipity", "eloquent", "solitude", "ethereal",
	"mellifluous", "effervescent", "ineffable", "epiphany", "petrichor",
	"euphoria", "limerence", "aesthete", "resilience", "tranquility", "labyrinth", "cascade",
	"luminescence", "incandescent", "equanimity", "vivacious", "benevolent", "eloquence", "solace",
	"rhapsody", "quintessential", "aurora", "zen", "nirvana", "muse", "wanderlust",
	"whimsical", "melancholy", "bliss", "enigma", "radiant", "reverie", "serene", "elegant", "celestial",
	"ambrosial", "taciturn", "bucolic", "empathy", "verdant", "harbinger", "dappled",
	"catharsis", "nocturne", "euphony", "sublime", "vestige", "alpenglow", "silhouette", "ambivalent",
	"placid", "symphony", "umbrage", "savor", "talisman", "aura", "fervor", "lullaby", "quiescent", "resonance",
	"idyllic", "vellichor", "chimera", "halcyon", "penumbra", "gossamer", "zenith", "umbra", "luminous", "solstice",
	"aegis", "cacophony", "efface", "lucid", "panacea", "ethos", "quintessence", "resplendent", "tenuous",
	"ephemeral", "cynosure", "imbue"];

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