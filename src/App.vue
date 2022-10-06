<template>
  <div id="app">
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
  </div>
</template>
<script>
import NavBarVue from "../src/components/NavBarVue.vue";
import FooterLanding from "../src/components/FooterLanding.vue";
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
}
#app {
  height: 100%;
  background-color: #f7f7f7;
}
</style>
