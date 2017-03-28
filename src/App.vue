<template>
  <!-- App -->
  <div id="app" :class="platformClass">

    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar />
    
    <!-- Left Panel with Reveal effect -->
    <f7-panel left reveal layout="dark">
      <!-- Left panel content goes here -->
      <f7-block-title>DEFAULT</f7-block-title>
      <f7-list>
        <f7-list-item title="All"></f7-list-item>
        <f7-list-item title="No Category"></f7-list-item>        
      </f7-list>
      <f7-block-title>CUSTOM</f7-block-title>
      <f7-list>
        <!--<f7-list-item title="Work"></f7-list-item>
        <f7-list-item title="Personal"></f7-list-item>-->
        <f7-list-item v-for="category in categories" :title="category"/>        
      </f7-list>
    </f7-panel>
    
    <!-- Views-->
    <f7-views toolbar-through layout="dark">
      <!-- Main view-->
      <f7-view url="/" :init="true" id="main-view" :dynamic-navbar="true" navbar-through main>
        <f7-navbar sliding>
          <f7-nav-left>
            <f7-link icon-f7="bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center>Todo List</f7-nav-center>
          <f7-nav-right>
            <f7-link icon-f7="add" open-popup="#popup-new"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        
        <f7-pages />   
      </f7-view>      
      <todo-item/>              
    </f7-views>
  </div>
</template>

<script>
  import TodoItem from './components/pages/TodoItem';
  import { getCategories } from './utils/todos';

  export default {
    components: {
      'todo-item': TodoItem
    },
    name: 'App',
    data () {
      return {
        categories: getCategories()
      };
    },
    computed: {
      isiOS () {
        return window.isiOS;
      },
      platformClass () {
        return window.isiOS ? 'ios' : 'material';
      }
    }
  };
</script>
