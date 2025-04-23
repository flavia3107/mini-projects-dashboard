export async function loadHistoryWidget() {
	const container = document.querySelector('#history-widget');
	try {
		const response = await fetch('https://history.muffinlabs.com/date');
		const data = await response.json();

		const events = data.data.Events.slice(0, 3); // Get first 3 events

		container.innerHTML = `
			<h3 class="flex-row space_between"><span>Today in History</span><span>${data.date}</span></h3>
			<ul class="timeline">
				${events.map(event => `
					<li class="flex-row history-items timeline-year">
						<strong class="timeline-event">${event.year}</strong>
						<span class="event-details"> ${event.text}</span>
						 <span class="flex-column end">${event.links.length ? `<a href="${event.links[0].link}" target="_blank">more</a>` : ''}</span>
					</li>
				`).join('')}
			</ul>
		`;
	} catch (error) {
		container.innerHTML = `<p>Something went wrong. Try again later.</p>`;
		console.error('History Widget Error:', error);
	}
}
