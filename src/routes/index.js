import Inicio from "../views/Inicio.vue";

import Municipios from "../views/Municipios.vue";
import Acuña from "../views/Municipios/Acuna.vue";
import Allende from "../views/Municipios/Allende.vue";
import Arteaga from "../views/Municipios/Arteaga.vue";
import Candela from "../views/Municipios/Candela.vue";
import CuatroCienegas from "../views/Municipios/CuatroCienegas.vue";
import FranciscoIMadero from "../views/Municipios/FranciscoIMadero.vue";
import Frontera from "../views/Municipios/Frontera.vue";
import GeneralCepeda from "../views/Municipios/GeneralCepeda.vue";
import Hidalgo from "../views/Municipios/Hidalgo.vue";
import Jimenez from "../views/Municipios/Jimenez.vue";
import Muzquiz from "../views/Municipios/Muzquiz.vue";
import Nava from "../views/Municipios/Nava.vue";
import Ocampo from "../views/Municipios/Ocampo.vue";
import Piedrasnegras from "../views/Municipios/PiedrasNegras.vue";
import Progreso from "../views/Municipios/Progreso.vue";
import Ramosarizpe from "../views/Municipios/RamosArizpe.vue";
import Sabinas from "../views/Municipios/Sabinas.vue";
import Saltillo from "../views/Municipios/Saltillo.vue";
import SanBuenaventura from "../views/Municipios/SanBuenaventura.vue";
import SanJuandeSabinas from "../views/Municipios/SanJuandeSabinas.vue";
import SanPedro from "../views/Municipios/SanPedro.vue";
import SierraMojada from "../views/Municipios/SierraMojada.vue";
import Viesca from "../views/Municipios/Viesca.vue";
import Zaragoza from "../views/Municipios/Zaragoza.vue";

import Centralizados from "../views/Centralizados.vue";
import SC from "../views/Centralizados/SC.vue";
import SDR from "../views/Centralizados/SDR.vue";
import SEc from "../views/Centralizados/SEc.vue";
import SEd from "../views/Centralizados/SEd.vue";
import SEFIRC from "../views/Centralizados/SEFIRC.vue";
import SEVOT from "../views/Centralizados/SEVOT.vue";
import SF from "../views/Centralizados/SF.vue";
import SG from "../views/Centralizados/SG.vue";
import SIDS from "../views/Centralizados/SIDS.vue";
import AdministracionFiscal from "../views/Centralizados/AdministracionFiscal.vue";
import CJYEM from "../views/Centralizados/CJYEM.vue";

import Descentralizados from "../views/Descentralizados.vue";
import Auditoria from "../views/Descentralizados/Auditoria.vue";
import Secretaria from "../views/Descentralizados/Secretaria.vue";

const routes = [
  { path: "/", component: Inicio, name: "Inicio" },
  { path: "/municipios", component: Municipios, name: "Municipios" },
  { path: "/municipios/acuna", component: Acuña, name: "Acuna" },
  { path: "/municipios/allende", component: Allende, name: "Allende" },
  { path: "/municipios/arteaga", component: Arteaga, name: "Arteaga" },
  { path: "/municipios/candela", component: Candela, name: "Candela" },
  {
    path: "/municipios/cuatro-cienegas",
    component: CuatroCienegas,
    name: "CuatroCienegas",
  },
  {
    path: "/municipios/francisco-i-madero",
    component: FranciscoIMadero,
    name: "FranciscoIMadero",
  },
  { path: "/municipios/frontera", component: Frontera, name: "Frontera" },
  {
    path: "/municipios/general-cepeda",
    component: GeneralCepeda,
    name: "GeneralCepeda",
  },
  { path: "/municipios/hidalgo", component: Hidalgo, name: "Hidalgo" },
  { path: "/municipios/jimenez", component: Jimenez, name: "Jimenez" },
  { path: "/municipios/muzquiz", component: Muzquiz, name: "Muzquiz" },
  { path: "/municipios/nava", component: Nava, name: "Nava" },
  { path: "/municipios/ocampo", component: Ocampo, name: "Ocampo" },
  {
    path: "/municipios/piedras-negras",
    component: Piedrasnegras,
    name: "PiedrasNegras",
  },
  { path: "/municipios/progreso", component: Progreso, name: "Progreso" },
  {
    path: "/municipios/ramos-arizpe",
    component: Ramosarizpe,
    name: "RamosArizpe",
  },
  { path: "/municipios/sabinas", component: Sabinas, name: "Sabinas" },
  { path: "/municipios/saltillo", component: Saltillo, name: "Saltillo" },
  {
    path: "/municipios/san-buenaventura",
    component: SanBuenaventura,
    name: "SanBuenaventura",
  },
  {
    path: "/municipios/san-juan-de-sabinas",
    component: SanJuandeSabinas,
    name: "SanJuandeSabinas",
  },
  { path: "/municipios/san-pedro", component: SanPedro, name: "SanPedro" },
  {
    path: "/municipios/sierra-mojada",
    component: SierraMojada,
    name: "SierraMojada",
  },
  { path: "/municipios/viesca", component: Viesca, name: "Viesca" },
  { path: "/municipios/zaragoza", component: Zaragoza, name: "Zaragoza" },
  { path: "/centralizados", component: Centralizados, name: "Centralizados" },
  { path: "/centralizados/sc", component: SC, name: "SC" },
  { path: "/centralizados/sdr", component: SDR, name: "SDR" },
  { path: "/centralizados/sec", component: SEc, name: "SEc" },
  { path: "/centralizados/sed", component: SEd, name: "SEd" },
  { path: "/centralizados/sefirc", component: SEFIRC, name: "SEFIRC" },
  { path: "/centralizados/sevot", component: SEVOT, name: "SEVOT" },
  { path: "/centralizados/sf", component: SF, name: "SF" },
  { path: "/centralizados/sg", component: SG, name: "SG" },
  { path: "/centralizados/sids", component: SIDS, name: "SIDS" },
  {
    path: "/centralizados/administracion-fiscal",
    component: AdministracionFiscal,
    name: "AdministracionFiscal",
  },
  { path: "/centralizados/cjyem", component: CJYEM, name: "CJYEM" },
  {
    path: "/descentralizados",
    component: Descentralizados,
    name: "Descentralizados",
  },
  {
    path: "/descentralizados/auditoria",
    component: Auditoria,
    name: "Auditoria",
  },
  {
    path: "/descentralizados/secretaria",
    component: Secretaria,
    name: "Secretaria",
  },
  { path: "/autonomos/secretaria", component: Secretaria, name: "Secretaria" },
];

export default routes;
