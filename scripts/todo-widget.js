export async function getToDoItems() {
	const todoList = document.getElementById('todo-list');

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();
		todoList.innerHTML = data
			.sort(() => Math.random() - 0.5)
			.slice(0, 5)
			.map(todo => `
				<li class="flex-row">
					<span>${todo.completed ? '\u{1F7E9}' : '\u2B1C'}</span> 
					<span>${todo.title}</span>
				</li>
			`)
			.join('');
	} catch (error) {
		todoList.innerHTML = "<li>Failed to load todo list.</li>";
	}
}