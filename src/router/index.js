import {createRouter, createWebHistory} from 'vue-router'


//import your views file 'About.vue'
import About from '../views/About'
import Home from '../views/Home'


//this is how you create a route 
//every view you want to render youll need to import them into router and include in routes
const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home //this is what will be rendered
    },
    {
        path:'/about',
        name: 'About',
        component: About //this is what will be rendered
    }
]

//defining the router to export
const router= createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes //this is the array above
})

export default router