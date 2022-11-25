import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import axios from "axios";
import router from "./router";
import store from "./store";
import bulma from 'bulma'

axios.defaults.baseURL = 'http://localhost:8000'

createApp(App).use(router, store, bulma).mount('#app')
