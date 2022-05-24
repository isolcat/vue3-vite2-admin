import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import AddGood from '@/views/AddGood.vue'

const router = createRouter({
    history: createWebHashHistory(), //hash模式
    routes: [{
            path: '/', //默认的地址
            name: 'index',
            component: Index
        },
        {
            path: '/add',
            name: 'add',
            component: AddGood
        }
    ]
})
export default router