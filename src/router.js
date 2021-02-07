import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/About',
            component: About
        }
    ]
})  