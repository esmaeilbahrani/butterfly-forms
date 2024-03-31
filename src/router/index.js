import {createRouter, createWebHistory} from 'vue-router'
import PageSample from '../views/pages/page-sample.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'page-sample',
            component: PageSample
        },
    ]
})

export default router
