<template>
  <div class="card">
    <div class="card-title">
      # {{ item.id }}
    </div>
    <div class="card-text">
      {{ item.text }}
    </div>
    <div class="card-delete">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: ['item'],
};
</script>

