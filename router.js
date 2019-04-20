import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

Vue.use(Router);

const routes = [
    {
        component: index,
        path: '/',
    }
];

const appRouter = new Router({
    mode: 'history',
    base: '/',
    routes,
})

export function createRouter() {
    return appRouter
}
