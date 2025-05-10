import { createApp } from 'vue';
import './css/main.css';
import App from './App.vue';
import store from './store/store';

const app = createApp(App);
app.use(store);
app.mount('#app');
