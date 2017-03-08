<template>
  <div>
    <!-- Scrollable page content-->
    <f7-block-title>{{ title }}</f7-block-title>       
      <f7-list>
        <f7-list-item checkbox name="my-checkbox" value="1" title="Attend PhoneGap Day EU" swipeout @swipeout:deleted="onItemDeleted">
          <f7-swipeout-actions>
            <f7-swipeout-button delete>Delete</f7-swipeout-button>
          </f7-swipeout-actions>
        </f7-list-item>
        <f7-list-item checkbox name="my-checkbox" value="2" title="Attend PhoneGap Day US" swipeout @swipeout:deleted="onItemDeleted">
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
    name: 'Pending',
    data() {
      return {
        title: 'Pending Items',
      };
    },
    methods: {
      onItemDeleted() {
      },
    },
  };
</script>
