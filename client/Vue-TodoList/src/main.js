import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueMq from "vue-mq";
import store from "./store";
import Login from "./pages/Login.vue";
import Todos from "./pages/Todos.vue";
import CreateUser from "./pages/CreateUser.vue";

import "./css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueMq, {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
});

const routes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/register",
    component: CreateUser,
  },
];

export const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
