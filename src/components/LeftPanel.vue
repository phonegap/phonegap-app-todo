<template>
  <f7-panel left :cover="isMaterial" :reveal="isiOS" layout="dark">
    <!-- Left panel content goes here -->
    <div class="list-block-label">DEFAULT</div> 
    
    <f7-list>
    <f7-list-item title="All" @click="filterCategory('All')"></f7-list-item>
    <f7-list-item title="No Category" @click="filterCategory('No Category')"></f7-list-item>        
    </f7-list>
    <div class="list-block-label">CUSTOM</div> 
    <f7-list>
    <f7-list-item v-if="(category!='All') && (category!='No Category')" v-for="category in categories" :title="category" @click="filterCategory(category)" :id="category"/>        
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
        categories: window.store.state.categories,
        prevCat: 'All'
      };
    },
    methods: {
      filterCategory (cat) {
        var elem2 = document.getElementById(this.prevCat);
        elem2.removeAttribute('class', 'bg-blue');
        window.store.changeCategory(cat);
        var elem = document.getElementById(cat);
        elem.setAttribute('class', 'bg-blue');
        this.prevCat = cat;
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
