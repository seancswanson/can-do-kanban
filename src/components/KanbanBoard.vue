<template>
  <div class="board">
    <task-lane title="To-do" :items="todoItems"></task-lane>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskLane from './TaskLane';

export default {
  name: 'KanbanBoard',
  components: {
    'task-lane': TaskLane,
  },
  computed: mapState({
    todoItems: state => state.items.todo,
  }),
};
</script>
