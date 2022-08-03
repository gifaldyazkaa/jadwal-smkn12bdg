import { createRouter, createWebHistory, Router } from 'vue-router';
import { Routes } from '../types/routes';
import NProgress from 'nprogress';

import Home from '../pages/Home.vue';
import X_TE_2 from '../pages/class/x-te-2.vue';

const routes: Routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'X-TE_2',
        path: '/class/x-te-2',
        component: X_TE_2,
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) NProgress.start();
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
