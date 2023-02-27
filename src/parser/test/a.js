export default routes = {
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/1',
            component: () => import('1.vue'),
        },
        {
            path: '/2',
            component: () => import('2.vue'),
        }]
}