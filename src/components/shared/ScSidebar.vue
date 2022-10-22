<template>
  <div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-sac-300 fixed">
    <router-link
      to="/"
    >
      <Tower class="invert h-14" />
    </router-link>
    
    <div class="flex flex-col gap-y-2 items-end self-end">
      <div
        v-for="menu in menus"
        :key="menu.menu"
        :class="
          activeMenu === menu.name
            ? 'bg-sac-400 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
      >
        <!-- <router-link
          v-if="menu.name.includes('Logout')"
          class="p-4 my-2 mr-4 ml-3 rounded-xl block"
          @click="handleLogout"
          :class="
            activeMenu === menu.name
              ? 'text-white shadow-error bg-paleta-sac-300'
              : 'text-paleta-sac-400'
          "
        >
          <Component :is="menu.icon" class="w-6 h-6" />
        </router-link> -->
        <router-link
          :to="menu.path"
          class="p-4 my-2 mr-4 ml-3 rounded-xl block"
          @click="activeMenu = menu.name"
          :class="
            activeMenu === menu.name
              ? 'shadow-error bg-sac-300'
              : 'text-sac'
          "
        >
          <Component :is="menu.icon" class="w-6 h-6 invert" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tower from "../../icons/tower.svg";
import Home from "../../icons/home.svg";
import Owners from "../../icons/owners.svg";
import CondominiumIcon from "../../icons/condominium.svg";
import NotificationIcon from "../../icons/notification.svg";
import GraphIcon from "../../icons/graph.svg";
import SettingsIcon from "../../icons/settings.svg";
import LogoutIcon from "../../icons/logout.svg";

const activeMenu = ref("Dashboard ");

const menus = [
  { name: "Dashboard", icon: Home, path: "/dashboard/" },
  { name: "Condominium", icon: CondominiumIcon, path: "/dashboard/condominium" },
  { name: "Owners", icon: Owners, path: "/dashboard/tower" },
  { name: "Payment", icon: NotificationIcon, path: "#" },
  { name: "Pay", icon: GraphIcon, path: "#" },
  { name: "Settings", icon: SettingsIcon, path: "#" },
  { name: "Logout", icon: LogoutIcon, path: "/" },
];

// const handleLogout = () => {};
</script>
