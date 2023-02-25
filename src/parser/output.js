
    
    
    export default {
  path: '/settings',
  component: () => import('settings.vue'),
  children: [{
    name: 'advertisement',
    path: 'advertisement',
    component: () => import('advertisement.vue')
  }, {
    name: 'privacy',
    path: 'privacy',
    props: true,
    component: () => import('privacy.vue')
  }]
};
  

    
    export const dashboard = {
  path: '/settings',
  component: () => import('settings.vue'),
  children: [{
    name: 'advertisement',
    path: 'advertisement',
    component: () => import('advertisement.vue')
  }, {
    name: 'privacy',
    path: 'privacy',
    props: true,
    component: () => import('privacy.vue')
  }]
};
const someFunction = () => {
  console.log('Hello from somefunction().');
};
  
    import settings from 'settings.js';
import { dashboard } from 'dashboard.js';
const routes = {
  linkActiveClass: 'active',
  mode: 'history',
  routes: [{
    path: '/profile/:userId',
    component: () => import('./Profile.vue')
  }, settings, dashboard]
};
export default routes;
  