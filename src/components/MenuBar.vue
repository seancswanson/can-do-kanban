<template>
  <div class="menubar">
    <div class="btn-group" role="group" aria-label="Menu Bar">
      <router-link id="board-btn" to="/board">
        Board
        <span class="menu-icon"></span>
      </router-link>
      <router-link id="backlog-btn" to="/backlog">
        Backlog
        <span class="menu-icon"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
};
</script>
