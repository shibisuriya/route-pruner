export default [
    {
        path: '/',
        component: () => import('@/views/DashboardView.vue')

    },
    {
        path: '/contacts',
        component: () => import('@/components/ContactsComponent.vue')
    },
    {
        path: '/settings',
        component: () => import('@/views/SettingsView.vue')
    }
]