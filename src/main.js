import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faCheck, faShoppingCart, faTrashAlt, faClose, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faTrashAlt, faShoppingCart, faCartPlus, faShoppingBag, faClose);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
