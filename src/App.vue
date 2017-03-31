<template>
  <!-- App -->
  <div id="app" :class="platformClass">

    <!-- Status bar overlay for fullscreen mode-->
    <f7-statusbar />

    <left-panel/>              
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
  import LeftPanel from './components/LeftPanel';

  export default {
    components: {
      'todo-item': TodoItem,
      'left-panel': LeftPanel
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
