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
        <modal-torre />
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div v-for="item in getTower" :key="item.id" class="p-4 md:w-1/3">
              <div
                class="shadow-md h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
              >
                <img
                  class="z-0 lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://res.cloudinary.com/dytpump6i/image/upload/v1666030345/pexels-ikram-shaari-250659_qnhw0w.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h2
                    class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                  >
                   {{item.name}}
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">
                    {{item.id}}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Direccion: calle Guemes 2564 barrio Los Cardales.
                  </p>
                  <h1>numero de apartamentos {{item.apartamentos.length}}</h1>
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
import ModalTorre from "../../components/modals/ModalTorre.vue";
import towerService from "../../services/Tower.service";
export default {
  components: {
    ModalTorre,
  },

  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
     getTower() {
      let data = towerService.getTorres();
      console.log(data)
      return data;
      
    },
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
