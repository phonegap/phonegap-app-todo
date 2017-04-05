<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>  
    <f7-list v-if="todos.length > 0">
      <f7-list-item v-for="(todo, key) in todos" :key="key" :checked="(todo.completed ? true : false)" v-if="displayItem(todo)"
      @click="onToggle(todo, key)" :title="todo.todo" swipeout @swipeout:deleted="onItemDeleted(todo)" checkbox>
      <f7-swipeout-actions>
        <f7-swipeout-button close @click="onItemDeleted(todo)" color="red">Delete</f7-swipeout-button>        
      </f7-swipeout-actions>        
      </f7-list-item>
    </f7-list>                     
    </f7-block>
  </div>
</template>

<script>
  import { removeTodo, toggleTodo } from '../../utils/todos';
  export default {
    name: 'Completed',
    data () {
      return {
        title: 'Completed Items',
        todos: window.store.todos,
        sharedState: window.store.state
      };
    },
    methods: {
      onItemDeleted (todo) {
        removeTodo(todo);
      },
      // Toggle completed status
      onToggle (todo, key) {
        setTimeout(function () { toggleTodo(key); }, 250);
      },
      displayItem (todo) {
        return (todo.completed) && (todo.category === this.sharedState.selectedCategory || this.sharedState.selectedCategory === 'All');
      }
    }
  };
</script>
