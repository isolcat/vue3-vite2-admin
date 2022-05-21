import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// 引入主题文件
import '~/theme/index.css'
const app = createApp(App)

app.use(router) //引入路由实例


app.mount('#app')