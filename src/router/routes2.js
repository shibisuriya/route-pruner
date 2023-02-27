export default [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')

    },
    {
        path: '/profile',
        component: () => import('../views/ProfileView.vue')
    },
]