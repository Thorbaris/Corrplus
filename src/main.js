import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';

//Store
import store from './store'

// Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';


//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//CSS del proyecto
import '@/css/main.css';


createApp(App)
    .use (store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(VueSweetalert2)
    .mount('#app')
//Font Awesome

library.add(fas);