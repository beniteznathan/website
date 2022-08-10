import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue'

import router from './route';
import App from '@components/App.vue';

createApp(App)
  .use(router)
  .mount('#app');