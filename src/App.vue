
<template>
  <div id="app">
    <div class="header">
      <h1 class="title">Can-Do Kanban</h1> <!-- Icon here? -->
      <p>A Kanban board for project organization, written in Vue.js.</p>
    </div>
    <menu-bar></menu-bar>
    <router-view/>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar';

export default {
  name: 'App',
  components: {
    'menu-bar': MenuBar,
  },
};
</script>
