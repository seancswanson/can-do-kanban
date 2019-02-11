import Vue from 'vue';
import Router from 'vue-router';
import KanbanBoard from '@/components/KanbanBoard';
import Backlog from '@/components/Backlog';
import '../style/app.scss';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/backlog',
      component: Backlog,
    },
    {
      path: '/board',
      component: KanbanBoard,
    },
    {
      path: '*',
      redirect: '/backlog',
    },
  ],
});
