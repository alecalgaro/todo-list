const form = document.getElementById("form");
const input_todo = document.getElementById("input_todo");
const todosUL = document.getElementById("todos");

const allTodos = JSON.parse(localStorage.getItem("todos"));

if (allTodos) {
	allTodos.forEach((todo) => {
		addTodo(todo);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input_todo.value;

	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoLi = document.createElement("li");
		todoLi.innerText = todoText;
		todoLi.classList.add(
			"border-t-2",
			"border-solid",
			"text-2xl",
			"text-black",
			"py-4",
			"px-8",
			"cursor-default"
		);

		if (todo && todo.completed) {
			todoLi.classList.add("line-through", "text-grey");
		}

		todoLi.addEventListener("click", () => {
			todoLi.classList.toggle("line-through");
			todoLi.classList.toggle("text-grey");
			updateTodos();
		});

		todoLi.addEventListener("contextmenu", (e) => {
			e.preventDefault();

			todoLi.remove();
			updateTodos();
		});

		todosUL.appendChild(todoLi);
		input_todo.value = "";

		updateTodos();
	}
}

function updateTodos() {
	todoItems = document.querySelectorAll("li");
	const list_todos = [];

	todoItems.forEach((todoItem) => {
		list_todos.push({
			text: todoItem.innerText,
			completed: todoItem.classList.contains("line-through"),
		});
	});

	localStorage.setItem("todos", JSON.stringify(list_todos));
}
