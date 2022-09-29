import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/ScHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/ScLoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/ScRegisterView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/ScDashboardView.vue"),
    }
  ],
});

export default router;
