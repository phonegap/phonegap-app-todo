<template>
  <!--<f7-panel left :cover="isMaterial" :reveal="isiOS" :layout="isiOS?'white':'dark'">-->
  <!-- Always do a reveal effect so we can filter the items by category with the side panel, otherwise covered -->
  <f7-panel left :cover="isMaterial" reveal :layout="isiOS?'white':'dark'">
    <!-- Left panel content goes here -->
    <f7-block-title>Filter by Category</f7-block-title>
    <f7-list>
      <f7-list-group>
        <f7-list-item title="Default Categories" group-title></f7-list-item>
        <f7-list-item id='All' title="All" @click="filterCategory('All')"></f7-list-item>
        <f7-list-item id='No Category' title="No Category" @click="filterCategory('No Category')"></f7-list-item>        
      </f7-list-group>
    </f7-list>

    <f7-list>
      <f7-list-group>
        <f7-list-item title="Custom Categories" group-title></f7-list-item>
        <f7-list-item v-if="(category!='All') && (category!='No Category')" 
        v-for="category in categories" :title="category" @click="filterCategory(category)" 
        :id="category"/>        
      </f7-list-group>
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
        if (elem2 != null) {
          elem2.removeAttribute('class', 'bg-blue');
        }
        window.store.changeCategory(cat);
        var elem = document.getElementById(cat);
        if (elem != null) {
          elem.setAttribute('class', 'bg-blue');
        }
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
    },
    mounted () {
      var allElem = document.getElementById('All');
      if (allElem != null) {
        allElem.setAttribute('class', 'bg-blue');
      }
    }
  };
</script>  
