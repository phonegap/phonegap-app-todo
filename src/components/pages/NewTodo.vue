<template>
  
  <f7-popup id="popup-new" tablet-fullscreen>        
    <f7-block-title>ITEM DETAILS</f7-block-title>        
        <f7-list form>
            <f7-list-item>
                <f7-input autofocus type="text" v-model="title" placeholder="What needs to be done?"/>            
            </f7-list-item>
            <f7-list-item>
                <f7-input type="text" v-model="category" placeholder="Category"/>                                        
            </f7-list-item>
            <f7-list-item>
                <f7-input  type="text" v-model="desc" placeholder="Description"/>
            </f7-list-item>            
            <f7-list-item checkbox name="highlight" v-model="highlight" title="Highlight" :checked="highlight"></f7-list-item>
            <f7-list-item checkbox name="urgent" v-model="urgent" title="Urgent" :checked="urgent"></f7-list-item>                                  
        </f7-list>            
    <f7-button @click="addNewTodo()" color="green" class="btn" round big raised fill>Done</f7-button>          
  </f7-popup>    
</template>

<script>
import { addTodo } from '../../utils/todos';
export default {
  name: 'todo-item',
  data () {
    return {
      id: '',
      title: '',
      category: '',
      desc: '',
      highlight: false,
      urgent: false
    };
  },
  methods: {
    addNewTodo () {
      console.table(this);
      this.item = { id: Math.floor(Math.random() * 10000),
        title: this.title,
        category: this.category.length > 0 ? this.category.toUpperCase() : 'NO CATEGORY',
        desc: this.desc,
        highlight: this.highlight,
        urgent: this.urgent,
        completed: false };
      if (!this.title) {
        this.$f7.alert('Please enter a title for your todo.', 'Title Required');
      } else {
        addTodo(this.item);
        this.$f7.closeModal();
      }
      this.title = ''; this.category = ''; this.desc = ''; this.highlight = false; this.urgent = false;
    }
    // editedTodo () {
  }
  // },
  // watch: {
  //   item: function () {
  //     // When the internal value changes, we $emit an event. Because this event is
  //     // named 'input', v-model will automatically update the parent value
  //     console.log('Item changed', this.item.title);
  //   }
  // },
  // mounted () {
  //   console.log('Mounted');
  //   console.table(this.todo);
  //   this.item = this.todo;
  // }
};
</script>
