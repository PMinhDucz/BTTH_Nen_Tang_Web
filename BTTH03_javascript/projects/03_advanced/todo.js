let todos = [];

function addTodo(text) { todos.push({id: Date.now(), text, done: false}); }

function deleteTodo(id) { todos = todos.filter(t => t.id !== id); }

function toggleTodo(id) { const todo = todos.find(t => t.id === id); if(todo) todo.done = !todo.done; }

function saveTodos() { localStorage.setItem('todos', JSON.stringify(todos)); }
