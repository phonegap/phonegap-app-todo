/* global store localStorage */
const STORAGE_KEY = 'pg-todos';
// Set up initial set of todos and categories if found in local storage
export const todoStorage = {
  categories: [],
  fetch () {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    this.addCategories(todos); // Add the initial set of categories
    return todos;
  },
  save (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
  addCategories (todos) {
    todos.filter((todo) => {
      if (this.categories.indexOf(todo.category.toUpperCase()) === -1) {
        this.categories.push(todo.category.toUpperCase());
      }
    });
  }
};

export function updateTodo (todo, prevCat) {
  console.log('Update todo with id ' + todo.id);
  // Need to find the index of the object with the matching id and then update it
  // then use it again in the splice to trigger the deep update in the lists
  var todoIndex = store.todos.findIndex(function (item) { return item.id === todo.id; });
  if (todoIndex > -1) {
    store.todos[todoIndex] = todo;
    // Force the update in the list - need this line or the Vue.set command
    // https://vuejs.org/v2/guide/list.html#Caveats
    store.todos.splice(todoIndex, 1, todo);
    if (todo.category !== prevCat) {
      // Look for existence of the previous category and if not found in any others remove it
      var prevIndex = store.todos.findIndex(function (item) { return item.category === prevCat; });
      if (prevIndex === -1 && prevCat !== 'NO CATEGORY') {
        var catIndex = store.state.categories.indexOf(prevCat.toUpperCase());
        if (store.state.selectedCategory === prevCat) {
          window.store.changeCategory('ALL');
        }
        store.state.categories.splice(catIndex, 1);
      }
      // Look for existence of the new category and if not found add it to store
      if (store.state.categories.indexOf(todo.category.toUpperCase()) === -1) {
        store.state.categories.push(todo.category.toUpperCase());
      }
    }
    saveTodosToLocalStorage();
  }
}

export function addTodo (todo) {
  store.todos.push(todo);
  console.log('Adding todo with id ' + todo.id);
  store.todos.filter((todo) => {
    if (store.state.categories.indexOf(todo.category.toUpperCase()) === -1) {
      store.state.categories.push(todo.category.toUpperCase());
    }
  });
  saveTodosToLocalStorage();
}

export function saveTodosToLocalStorage () {
  todoStorage.save(store.todos);
}

export function removeTodo (todo) {
  var idx = store.todos.indexOf(todo);
  console.log('Remove todo at index ' + idx);
  store.todos.splice(idx, 1);
  var elem = document.getElementById(todo.category);
  if (elem != null) {
    var catIndex = store.todos.indexOf(todo);
    store.state.categories.splice(catIndex, 1);
  }
  saveTodosToLocalStorage();
}

export function toggleTodo (key) {
  store.todos[key].completed = !store.todos[key].completed;
  saveTodosToLocalStorage();
}
