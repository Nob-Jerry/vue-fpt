import { createApp } from 'vue'
import router from './router/router.js'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faList, faFilm, faCircleExclamation, faCalendarDays, faUser, faMessage } from '@fortawesome/free-solid-svg-icons'

library.add( faList, faFilm, faCircleExclamation, faCalendarDays, faUser, faMessage )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')
