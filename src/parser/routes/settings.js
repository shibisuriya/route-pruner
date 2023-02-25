export default {
    path: '/settings',
    component: () => import('settings.vue'),
    children: [
        {
            name: 'advertisement',
            path: 'advertisement',
            component: () => import('advertisement.vue'),
        },
        {
            name: 'privacy',
            path: 'privacy',
            props: true,
            component: () => import('privacy.vue'),
        },
    ],
}