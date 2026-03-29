import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavComponent from './components/NavComponent.vue'
import ElipseComponent from './components/ElipseComponent.vue'
import SaludoComponent from './components/SaludoComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.component('nav-component', NavComponent)
app.component('elipse-component', ElipseComponent)
app.component('saludo-component', SaludoComponent)
app.component('projects-component', ProjectsComponent)


app.mount('#app')


