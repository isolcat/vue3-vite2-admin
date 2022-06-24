import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddGood from '@/views/AddGood.vue'
import Login from '@/views/Login.vue'
import Swiper from '@/views/Swiper.vue'

const router = createRouter({
    history: createWebHashHistory(), // hash 模式
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/add',
            name: 'add',
            component: AddGood
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '../views/Login.vue')
        },
        {
            path: '/swiper',
            name: 'swiper',
            component: Swiper
        }
    ]
})

export default router