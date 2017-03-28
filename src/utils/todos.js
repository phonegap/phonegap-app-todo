/* global store localStorage */
const STORAGE_KEY = 'pg-todos';
export const todoStorage = {
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    for (var x = 0; x < todos.length; x++) {
      console.log('Set id to ' + x);
      todos[x].id = x;
    }
    todoStorage.uid = todos.length;
    return todos;
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};

export function addTodo (todo) {
  store.todos.push(todo);
  saveTodosToLocalStorage();
}

export function saveTodosToLocalStorage () {
  todoStorage.save(store.todos);
}

export function removeTodo (todo) {
  var idx = store.todos.indexOf(todo);
  store.todos.splice(idx, 1);
  saveTodosToLocalStorage();
}

export function toggleTodo (key) {
  store.todos[key].completed = !store.todos[key].completed;
  console.log('Toggle item with key of ' + key);
  saveTodosToLocalStorage();
}

export function getCategories () {
  const cats = [];
  store.todos.filter((todo) => {
    console.log('Todo category ' + todo.category);
    if (cats.indexOf(todo.category) === -1) {
      cats.push(todo.category);
      // return todo.category;
    }
  });
  return cats;
}
