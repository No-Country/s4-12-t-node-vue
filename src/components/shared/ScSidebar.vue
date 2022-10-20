<template>
  <div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-paleta-sac-300">
    <button class="p-2 bg-opacity-10 text-paleta-sac-400 rounded-xl bg-white">
      <FoodIcon />
    </button>
    <div class="flex flex-col gap-y-2 items-end self-end">
      <div
        v-for="menu in menus"
        :key="menu.menu"
        :class="
          activeMenu === menu.name
            ? 'bg-paleta-sac-400 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
      >
        <router-link
          :to="menu.path"
          class="p-4 my-2 mr-4 ml-3 rounded-xl block"
          @click="activeMenu = menu.name"
          :class="
            activeMenu === menu.name
              ? 'text-white shadow-error bg-paleta-sac-300'
              : 'text-paleta-sac-400'
          "
        >
          <Component :is="menu.icon" class="w-6 h-6" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import FoodIcon from "../../icons/food.svg";
// import HomeIcon from "../../icons/home.svg";
import ShoppingIcon from "../../icons/shopping.svg";
import GraphIcon from "../../icons/graph.svg";
import MessageIcon from "../../icons/message.svg";
import NotificationIcon from "../../icons/notification.svg";
import SettingsIcon from "../../icons/settings.svg";
// import LogoutIcon from "../../icons/logout.svg";

const activeMenu = ref("Graph");

const menus = [
  { name: "Dashboard", icon: NotificationIcon, path: "/dashboard/home" },
  { name: "Tower", icon: ShoppingIcon, path: "/dashboard/tower" },
  { name: "Owners", icon: GraphIcon, path: "/dashboard/apartment" },
  { name: "Payment", icon: MessageIcon, path: "/dashboard/payment" },
  { name: "Pay", icon: NotificationIcon, path: "/dashboard/pay" },
  { name: "Settings", icon: SettingsIcon, path: "/dashboard/profile" },
  { name: "Logout", icon: NotificationIcon, path: "/" },
];
</script>
