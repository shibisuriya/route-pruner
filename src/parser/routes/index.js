import settings from 'settings.js'
import { dashboard } from 'dashboard.js'
const routes = {
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/profile/:userId',
            component: () => import('./Profile.vue'),
        },
        settings, dashboard]
}
export default routes
