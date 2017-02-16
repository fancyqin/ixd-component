import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './ixd/home.vue';
import FormInput from './ixd/form/input.vue';
import FormInputAsso from './ixd/form/input-associate.vue';




const router = [
    {
        path:'/',
        component: Home
    },
    {
        path:'*',
        component: Home
    },
    {
        path:'/form/input',
        component: FormInput
    },
    {
        path:'/form/input-associate',
        component: FormInputAsso
    }
];

const routers = new VueRouter({router});

console.log(111);
export default routers;