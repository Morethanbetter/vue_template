import { createApp } from 'vue'
import { createStore } from 'vuex'
import Antd from 'ant-design-vue'
import store from './store'
import './style.css'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'

const app = createApp(App)
app.use(store)
app.use(Antd)
app.mount('#app')
