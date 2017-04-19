<template>
  
  <f7-popup id="popup-edit" tablet-fullscreen>        
    <f7-block-title>ITEM DETAILS</f7-block-title>         
        <f7-list form>
            <f7-list-item>
                <f7-input name="title" autofocus type="text" :value="todo.title" @change="itemChanged" placeholder="What needs to be done?"/>            
            </f7-list-item>
            <f7-list-item>
                <f7-input name="category" type="text" :value="todo.category" @change="itemChanged" placeholder="Category"/>                                        
            </f7-list-item>
            <f7-list-item>
                <f7-input name="desc"  type="text" :value="todo.desc" @change="itemChanged" placeholder="Description"/>
            </f7-list-item>            
            <f7-list-item checkbox name="highlight" @change="itemChanged" :value="todo.highlight" :checked="todo.highlight" title="Highlight"></f7-list-item>
            <f7-list-item checkbox name="urgent" @change="itemChanged" :value="todo.urgent" :checked="todo.urgent" title="Urgent"></f7-list-item>                                  
        </f7-list>   
         
    <f7-button @click="updateItem()" color="green" class="btn" round big raised fill>Done</f7-button>          
  </f7-popup>    
</template>

<script>
import { updateTodo } from '../../utils/todos';
export default {
  props: ['todo'],
  name: 'todo-item',
  data () {
    return {
      todoItem: '',
      prevCat: ''
    };
  },
  watch: {
    // When the internal value changes, we $emit an event
    'todo': function () {
      console.log('Todo was set from property!!! ');
      // this.todoItem = Object.assign(this.todoItem, this.todo);
      this.todoItem = {
        ...this.todo
      };
      this.prevCat = this.todo.category;
      console.table(this.todoItem);
      // Set the local variable initial value to it then update as needed on change event
      // this.todoItem = this.todo;
      // When the internal value changes, we modify the local version since we should not update the props
      // this.$emit('input', this.todo);
    }
  },
  methods: {
    itemChanged (event) {
      console.log('!! ITEM Property Change, update local copy');
      // console.log('Todo cat ' + this.todoItem.category);
      console.table(event);
      console.log('ID ' + event.srcElement.id + ' Name ' + event.srcElement.name + ' Orig value ' + event.srcElement.value + ' default ' + event.srcElement.defaultValue);
      if (event.srcElement.name) {
        if (event.srcElement.name === 'category') {
          if (!event.srcElement.value) {
            this.todoItem[event.srcElement.name] = 'NO CATEGORY';
          } else this.todoItem[event.srcElement.name] = event.srcElement.value.toUpperCase();
          this.prevCat = event.srcElement.defaultValue;
        } else this.todoItem[event.srcElement.name] = event.srcElement.value;
      }
    },
    updateItem () {
      // const item = {id: this.todoItem.id,
      //   title: this.todoItem.title,
      //   // category: this.todoItem.category.length > 0 ? this.todo.category : 'No Category',
      //   category: 'No Category',
      //   desc: this.todoItem.desc,
      //   highlight: this.todoItem.highlight,
      //   urgent: this.todoItem.urgent,
      //   completed: false };

      // console.log('Category added for todo ' + item.category);
      // console.log('UPDATING Todo title ' + this.todoItem.title);
      // console.log('Todo vat ' + this.todoItem.category);

      if (!this.todoItem.title) {
        this.$f7.alert('Please enter a title for your todo.', 'Title Required');
      } else {
        updateTodo(this.todoItem, this.prevCat);
        this.$f7.closeModal();
      }
      // clear form fields
      // this.todo.todo = ''; this.todo.category = ''; this.todo.desc = ''; this.todo.highlight = ''; this.todo.urgent = '';
    }
    // },
    // computed: {
    //   prevCat: function () {
    //     return this.todo.category.toUpperCase();
    //   }
    // }
  }
};
</script>
