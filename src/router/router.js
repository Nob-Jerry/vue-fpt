import { createRouter, createWebHistory } from 'vue-router';
import Bai2 from '../Lab3/Bai2.vue';
import Bai3 from '../Lab3/Bai3.vue';
import Bai4 from '../Lab3/Bai4.vue';
import Hello from '../Lab4/Hello.vue';
import Bai3l4 from '../Lab4/Bai3.vue';
import Bai4l4 from '../Lab4/Bai4.vue';
import Bai1l5 from '../Lab5/Bai1.vue';
import Bai2l5 from '../Lab5/Bai2.vue';
import Bai3l5 from '../Lab5/Bai3.vue';

const routes = [
    // Lab 3
    {
        path: '/',
        name: 'Bai2',
        component: Bai2,
    },
    {
        path: '/bai3',
        name: 'Bai3',
        component: Bai3,
    },
    {
        path: '/bai4',
        name: 'Bai4',
        component: Bai4,
    },
    // Lab 4
    {
        path: '/hello',
        name: 'Hello',
        component: Hello,
    },
    {
        path: '/bai3l4',
        name: 'Bai3',
        component: Bai3l4,
    },
    {
        path: '/bai4l4',
        name: 'Bai4',
        component: Bai4l4,
    },
    // Lab 5
    {
        path: '/bai1l5',
        name: 'Bai1',
        component: Bai1l5,
    },
    {
        path: '/bai2l5',
        name: 'Bai2',
        component: Bai2l5,
    },
    {
        path: '/bai3l5',
        name: 'Bai3',
        component: Bai3l5,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;