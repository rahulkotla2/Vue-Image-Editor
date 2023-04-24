import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import ThresHold from './components/ThresHold.vue'
import BaseTransform from './components/Geomteric/BaseTransform.vue'
import BaseLoader from './components/BaseLoader.vue'
import EditingPage from './components/EditingPage';
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'
library.add(faCoffee)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('base-loader', BaseLoader)
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/Edit',
            component: EditingPage
        },
        {
            path: '/thresh',
            component: ThresHold
        },
        {
            path: '/geometric/:id',
            component: BaseTransform,
            props: true,
        }
    ]
})

app.use(router);
app.mount('#app');
