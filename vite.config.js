import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
    plugins: [vue(),
        //按需加载
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        //按需引入，主题色的配置需要加上importStyle:'sass'
        Components({
            resolvers: [ElementPlusResolver({
                importStyle: 'sass'
            })],
        }),
    ],
    resolve: {
        alias: {
            // @代表src目录下的别名，~代表根目录下的别名，方便在引入项目的时候不用写一长串
            '~': path.resolve(__dirname, './'),
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.vue', '.js', 'jsx', '.json']
    },
    css: {
        preprocessorOptions: {
            // 覆盖掉element-plus包中的主题变量文件
            scss: {
                additionalData: `@use "@/styles/element/index.scss" as *;`,
            },
        },
    },
    // 解决跨域问题
    server: {
        proxy: {
            '/api': {
                target: 'http://backend-api-02.newbee.ltd/manage-api/v1', // 凡是遇到 /api 路径的请求，都映射到 target 属性
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
            }
        }
    },
})