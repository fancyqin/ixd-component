import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routers';
import App from './App.vue';

Vue.use(VueRouter);

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