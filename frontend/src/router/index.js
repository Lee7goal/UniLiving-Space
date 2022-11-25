import {createRouter, createWebHashHistory} from "vue-router";

import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import store from "../store";


const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
//         next('/login')
//     } else {
//         next()
//     }
// })

export default router;