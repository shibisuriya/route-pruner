export default [{
  path: '/',
  component: () => import('@/views/DashboardView.vue')
}, {
  path: '*',
  component: () => import('@/views/PageNotFound.vue')
}];