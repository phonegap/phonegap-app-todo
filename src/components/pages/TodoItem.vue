<template>
  
  <f7-popup id="popup-new" tablet-fullscreen>        
    <f7-navbar>
        <f7-nav-left>            
        </f7-nav-left>
        <f7-nav-center sliding>Todo Item</f7-nav-center>
        <f7-nav-right>                                  
        </f7-nav-right>
    </f7-navbar>

    <f7-card>
        <f7-card-header>Add a new task</f7-card-header>
        <f7-card-content>            
        <f7-list form>
            <f7-list-item>
                <f7-input type="text" v-model="todo" placeholder="What needs to be done?"/>            
            </f7-list-item>
            <f7-list-item>
                <f7-input type="text" v-model="category" placeholder="Category"/>                                        
            </f7-list-item>
            <f7-list-item>
                <f7-input  type="text" v-model="desc" placeholder="Description"/>
            </f7-list-item>
            <f7-list-item checkbox name="highlight" value="1" title="Highlight"></f7-list-item>
            <f7-list-item checkbox name="urgent" value="1" title="Urgent"></f7-list-item>                      
        </f7-list>   
        </f7-card-content>            
    </f7-card>
    
    <f7-button @click="addNewTodo" color="green" class="btn" style="float: right" fill close-popup="#popup-new">Done</f7-button>          
    </f7-popup>    
</template>

<script>
import { addTodo } from '../../utils/todos';
export default {
  name: 'todo-item',
  data () {
    return {
      id: '',
      todo: '',
      category: '',
      desc: '',
      highlight: '',
      urgent: ''
    };
  },
  methods: {
    addNewTodo () {
      const item = { id: window.store.todos.length,
        todo: this.todo,
        category: this.category.length > 0 ? this.category : 'No Category',
        desc: this.desc,
        highlight: this.highlight,
        urgent: this.urgent,
        completed: false };
      // clear form fields
      console.log('Category added for todo ' + item.category);
      addTodo(item);
      this.todo = ''; this.category = ''; this.desc = ''; this.hightlight = ''; this.urgent = '';
    }
  }
};
</script>
