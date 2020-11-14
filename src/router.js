import Login from './pages/login'
import Register from './pages/vregister'
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register }
  ]
})

export default router;