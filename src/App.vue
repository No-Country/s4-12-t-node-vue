<template>
  <div id="app">
    <NavBarVue></NavBarVue>
    <RouterView />
  </div>
</template>
<script>
import NavBarVue from "../src/components/NavBarVue.vue";
export default {
  components: {
    NavBarVue
  }
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
