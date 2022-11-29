import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Vuex from 'vuex'


import './assets/main.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8000'
app.use(Vuex)
app.use(router, axios)

app.mount('#app')
