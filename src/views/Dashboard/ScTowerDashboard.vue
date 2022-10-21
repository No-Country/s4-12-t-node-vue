<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-5 mx-auto">
      <div class="flex w-full mb-20 flex-wrap">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-paleta-sac-300 lg:w-1/3 lg:mb-0 mb-4"
        >
          Gestión de Torres
        </h1>
      </div>
      <section class="rounded shadow-2xl text-gray-600 body-font p-4">

        <!-- ------------------------MODAL----------------------------- -->
        <div x-data="{ isOpen: true }">
          <button
            @click="isOpen = true"
            class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded float-right"
          >
            Nuevo
          </button>

          <div
            v-show="isOpen"
            x-transition:enter="transition duration-600 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-500 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            class="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div
              class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
            >
              <span
                class="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
                >&#8203;</span
              >

              <div
                class="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle"
              >
                <h3
                  class="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Invite your team
                </h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Your new project has been created. Invite your team to
                  collaborate on this project.
                </p>

                <form class="mt-4" action="#">
                  <label
                    for="emails-list"
                    class="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Email address
                  </label>

                  <label class="block mt-3" for="email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user@email.xyz"
                      value="devdhaif@gmail.com"
                      class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <label class="block mt-3" for="email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user@email.xyz"
                      class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <label class="block mt-3" for="email">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user@email.xyz"
                      class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <button
                    type="button"
                    class="mt-2 flex items-center rounded py-1.5 px-2 text-sm text-blue-600 transition-colors duration-300 hover:text-blue-400 focus:outline-none dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>

                    <span class="mx-2">Add another</span>
                  </button>

                  <div class="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      @click="isOpen = false"
                      class="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      class="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Send invites
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded float-right">Nuevo</button> -->

        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div
                class="shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Yenifer
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    Unidad: 01
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Direccion: calle Guemes 2564 barrio Los Cardales.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Leandro
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    Unidad: 02
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Direccion: Calle estradas 7845 barrio Las Toscaditas.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div
                class="shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Daniel
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    Unidad: 03
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Direccion: Calle Santa Maria 5263 barrio El Trebol.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 md:w-1/3">
              <div
                class="shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                    Daniel
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    Unidad: 04
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Direccion: Calle La Paz 3258 barrio El Pilar.
                  </p>
                  <div class="flex items-center flex-wrap">
                    <button
                      class="bg-gradient-to-r from-gray-400 to-gray-400 hover:scale-105 drop-shadow-md px-4 py-1 rounded-lg"
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      isOpen: false,
    };
  },

  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
.productos {
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-top: 40px;
  margin-right: 30px;
  border-radius: 10px;
  box-shadow: 1px 4px 10px 0 brown;
  float: right;
}
.img-card {
  width: 150px;
  height: 150px;
}
.product {
  margin: 75px;
}
</style>
