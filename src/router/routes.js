export default [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')

    },
    {
        path: '/profile',
        component: () => import('../views/ProfileView.vue')
    },
    {
        path: '/about',
        component: () => import('../views/AboutView.vue')
    }
]