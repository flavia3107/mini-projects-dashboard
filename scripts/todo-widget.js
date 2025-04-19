// Get Todo List (using JSONPlaceholder API)

export function getToDoItems() {
	const todoList = document.getElementById('todo-list');
	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(data => {
			todoList.innerHTML = data.sort(() => Math.random() - 0.5).slice(0, 5).map(todo => `<li class="flex-row"><span>${todo.completed ? '\u{1F7E9}' : '\u2B1C'}</span> <span>${todo.title}</span></li>`).join('');
		})
		.catch(error => {
			todoList.innerHTML = "<li>Failed to load todo list.</li>";
		});

}