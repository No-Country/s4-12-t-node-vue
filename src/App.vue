<template>
  <NavBarVue
    v-if="
      $route.name === 'login' ||
      $route.name === 'register' ||
      $route.name === 'home'
    "
  ></NavBarVue>
  <RouterView />
  <FooterLanding
    v-if="
      $route.name === 'login' ||
      $route.name === 'register' ||
      $route.name === 'home'
    "
  />
</template>
<script>
import NavBarVue from "../src/components/shared/ScNavbar.vue";
import FooterLanding from "../src/components/shared/ScFooterLanding.vue";
export default {
  components: {
    NavBarVue,
    FooterLanding,
  },
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}
/* #app {
  height: 100%;
} */
</style>
