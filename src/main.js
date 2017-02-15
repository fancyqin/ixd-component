import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);  


import App from './App.vue'
import Home from './ixd/home.vue'
import FormText from './ixd/form/text.vue'

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/form/text',
        component: FormText
    }
]

const router = new VueRouter({routes});



new Vue({
    el: '#app',
    render: h => h(App),
    router,
    watch:{
        '$route'(to, from){
            const toDepth = to.path.split('/').length;
            const fromDepth = from.path.substring(0,from.path.length-2).split('/').length;
            
        }
    }
})