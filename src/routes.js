// default
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


// Pages
import Home from '@/pages/Home'

// Routering
export default new Router({
    mode: 'history',
    
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})