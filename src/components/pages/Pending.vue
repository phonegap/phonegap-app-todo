<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title> 
    <f7-list v-if="todos.length > 0">      
      <f7-list-item v-for="(todo, key) in todos" :key="key" v-if="displayItem(todo)"
        :checked="(todo.completed ? true : false)" :data-index="key"
        @click="onToggle(todo,key)" :title="(todo.urgent ? '<b><font color=red>!!</font></b> ' + todo.title : todo.title)" :class="[todo.highlight ? 'bg-yellow' : '']" swipeout checkbox>        
      <f7-swipeout-actions>
        <f7-swipeout-button close @click="onItemEdited(todo)" color="green">Edit</f7-swipeout-button>
        <f7-swipeout-button close @click="onItemDeleted(todo)" color="red">Delete</f7-swipeout-button>           
      </f7-swipeout-actions>  
      </f7-list-item>      
    </f7-list>       
    <todo-item :todo="item"/>          
    </f7-block>
  </div>
</template>

<script>
  import UpdateTodo from './UpdateTodo';
  import { removeTodo, toggleTodo } from '../../utils/todos';
  export default {
    components: {
      'todo-item': UpdateTodo
    },
    name: 'Pending',
    data () {
      return {
        todos: window.store.todos,
        title: 'Pending Items',
        sharedState: window.store.state,
        store: window.store,
        isPending: true,
        item: ''
      };
    },
    methods: {
      onItemDeleted (todo) {
        removeTodo(todo);
      },
      onItemEdited (todo) {
        this.item = todo;
        this.$f7.popup('#popup-edit', true, true);
      },
      // Toggle completed status
      onToggle (todo, key) {
        if (event.srcElement.classList.contains('icon-form-checkbox')) {
          setTimeout(function () { toggleTodo(key); }, 140);
        } else event.preventDefault();
      },
      displayItem (todo) {
        return (!todo.completed) && (todo.category === this.sharedState.selectedCategory || this.sharedState.selectedCategory === 'ALL');
      }
    }
  };
</script>
