import { createRouter, createWebHashHistory } from "vue-router";


// Enlaces principales
import Home from "../views/Mantenedores/Home.vue";
import QuienesSomos from "../views/Mantenedores/QuienesSomos.vue";
import Contacto from "../views/Mantenedores/Contacto.vue";

//Enlaces de Administrador
import LogIn from "../views/Mantenedores/Admin/AdminLogin.vue";
import AdminPanel from "../views/Mantenedores/Admin/AdminPanel.vue";

//Enlaces Venta
import VentaBodegas from "../views/Mantenedores/Venta/Bodegas.vue";
import VentaCamposParcelas from "../views/Mantenedores/Venta/CamposParcelas.vue";
import VentaCasas from "../views/Mantenedores/Venta/Casas.vue";
import VentaDepartamentos from "../views/Mantenedores/Venta/Departamentos.vue";
import VentaLocalesComerciales from "../views/Mantenedores/Venta/LocalesComerciales.vue";
import VentaOficinas from "../views/Mantenedores/Venta/Oficinas.vue";
import VentaSitios from "../views/Mantenedores/Venta/Sitios.vue";

//Enlaces Arriendo

import ArriendoBodegas from "../views/Mantenedores/Arriendo/Bodegas.vue";
import ArriendoCamposParcelas from "../views/Mantenedores/Arriendo/CamposParcelas.vue";
import ArriendoCasas from "../views/Mantenedores/Arriendo/Casas.vue";
import ArriendoDepartamentos from "../views/Mantenedores/Arriendo/Departamentos.vue";
import ArriendoLocalesComerciales from "../views/Mantenedores/Arriendo/LocalesComerciales.vue";
import ArriendoOficinas from "../views/Mantenedores/Arriendo/Oficinas.vue";

const routes = [

  //Enlaces Principales

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/QuienesSomos",
    name: "QuienesSomos",
    component: QuienesSomos,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: Contacto,
  },

  //Enlaces de Administador

  {
    path: "/Login",
    name: "Login",
    component: LogIn,
  },
  {
    path: "/AdminPanel",
    name: "AdminPanel",
    component: AdminPanel,
  },

//Enlaces Venta

  {
    path: "/Venta/Bodegas",
    name: "Venta/Bodegas",
    component: VentaBodegas,
  },
  {
    path: "/Venta/CamposParcelas",
    name: "Venta/CamposParcelas",
    component: VentaCamposParcelas,
  },
  {
    path: "/Venta/CamposParcelas",
    name: "Venta/CamposParcelas",
    component: VentaCamposParcelas,
  },
  {
    path: "/Venta/Casas",
    name: "VentaCasas",
    component: VentaCasas,
  },
  {
    path: "/Venta/Departamentos",
    name: "VentaDepartamentos",
    component: VentaDepartamentos,
  },
  {
    path: "/Venta/LocalesComerciales",
    name: "VentaLocalesComerciales",
    component: VentaLocalesComerciales,
  },
  {
    path: "/Venta/Oficinas",
    name: "VentaOficinas",
    component: VentaOficinas,
  },
  {
    path: "/Venta/Sitios",
    name: "VentaSitios",
    component: VentaSitios,
  },

//Enlaces Arriendo

  {
    path: "/Arriendo/Bodegas",
    name: "Arriendo/Bodegas",
    component: ArriendoBodegas,
  },
  {
    path: "/Arriendo/CamposParcelas",
    name: "Arriendo/CamposParcelas",
    component: ArriendoCamposParcelas,
  },
  {
    path: "/Arriendo/CamposParcelas",
    name: "Arriendo/CamposParcelas",
    component: ArriendoCamposParcelas,
  },
  {
    path: "/Arriendo/Casas",
    name: "ArriendoCasas",
    component: ArriendoCasas,
  },
  {
    path: "/Arriendo/Departamentos",
    name: "ArriendoDepartamentos",
    component: ArriendoDepartamentos,
  },
  {
    path: "/Arriendo/LocalesComerciales",
    name: "ArriendoLocalesComerciales",
    component: ArriendoLocalesComerciales,
  },
  {
    path: "/Arriendo/Oficinas",
    name: "ArriendoOficinas",
    component: ArriendoOficinas,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
