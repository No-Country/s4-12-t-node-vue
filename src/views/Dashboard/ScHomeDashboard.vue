<template>
  <section class="after:body-font">
    <div class="px-5 py-5 mx-auto">
      <div class="flex w-full mb-20 flex-wrap">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font text-sac-300 lg:w-1/3 lg:mb-0 mb-4"
        >
          Condominio Torre Lorem Ipsum
        </h1>
        <p
          class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-sac"
        >
          <span class="font-bold">Rif: </span>
          <span>J-12345678-9</span>
          <br />
          <span class="font-bold">Dirección: </span>
          <span>Mérida, Venezuela</span>
          <br />
          <span class="font-bold">Cantidad de Apartamentos: </span>
          <span>09</span>
          <br />
        </p>
      </div>
      <!--Primeros Botones
      <div
        class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 my-4 text-center"
      >
        <div
          class="px-4 py-6 transition-colors duration-300 transform border-2 border-sac-300 cursor-pointer rounded-xl hover:border-transparent group hover:bg-sac"
        >
          <div
            class="flex flex-col sm:-mx-4 sm:flex-row content-center justify-center"
          >
            <TowerIcon
              class="text-sac-300 hover:text-sac-50 group-hover:text-sac-50 w-12 h-12 mb-3 inline-block"
            />
            <p
              class="mt-2 text-sac-300 capitalize group-hover:text-sac-50"
            >
              Actualizar Cuota
            </p>
          </div>
        </div>
        <div
          class="px-4 py-6 transition-colors duration-300 transform border-2 border-sac-300 cursor-pointer rounded-xl hover:border-transparent group hover:bg-sac"
        >
          <div
            class="flex flex-col sm:-mx-4 sm:flex-row content-center justify-center"
          >
            <TowerIcon
              class="text-sac-300 hover:text-sac-50 group-hover:text-sac-50 w-12 h-12 mb-3 inline-block"
            />
            <p
              class="mt-2 text-sac-300 capitalize group-hover:text-sac-50"
            >
              Configurar Mora
            </p>
          </div>
        </div>
      </div>-->
      <!--Segundos Botones-->
      <div class="flex flex-wrap -m-4 text-center">
        <div class="items-center md:w-1/4 sm:w-1/2 w-full p-4">
          <router-link to="/dashboard/condominium">
            <div
              class="px-4 py-6 transition-colors duration-300 transform border-2 border-sac-300 cursor-pointer rounded-xl hover:border-transparent group"
            >
              <OwnersIcon
                class="text-sac-300 group-hover:text-sac-50 w-12 h-12 mb-3 inline-block"
              />
              <p
                class="mt-2 text-sac-300 capitalize "
              >
                Agregar Condominio
              </p>
            </div>
          </router-link>
        </div>
        <div class="items-center md:w-1/4 sm:w-1/2 w-full p-4">
          <router-link to="/dashboard/tower">
            <div
              class="px-4 py-6 transition-colors duration-300 transform border-2 border-sac-300 cursor-pointer rounded-xl hover:border-transparent group"
            >
              <TowerIcon
                  class="text-sac-300 group-hover:text-sac-50 w-12 h-12 mb-3 inline-block"
              />
              <p
                class="mt-2 text-sac-300 capitalize "
              >
                Gestión de Torres
              </p>
            </div>
          </router-link>
        </div>
        <div class="items-center md:w-1/4 sm:w-1/2 w-full p-4">
          <div
            class="px-4 py-6 border-2 border-sac-200  rounded-lg cursor-pointer "
          >
            <PayIcon
              class="text-sac-200 w-12 h-12 mb-3 inline-block"
            />
            <p
              class="mt-2 text-sac-200 capitalize"
            >
              Gestión de Pagos
            </p>
          </div>
        </div>
        <div class="items-center md:w-1/4 sm:w-1/2 w-full p-4">
          <div
            class="px-4 py-6 border-2 border-sac-200  rounded-lg cursor-pointer "
          >
            <PaymentIcon
              class="grey w-12 h-12 mb-3 inline-block"
            />
            <p
              class="mt-2 text-sac-200 capitalize"
            >
              Gestión de Cobros
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TowerIcon from "../../icons/tower.svg";
import OwnersIcon from "../../icons/owner.svg";
import PayIcon from "../../icons/pago.svg";
import PaymentIcon from "../../icons/cobro.svg";
export default {
  components: {
    OwnersIcon,
    TowerIcon,
    PaymentIcon,
    PayIcon,
  },
};
</script>

<style scoped></style>
