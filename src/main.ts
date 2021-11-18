import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { createI18n } from 'vue-i18n'
import { messages } from './lang'

library.add(faEllipsisV)
library.add(faLanguage)

const i18n = createI18n({
    locale: 'pt',
    messages
})

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .use(i18n)
    .mount('#app')
