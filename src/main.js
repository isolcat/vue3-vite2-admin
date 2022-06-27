import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// 引入主题文件
import '~/theme/index.css'
const app = createApp(App)

app.use(router) //引入路由实例


app.mount('#app')
app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            // 当 url 以 http 开头时候，我们返回原路径
            return url
        } else {
            // 否则，我们给路径添加 host，如下
            url = `http://backend-api-02.newbee.ltd${url}`
            return url
        }
    }
}
app.config.globalProperties.goTop = function() {
    const main = document.querySelector('.main')
    main.scrollTop = 0
}