
import 'babel-polyfill'

import Vue from 'vue'
import Router from 'vue-router'
import routes from './src/router/index.js'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Iview)
//console.log(routes)
import axios from 'axios'
window.axios = axios

Vue.use(Router)

const router = new Router({
    routes,
})

import app from './src/App.vue'

new Vue({
    router,
    render: (h)=>{
        return h(app)
    },
}).$mount('#app')
