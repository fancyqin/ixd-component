import Home from './ixd/home.vue';
import FormInput from './ixd/form/input.vue';
import FormInputAsso from './ixd/form/input-associate.vue';
import FormTextarea from './ixd/form/textarea.vue';

const routers = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/form/input',
        component: FormInput
    },
    {
        path:'/form/input-associate',
        component: FormInputAsso
    },
    {
        path:'/form/textarea',
        component: FormTextarea
    },
    {
        path:'/form/placeholder',
        component: resolve => require(['./ixd/form/placeholder.vue'],resolve)
    }
];

export default routers;