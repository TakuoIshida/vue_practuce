import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Users from './components/Users'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: "/", component: Home
        },
        {
            path: "/users", component: Users
        },
        {
            path: "/users/:id", component: Users
        },
    ]
})

