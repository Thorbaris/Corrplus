import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';


//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//CSS del proyecto
import '@/css/main.css';

const app = createApp(App);
app.use(router);
app.mount('#app');

