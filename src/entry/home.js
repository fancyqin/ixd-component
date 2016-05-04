var Vue = require('vue');
var App = require('../views/home.vue');

new Vue({
    el:'body',
    components:{
        app:App
    }
})