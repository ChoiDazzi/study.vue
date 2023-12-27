import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './plugins/axios'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(axios)
  .use(vuetify)
  .mount('#app')
