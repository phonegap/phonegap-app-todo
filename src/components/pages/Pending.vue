<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>   
    <f7-list v-if="todos.length > 0">
      <f7-list-item v-if="!todo.completed" v-for="(todo, key) in todos" :key="key" 
        v-bind:todo="todo" :checked="(todo.completed ? true : false)"
        @click="onToggle(key)" :title="todo.todo" swipeout checkbox>        
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
    name: 'Pending',
    data () {
      return {
        todos: window.store.todos,
        title: 'Pending Items'
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
