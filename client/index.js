
import 'babel-polyfill'

import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/index.js'


import axios from 'axios'
window.axios = axios

let router = new Router({
    routes,
})

import app from './src/App.vue'
new Vue({
    router,
    render: (h)=>{
        return h(app)
    },
}).$mount('#app')