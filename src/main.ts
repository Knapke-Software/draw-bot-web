import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './reveal'
import { inject } from '@vercel/analytics'

createApp(App).directive('reveal', vReveal).mount('#app')

inject()
