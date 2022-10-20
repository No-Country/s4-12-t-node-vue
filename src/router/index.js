import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ScHomeView.vue";
import CondominiumDashboard from "../views/Dashboard/ScCondominiumDashboardView.vue";
import HomeDashboard from "../views/Dashboard/ScHomeDashboard.vue";
import TowerDashboard from "../views/Dashboard/ScTowerDashboard.vue";

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
        {
          path: "/dashboard/home",
          name: "HomeDashboard",
          component: HomeDashboard,
        },
        {
          path: "/dashboard/tower",
          name: "TowerDashboard",
          component: TowerDashboard,
        },
      ],
    },
  ],
});

export default router;
