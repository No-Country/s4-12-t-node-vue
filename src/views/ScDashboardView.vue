<template>
  <div class="flex w-full min-h-screen font-sans bg-gray-100">
    <SideBar />
    <main class="flex flex-col flex-1 gap-3 p-4">
      <span>welcome</span>
    </main>
  </div>
</template>
<script>
/* import SideBar from "../components/SideBar.vue"; */
/* import Card from "./components/Card.vue"; */
/* import Table from "./components/Table.vue"; */
import SideBar from "../components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>
