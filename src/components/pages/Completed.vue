<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>       
      <f7-list>
        <f7-list-item checkbox name="my-checkbox" value="1" title="Learn PhoneGap" swipeout @swipeout:deleted="onItemDeleted">
          <f7-swipeout-actions>
            <f7-swipeout-button delete>Delete</f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
        <f7-list-item checkbox name="my-checkbox" value="2" title="Go to Bank" swipeout @swipeout:deleted="onItemDeleted">
          <f7-swipeout-actions>
            <f7-swipeout-button delete>Delete</f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
      </f7-list>      
    </f7-block>
  </div>
</template>

<script>
  export default {
    name: 'Completed',
    data() {
      return {
        title: 'Completed Items',
      };
    },
    methods: {
      onItemDeleted() {
      },
    },
  };
</script>
