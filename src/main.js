import Vue from 'vue';
import App from './App.vue';
import router from './routers';

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