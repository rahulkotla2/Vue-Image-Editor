import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import ThresHold from './components/ThresHold.vue'
import BaseTransform from './components/Geomteric/BaseTransform.vue'
import App from './App.vue'

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: HomePage
    },{
        path : '/thresh',
        component : ThresHold
    },
    {
        path : '/geometric/:id',
        component : BaseTransform,
        props :true,
    }
]
})

app.use(router);
app.mount('#app');
