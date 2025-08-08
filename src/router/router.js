import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // Lab 3
    {
        path: '/',
        name: 'Bai2l3',
        component: () => import("../Lab3/demo.vue"),
    },
    {
        path: '/bai3',
        name: 'Bai3l3',
        component: () => import("../Lab3/Bai3.vue"),
    },
    {
        path: '/bai4',
        name: 'Bai4l3',
        component: () => import("../Lab3/Bai4.vue"),
    },
    // Lab 4
    {
        path: '/hello',
        name: 'Hello',
        component: () => import("../Lab4/Hello.vue"),
    },
    {
        path: '/bai3l4',
        name: 'Bai3l4',
        component: () => import("../Lab4/Bai3.vue"),
    },
    {
        path: '/bai4l4',
        name: 'Bai4l4',
        component:  () => import("../Lab4/Bai4.vue"),
    },
    // Lab 5
    {
        path: '/bai1l5',
        name: 'Bai1l5',
        component:  () => import("../Lab5/Bai1.vue"),
    },
    {
        path: '/bai2l5',
        name: 'Bai2l5',
        component: () => import("../Lab5/Bai2.vue"),
    },
    {
        path: '/bai3l5',
        name: 'Bai3l5',
        component: () => import("../Lab5/Bai3.vue"),
    },
    {
        path: '/blog',
        name: 'BlogPage',
        component: () => import("../Lab5/BlogPage.vue"),
    },
    // Lab 6
    {
        path: '/bai1l6',
        name: 'Bai1l6',
        component: () => import("../Lab6/Bai1.vue"),
    },
    {
        path: '/bai2l6',
        name: 'Bai2l6',
        component: () => import("../Lab6/Bai2.vue"),
    },
    {
        path: '/bai3l6',
        name: 'Bai3l6',
        component: () => import("../Lab6/Bai3.vue"),
    },
    {
        path: '/bai4l6',
        name: 'Bai4l6',
        component: () => import("../Lab6/Bai4.vue"),
    },
    {
        path: '/demo',
        name: 'Demo',
        component: () => import("../Lab6/demo.vue"),
    },
    // Lab 7
    {
        path: '/bai1l7',
        name: 'Bai1l7',
        component: () => import("../Lab7/Bai1.vue"),
    },
    {
        path: '/bai2l7',
        name: 'Bai2l7',
        component: () => import("../Lab7/Bai2.vue"),
    },
    {
        path: '/bai3l7',
        name: 'Bai3l7',
        component: () => import("../Lab7/Bai3.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;