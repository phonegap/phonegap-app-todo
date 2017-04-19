<template>
  <!--<f7-panel left :cover="isMaterial" :reveal="isiOS" :layout="isiOS?'white':'dark'">-->
  <!-- Always do a reveal effect so we can filter the items by category with the side panel, otherwise covered -->
  <f7-panel left :cover="isMaterial" reveal :layout="isiOS?'white':'dark'">
    <!-- Left panel content goes here -->
    <f7-list>
      <f7-list-group>
        <f7-list-item title="Default Categories" group-title></f7-list-item>
        <f7-list-item id='ALL' title="ALL" 
        :class="[sharedState.selectedCategory==='ALL' ? 'bg-blue' : '']" @click="filterCategory('ALL')"/>              
        <f7-list-item id='NO CATEGORY' title="NO CATEGORY" @click="filterCategory('NO CATEGORY')" 
        :class="[sharedState.selectedCategory==='NO CATEGORY' ? 'bg-blue' : '']"/>
      </f7-list-group>
    </f7-list>

    <f7-list>
      <f7-list-group>
        <f7-list-item title="Custom Categories" group-title></f7-list-item>
        <f7-list-item v-if="(category!='ALL') && (category!='NO CATEGORY')"
        v-for="category in categories" v-bind:class="[(category===sharedState.selectedCategory) ? 'bg-blue' : '']" :title="category" 
        @click="filterCategory(category)" 
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
        categories: window.store.state.categories
      };
    },
    methods: {
      filterCategory (cat) {
        this.isActive = true;
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
    },
    mounted () {
      // var allElem = document.getElementById('ALL');
      // if (allElem != null) {
      //   allElem.setAttribute('class', 'bg-blue');
      // }
    }
  };
</script>  
