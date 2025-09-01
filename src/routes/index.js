import Inicio from '../views/Inicio.vue'

import Municipios from '../views/Municipios.vue'
import Saltillo from '../views/Municipios/Saltillo.vue'
import Torreon from '../views/Municipios/Torreon.vue'
import Sabinas from '../views/Municipios/Sabinas.vue'

import Centralizados from '../views/Centralizados.vue'
import AdministracionFiscal from '../views/Centralizados/AdministracionFiscal.vue'
import CJYEM from '../views/Centralizados/CJYEM.vue'
import Cultura from '../views/Centralizados/Cultura.vue'

import Descentralizados from '../views/Descentralizados.vue'
import Auditoria from '../views/Descentralizados/Auditoria.vue'
import Secretaria from '../views/Descentralizados/Secretaria.vue'

const routes = [
  { path: '/', component: Inicio, name: 'Inicio' },
  { path: '/municipios', component: Municipios, name: 'Municipios' },
  { path: '/municipios/saltillo', component: Saltillo, name: 'Saltillo' },
  { path: '/municipios/torreon', component: Torreon, name: 'Torreon' },
  { path: '/municipios/sabinas', component: Sabinas, name: 'Sabinas' },
  { path: '/centralizados', component: Centralizados, name: 'Centralizados' },
  { path: '/centralizados/administracion-fiscal', component: AdministracionFiscal, name: 'AdministracionFiscal' },
  { path: '/centralizados/cjyem', component: CJYEM, name: 'CJYEM' },
  { path: '/centralizados/cultura', component: Cultura, name: 'Cultura' },
  { path: '/descentralizados', component: Descentralizados, name: 'Descentralizados' },
  { path: '/descentralizados/auditoria', component: Auditoria, name: 'Auditoria' },
  { path: '/descentralizados/secretaria', component: Secretaria, name: 'Secretaria'},
]

export default routes
