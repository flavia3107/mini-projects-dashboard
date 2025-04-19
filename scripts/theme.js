export function setTheme() {
	const buttons = document.querySelectorAll('#theme-toggle button');
	const savedTheme = localStorage.getItem('theme') || 'light';
	applyTheme(savedTheme);

	buttons.forEach((btn) => {
		btn.classList.toggle('active', btn.dataset.theme === savedTheme);
		btn.addEventListener('click', handleThemeCallback);
	});

	function handleThemeCallback() {
		const selectedTheme = this.dataset.theme;
		applyTheme(selectedTheme);
		localStorage.setItem('theme', selectedTheme);

		buttons.forEach(b => b.classList.remove('active'));
		this.classList.add('active');
	}
}

function applyTheme(theme) {
	document.body.classList.remove('theme-light', 'theme-dark', 'theme-forest');
	document.body.classList.add(`theme-${theme}`);
}