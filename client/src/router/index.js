
const index = () => import('../views/index.vue')
const register = () => import('../views/register.vue')
const login = () => import('../views/login.vue')

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: index,
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/login',
        component: login
    }
]

export default routes
