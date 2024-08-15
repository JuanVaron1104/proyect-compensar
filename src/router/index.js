import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;
