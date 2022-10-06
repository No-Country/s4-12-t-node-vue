<template>
  <div class="container mx-auto bg-paleta-sac-50 -my-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-2">
      <div class="flex items-center justify-center animation">
        <h1 class="font-black text-[36px] text-paleta-sac">
          EL MEJOR SISTEMA DE ADMINISTRACIÓN DE CONDOMINIOS
          <br />
          <router-link to="login">
            <button
              class="bg-paleta-sac text-[18px] hover:bg-paleta-sac-200 text-white font-bold py-2 px-4 rounded"
            >
              Iniciar Sesión
            </button>
          </router-link>
        </h1>
      </div>
      <div class="items-center justify-center">
        <img src="../assets/black.gif" alt="" />
      </div>
    </div>
  </div>
  <section id="que-es" class="bg-paleta-sac py-6 text-paleta-sac-50">
    <div class="container mx-auto p-8">
      <div class="flex items-center justify-center">
        <h1 class="font-black text-[38px] mx-2">¿QUÉ ES?</h1>
      </div>
      <div class="flex items-start justify-start">
        <p>
          Este sistema esta dirigido a <br />
          administradores de condominio.
        </p>
      </div>
      <hr class="my-8 h-px bg-paleta-sac-50 border-0" />
      <div class="flex items-end justify-end mt-4">
        <p class="text-[28px] pl-12">
          El sistema permite llevar el control de los propietarios de una o mas
          torres, además permite gestionar el cobro y pago de las cuotas de
          condominio, aplicando el calculo de mora por retraso, si aplica.
        </p>
      </div>
    </div>
  </section>
  <section id="que-es" class="bg-paleta-sac-50 text-paleta-sac py-6">
    <div class="container mx-auto p-8">
      <div class="flex items-start justify-start">
        <h1 class="font-black text-[38px] mx-2">¿QUÉ OFRECEMOS?</h1>
      </div>
      <div class="divide-y pl-16 divide-paleta-sac py-6">
        <div class="py-2">
          <span class="font-bold">Gestión de Torres: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="py-2">
          <span class="font-bold">Gestión de Administradores: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="py-2">
          <span class="font-bold">Gestión de Propietarios: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="py-2">
          <span class="font-bold">Gestión de Pagos: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="py-2">
          <span class="font-bold">Gestión de Cobros: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import AnimatedComponent from "../components/AnimatedComponent.vue";
export default {
  components: {
    // AnimatedComponent,
  },
};
</script>
<style scoped>
.animation {
  position: relative;
  animation: animation 2s ease-out;
}

@keyframes animation {
  0% {
    opacity: 0;
    left: -700px;
  }

  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
