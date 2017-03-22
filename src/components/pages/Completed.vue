<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>  
    <f7-list v-if="todos.length > 0">
      <f7-list-item v-for="(todo, key) in todos" :key="key" v-bind:todo="todo"
      :checked="(todo.completed ? true : false)" v-show="todo.completed"
      @click="onToggle(key)" :title="todo.todo" swipeout @swipeout:deleted="onItemDeleted(todo)" checkbox>
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
        todos: window.store.todos
      };
    },
    methods: {
      onItemDeleted (todo) {
        removeTodo(todo);
      },
      // Set completed status
      onToggle: function (key) {
        toggleTodo(key);
      }
    }
  };
</script>
