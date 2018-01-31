import Vue from 'vue';
import VueRouter from 'vue-router';
import {store} from './store'
Vue.use(VueRouter);

import PlanersList from './components/PlanersList'

const routes = [
    {
       path: '',
       redirect: {name: 'planers'}
    },
    {
        path:'/planers',
        name:'planers',
        component: PlanersList
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});