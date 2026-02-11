export function setTheme() {
	const toggleButton = document.querySelector('#theme-toggle button');
	const icon = toggleButton.querySelector('i');
	const savedTheme = localStorage.getItem('active-theme') || 'light';
	const img = document.querySelector('.logo-img');

	applyTheme(savedTheme);
	updateIcon(savedTheme);

	toggleButton.addEventListener('click', () => {
		const currentTheme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		applyTheme(newTheme);
		localStorage.setItem('active-theme', newTheme);
		updateIcon(newTheme);
	});

	function updateIcon(theme) {
		if (theme === 'light') {
			icon.className = 'fas fa-moon';
			toggleButton.setAttribute('title', 'Switch to Dark Mode');
			img.src = 'images/logo.svg';
		} else {
			icon.className = 'fas fa-sun';
			toggleButton.setAttribute('title', 'Switch to Light Mode');
			img.src = 'images/logo-white.svg';
		}
	}
}

function applyTheme(theme) {
	document.body.classList.remove('theme-light', 'theme-dark');
	document.body.classList.add(`theme-${theme}`);
}