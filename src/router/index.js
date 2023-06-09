import { createRouter, createWebHashHistory } from 'vue-router'
import PageView from '../views/PageView.vue'
import InventairedeFiche from '../views/InventairedeFiche.vue'
import InscriptionView from '../views/InscriptionView.vue'
import FicheModif from '../views/FicheModif.vue'
import ConsultScearchPage from '../views/ConsultScearchPage.vue'
import ConnexionView from '../views/ConnexionView.vue'


const routes = [
  {
    path: '/PageView',
    name: 'PageView',
    component: PageView
  },
  {
    path: '/InventairedeFiche',
    name: 'InventairedeFiche',
    component: InventairedeFiche
  },
  {
    path: '/InscriptionView',
    name: 'InscriptionView',
    component: InscriptionView
  },
  {
    path: '/FicheModif',
    name: 'FicheModif',
    component: FicheModif
  },
  {
    path: '/ConnexionView',
    name: 'ConnexionView',
    component: ConnexionView
  },
  {
    path: '/',
    name: 'ConsultScearchPage',
    component: ConsultScearchPage
  },
 
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
