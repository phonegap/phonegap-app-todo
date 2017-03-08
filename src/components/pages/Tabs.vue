<template>
  <!--<f7-page with-subnavbar>-->
  <f7-page>
    <!-- check out why this is going on with the sliding attribute not showing the navbar on ios when the v-if is in there -->
    <!--<f7-navbar title="Home" sliding />-->
    <!--<f7-navbar v-if="isiOS" sliding>-->
    <f7-navbar sliding>
      <f7-nav-left>
        <f7-link icon-f7="bars" open-panel="left"></f7-link>
      </f7-nav-left>
      <f7-nav-center>Todo List</f7-nav-center>
      <f7-nav-right>
        <f7-link icon-f7="add" ></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <!-- iOS TabBar has icons, Material TabBar does not -->
    <f7-toolbar tabbar :labels="isiOS">
        <f7-link :icon-f7="isiOS ? 'list' : ''" text="Pendng" tab-link="#pending" active></f7-link>
        <f7-link :icon-f7="isiOS ? 'check' : ''" text="Completed" tab-link="#completed"></f7-link>
    </f7-toolbar>

    <!--<f7-tabs swipeable>-->
    <f7-tabs>
      <f7-tab id="pending" active>
        <pending-page />
      </f7-tab>
      <f7-tab id="completed">
        <completed-page />
      </f7-tab>      
    </f7-tabs>

  </f7-page>
</template>

<script>
  import Pending from './Pending';
  import Completed from './Completed';
  // import Services from './Services';

  export default {
    name: 'Tabs',
    components: {
      'pending-page': Pending,
      'completed-page': Completed,
      // 'services-page': Services,
    },
    computed: {
      isiOS() {
        return window.isiOS;
      },
      isMaterial() {
        return window.isMaterial;
      },
    },
  };
</script>
