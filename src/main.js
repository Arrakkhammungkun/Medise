// frontend/src/main.js

import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = (err, vm, info) => {
    console.error('Error:', err);
    console.error('Info:', info);
};

app.use(createPinia())
app.use(router)

app.mount('#app')
