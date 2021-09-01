import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./src/styles/style.scss";' // 添加公共样式
    }
  }
})

