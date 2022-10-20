<template>
<div>
  <!--Hero-->
  <div id="hero" class="container sm:py-4 mx-auto flex flex-col">
    <div class="flex flex-col sm:flex-row mt-10">
      <div class="sm:w-2/3 lg:mt-4 lg:pt-4 sm:mt-0 text-center sm:text-left">
        <h1 class="font-nunito title-font sm:text-4xl text-3xl mb-4">
          El mejor Sistema de 
          <span class="font-black">
            Administración de Condominios.
          </span>
        </h1>
        <p class="leading-relaxed font-mono text-lg mb-8">
          Este sistema esta dirigido a administradores de Condominios.
        </p>
        <router-link to="login">
            <button
              class="bg-sac-300 shadow hover:bg-sac text-white font-mono py-3 px-8 rounded"
            >
              Iniciar Sesión
            </button>
        </router-link>
      </div>
      <div class="sm:w-1/3 text-center hidden md:block sm:block lg:block xl:block">
        <img alt="heroe-sac" class="-mt-4 lg:w-4/5 w-full lg:h-auto object-cover object-center" src="../assets/black.gif">
      </div>
    </div>
  </div>
  <div id="icons" class="container mx-auto flex flex-col sm:px-auto md:px-auto lg:px-auto px-2 ">
    <div class="grid mt-8 xl:mt-12 xl:gap-12 grid-cols-3 justify-items-center text-center">
      <div class="md:flex md:items-start md:-mx-4">
        <span class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-sac-300 text-sac-400 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        <div class="md:mx-4">
          <h2 class="text-xl font-semibold font-mono">50+</h2>

          <p class="mt-2 font-mono">Usuarios</p>
        </div>
      </div>
      <div class="md:flex md:items-start md:-mx-4">
        <span class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-sac-300 text-sac-400 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </span>
        <div class="md:mx-4">
          <h2 class="text-xl font-semibold font-mono">80+</h2>

          <p class="mt-2 font-mono">Reportes</p>
        </div>
      </div>
      <div class="md:flex md:items-start md:-mx-4">
        <span class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-sac-300 text-sac-400 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </span>
        <div class="md:mx-4">
          <h2 class="text-xl font-semibold font-mono">30K+</h2>

          <p class="mt-2 font-mono">Datos</p>
        </div>
      </div>
    </div>
  </div>
  <!--¿Qué es?-->
  <div id="que-es" class="container sm:py-12 lg:py-12 md:py-12 xl:py-12 mx-auto flex flex-wrap items-center">
    <h1 class="z-10 font-nunito title-font text-center sm:text-4xl text-3xl sm:-mb-24 lg:-mb-24 md:-mb-24">
      El mejor Sistema de 
      <span class="font-black ">
        Administración de Condominios.
      </span>
    </h1>
    <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div>
    <div class="bg-sac-300 lg:w-1/2 md:w-1/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
    </div>
  </div>
</div>
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
