<template>
  <div id="app">
    <div class="">
      <button
        @click="onToggle"
        class="bg-sac-300 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg float-right"
      >
        Nuevo
      </button>
    </div>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="border border-sac-300 w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <form @submit.prevent class="w-full max-w-lg pt-8">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-sac-300 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Numero
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-sac-300 border border-sac-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-sac-300 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Tipo de unidad
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-sac-300 border border-sac-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-sac-300"
                    id="grid-last-name"
                    type="text"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-sac-300 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Direccion
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-sac-300 border border-sac-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                  />
                </div>
              </div>
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-sac-300 text-sac-300 rounded-md hover:shadow-lg hover:bg-sac hover:text-sac-400"
                >
                  Registrar
                </button>
                <button
                  @click="onToggle"
                  class="mb-2 md:mb-0 bg-sac-300 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style>

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
