import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faCheck, faShoppingCart, faTrashAlt, faClose } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faTrashAlt, faShoppingCart, faCartPlus, faClose);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
