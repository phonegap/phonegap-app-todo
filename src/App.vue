<template>
  <!-- App -->
  <div id="app" :class="platformClass">

    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar />

    <!-- Views-->
    <f7-views toolbar-through layout="dark">
      <!-- Right view, it is main view-->
      <f7-view url="/" :init="true" id="main-view" :dynamic-navbar="true" navbar-through main>
        <f7-navbar sliding>
          <f7-nav-left>
            <f7-link icon-f7="home" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center>Todo List</f7-nav-center>
          <f7-nav-right>
            <f7-link icon-f7="add" open-popup="#popup-new"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        
        <!-- Pages (replaced by router ) -->
        <f7-pages />   
      </f7-view>      
      <todo-item/>              
    </f7-views>
  </div>
</template>

<script>
  import TodoItem from './components/pages/TodoItem';

  export default {
    components: {
      'todo-item': TodoItem
    },
    name: 'App',
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
