
const routers = [
    {
        path:'/',
        component: require('./ixd/home.vue')
    },
    {
        path:'/form/input',
        component: require('./ixd/form/input.vue')
    },
    {
        path:'/form/input-associate',
        component: require('./ixd/form/input-associate.vue')
    },
    {
        path:'/form/textarea',
        component: require('./ixd/form/textarea.vue')
    },
    {
        path:'/form/placeholder',
        component: require('./ixd/form/placeholder.vue')
    }
];

export default routers;