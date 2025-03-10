import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Basecard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'
import store from './components/store/store'
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.component('base-card', Basecard)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.mount('#app')
