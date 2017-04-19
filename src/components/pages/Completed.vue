<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>  
    <f7-list v-if="todos.length > 0">
      <f7-list-item v-for="(todo, key) in todos" :key="key" 
        :checked="(todo.completed ? true : false)" 
        v-if="displayItem(todo)" @click="onToggle(todo, key)" 
        :title="(todo.urgent ? '<b><font color=red>!!</font></b> ' + todo.title : todo.title)" 
        :class="[todo.highlight ? 'bg-yellow' : '']" swipeout checkbox>
      <f7-swipeout-actions>
        <f7-swipeout-button close @click="onItemEdited(todo)" open-popup color="green">Edit</f7-swipeout-button>
        <f7-swipeout-button close @click="onItemDeleted(todo)" color="red">Delete</f7-swipeout-button>                   
      </f7-swipeout-actions>        
      </f7-list-item>            
    </f7-list>          
    <todo-item id="editCompleted" :todo="item"/>           
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
    name: 'Completed',
    data () {
      return {
        title: 'Completed Items',
        todos: window.store.todos,
        sharedState: window.store.state,
        item: ''
      };
    },
    methods: {
      onItemDeleted (todo) {
        removeTodo(todo);
      },
      onItemEdited (todo) {
        // this.sharedState.selectedItem = todo;
        // this.sharedState.isUpdate = true;
        // indow.store.state.isUpdate = true;
        this.item = todo;
        console.log('Item ' + this.item.title);
        this.$f7.popup('#editCompleted', true, true);
        // updateTodo(todo);
      },
      // Toggle completed status
      onToggle (todo, key) {
        if (event.srcElement.classList.contains('icon-form-checkbox')) {
          setTimeout(function () { toggleTodo(key); }, 140);
        } else event.preventDefault();
      },
      displayItem (todo) {
        return (todo.completed) && (todo.category === this.sharedState.selectedCategory || this.sharedState.selectedCategory === 'ALL');
      }
    }
  };
</script>
