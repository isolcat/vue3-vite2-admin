import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddGood from '@/views/AddGood.vue'
import Login from '@/views/Login.vue'
import Swiper from '@/views/Swiper.vue'
import IndexConfig from '@/views/IndexConfig.vue'
import Category from '@/views/Category.vue'
import Good from '@/views/Good.vue'

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
        },
        {
            path: '/hot',
            name: 'hot',
            component: IndexConfig
        },
        {
            path: '/new',
            name: 'new',
            component: IndexConfig
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: IndexConfig
        },
        {
            path: '/category',
            name: 'category',
            component: Category,
            children: [{
                    path: '/category/level2',
                    name: 'level2',
                    component: Category,
                },
                {
                    path: '/category/level3',
                    name: 'level3',
                    component: Category,
                }
            ]
        },
        {
            path: '/good',
            name: 'good',
            component: Good
        }
    ]
})

export default router