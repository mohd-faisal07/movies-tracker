import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Basecard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import store from './components/store/store'

const app = createApp(App)

app.use(router)
app.component('base-card', Basecard)
app.component('base-button', BaseButton)
app.use(store)

app.mount('#app')
