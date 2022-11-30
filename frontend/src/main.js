import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from "./store"
import bulma from 'bulma'


import './assets/main.css'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8000'
app.use(store)
app.use(router, axios)
app.use(bulma)

app.mount('#app')
