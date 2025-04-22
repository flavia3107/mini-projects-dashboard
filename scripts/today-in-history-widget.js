export async function loadHistoryWidget() {
	const container = document.querySelector('#history-widget');
	try {
		const response = await fetch('https://history.muffinlabs.com/date');
		const data = await response.json();

		const events = data.data.Events.slice(0, 3); // Get first 3 events

		container.innerHTML = `
			<h3>Today in History (${data.date})</h3>
			<ul>
				${events.map(event => `
					<li>
						<strong>${event.year}</strong>: ${event.text}
						${event.links.length > 0 ? `<a href="${event.links[0].link}" target="_blank">[read more]</a>` : ''}
					</li>
				`).join('')}
			</ul>
		`;
	} catch (error) {
		container.innerHTML = `<p>Something went wrong. Try again later.</p>`;
		console.error('History Widget Error:', error);
	}
}
