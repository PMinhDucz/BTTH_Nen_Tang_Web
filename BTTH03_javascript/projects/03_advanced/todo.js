let todos = [];

function addTodo(text) { todos.push({id: Date.now(), text, done: false}); }

function deleteTodo(id) { todos = todos.filter(t => t.id !== id); }
