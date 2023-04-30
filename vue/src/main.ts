import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

createApp(App).mount('#app')
