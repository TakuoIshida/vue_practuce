import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Users from './components/Users'
import UsersPosts from './components/UsersPosts'
import UsersProfile from './components/UsersProfile'

Vue.use(Router)

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/", component: Home
        },
        {
            path: "/users", component: Users
        },
        {
            path: "/users/:id", 
            component: Users, 
            props: true, 
            children: [
                {path: "posts", component: UsersPosts},
                {path: "profile", component: UsersProfile, name: 'users-id-profile'},
            ]
        },
    ]
})

