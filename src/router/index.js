import Vue from 'vue';
import Router from 'vue-router';
import '../style/app.scss';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
    },
  ],
});
