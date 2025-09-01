import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

// Import Vuetify and its styles
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import vue-router
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes' // Make sure to create this file with your route definitions

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
