<template>
  <div class="row">
    <div class="row-header">{{ title }}</div>
    <div class="card-well">
      <div class="card-item-container" v-for="item in items" :key="item.id">
        <item :item="item"></item>
      </div>
      <div class="card-actions">
        <div class="card action card-add-item">
          <div class="card-title">+</div>
          <div class="card-text">Create Divider</div>
        </div>
        <div class="card action card-add-item">
          <div class="card-title">+</div>
          <div class="card-text">Add Item</div>
        </div>
      </div>
    </div>
    <div class="row-footer">
      {{ itemCount }}
    </div>
  </div>
</template>

<script>
import TaskLaneItem from './TaskLaneItem';

export default {
  name: 'TaskLane',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskLaneItem,
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
  },
};
</script>
