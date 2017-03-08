<template>
  
  <f7-popup id="popup-new" tablet-fullscreen>        
    <f7-navbar>
        <f7-nav-left>            
        </f7-nav-left>
        <f7-nav-center sliding>Todo Item</f7-nav-center>
        <f7-nav-right>                                  
        </f7-nav-right>
    </f7-navbar>

    <!--<!--<f7-card>
        <f7-card-content>            -->
        <f7-list form>-->
            <f7-list-item>
                <f7-input type="text" v-model="todo" placeholder="What needs to be done?"/>            
            </f7-list-item>

            <f7-list-item>
                <f7-input type="text" v-model="category" placeholder="Category"/>                                        
            </f7-list-item>

            <f7-list-item>
                <f7-input id="localPath" type="text" v-model="desc" placeholder="Description"/>
            </f7-list-item>                      
        </f7-list>   
        </f7-card-content>            
    </f7-card>

    
    <f7-button @click="addTodo" color="green" class="btn" style="float: right" fill close-popup="#popup-new">Done</f7-button>          
    </f7-popup>    
</template>

<script>
export default {
  name: 'todo-item',
  // props: ['todos'],
  data () {
    return {
    }
  },
  methods: {
    addItem () {
      // let proj = {name: this.name, id: this.id, version: '1.0.0', icon: this.pgIcon, path: this.localPath}
      // this.todos.push(proj)
      // clear form fields
      // this.name = this.id = this.icon = this.localPath = ''
    }
  }
}
</script>
