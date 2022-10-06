import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ScHomeView.vue";
import CondominiumDashboard from "../views/Dashboard/ScCondominiumDashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
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
      component: () => import("../views/Dashboard/ScDashboardView.vue"),
      children: [
        {
          path: "",
          name: "index",
          component: CondominiumDashboard,
        },
        // {
        //   path: "condominium",
        //   name: "condominium",
        //   component: () =>
        //     import("../views/Dashboard/ScCondominiumDashboardView.vue"),
        // },
      ],
    },
  ],
});

export default router;
