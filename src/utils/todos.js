/* global store localStorage */
const STORAGE_KEY = 'pg-todos';
export const todoStorage = {
  categories: [],
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    for (var x = 0; x < todos.length; x++) {
      console.log('Set id to ' + x);
      todos[x].id = x;
    }
    todoStorage.uid = todos.length;
    this.addCategories(todos); // Add the initial set of categories
    return todos;
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
  addCategories (todos) {
    todos.filter((todo) => {
      console.log('Checking the Todo category ' + todo.category);
      if (this.categories.indexOf(todo.category) === -1) {
        console.log('Added new category ' + todo.category);
        this.categories.push(todo.category);
      }
    });
  }
};

export function addTodo (todo) {
  store.todos.push(todo);
  console.log('Added todo with category ' + todo.category);
  store.todos.filter((todo) => {
    console.log('Checking Todo category ' + todo.category);
    if (store.state.categories.indexOf(todo.category) === -1) {
      console.log('Added new category ' + todo.category);
      store.state.categories.push(todo.category);
    }
  });
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
