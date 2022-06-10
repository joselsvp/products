import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import ('./components/Home.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('./components/Contact')
    },
    {
        path: '/edit',
        name: 'edit',
        component: () => import('./components/products/EditProduct')
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
