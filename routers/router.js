import {createRouter , createWebHistory} from 'vue-router'

import Home from '../src/components/Home.vue'
import About from '../src/components/About.vue'
import Contactus from '../src/components/Contactus.vue'
import Phonebook from '../src/components/Phonebook.vue'
import ContactDetails from '../src/components/ContactDetails.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/phonebook', component: Phonebook },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contactus', component: Contactus },
  { path: '/contactDetails/:id', component: ContactDetails },

]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router