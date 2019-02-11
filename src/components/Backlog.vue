<template>
  <div class="backlog-view">
    <new-item></new-item>
  </div>
</template>

<script>
import { mapState } from 'vuex'; // Connect to the store to retrieve our data.

import NewItemForm from './NewItemForm';

export default {
  name: 'Backlog',
  components: {
    'new-item': NewItemForm,
  },
  computed: mapState({
    items: state => state.items.todo,
  }),
};
</script>
