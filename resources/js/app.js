import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue'

import router from './route';
import App from '@components/App.vue';

import.meta.glob([
  '../assets/images/**',
]);

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');