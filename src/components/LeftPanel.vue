<template>
  <f7-panel left :cover="isMaterial" :reveal="isiOS" layout="dark">
    <!-- Left panel content goes here -->
    <f7-block-title>DEFAULT</f7-block-title>
    <f7-list>
    <f7-list-item title="All" @click="filterCategory('All')"></f7-list-item>
    <f7-list-item title="No Category" @click="filterCategory('No Category')"></f7-list-item>        
    </f7-list>
    <f7-block-title>CUSTOM</f7-block-title>
    <f7-list>
    <f7-list-item v-for="category in categories" :title="category" @click="filterCategory(category)"/>        
    </f7-list>
  </f7-panel>
</template>
<script>
  export default {
    name: 'left-panel',
    data () {
      return {
        sharedState: window.store.state,
        isMaterial: window.isMaterial,
        isiOS: window.isiOS,
        categories: window.store.state.categories
      };
    },
    methods: {
      filterCategory (cat) {
        window.store.changeCategory(cat);
      }
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
