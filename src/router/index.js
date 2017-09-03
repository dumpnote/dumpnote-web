import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Logout from '@/components/Logout';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    }, {
      path: '/login',
      name: 'Log In',
      component: Login,
    }, {
      path: '/logout',
      name: 'Log Out',
      component: Logout,
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = `DumpNote | ${to.name}`;
  next();
});

export default router;
