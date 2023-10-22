const { createApp } = require('vue');

import App from './App.vue';
import createRouter from './router';
import Axios from 'axios';

const app = createApp(App).use(createRouter());

app.config.globalProperties.$http = Axios;
app.mount('#app');
