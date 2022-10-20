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
  <div id="que-es" class="container py-8 sm:py-16 lg:py-16 md:py-16 xl:py-12 mx-auto flex flex-wrap items-center">
    <div class="w-full text-center">
      <h1 class="font-nunito title-font sm:text-4xl text-3xl">
        ¿Qué es el Sistema de
        <span class="font-black ">
          Administración de Condominios?
        </span>
      </h1>
    </div>
    <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <img alt="relax-sac" class="lg:w-4/5 w-full lg:h-auto object-cover object-center" src="../assets/relax.gif">
    </div>
    <div class="bg-sac-300 lg:w-1/2 md:w-1/2 px-8 py-14 flex flex-col md:ml-auto w-full">
      <p class="leading-relaxed font-mono mxtext-lg mx-6 my-24 text-sac-400">
        El sistema de administración de condominios permite llevar el control de los propietarios de una o más torres, además permite gestionar el cobro y pago de las cuotas de condominio, aplicando el calculo de mora por retraso, si aplica.
      </p>
    </div>
  </div>
  <!--Somos-->
  <div id="somos" class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="font-nunito title-font sm:text-4xl text-3xl">
        Somos el
        <span class="font-black ">
          héreo que necesitas en tú vida
        </span>
      </h1>
      <p class="leading-relaxed font-mono mxtext-lg m-6">
        Facilitamos el trabajo a los administradores de condominio
      </p>
      <router-link to="register">
        <button
          class="bg-sac-300 shadow hover:bg-sac text-white font-mono py-3 px-8 rounded"
        >
          Registrate
        </button>
      </router-link>
    </div>
  </div>
  <!--Servicios-->
  <div class="bg-sac-300">
    <div id="servicios" class="container px-5 py-16 mx-auto text-sac-400">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="font-nunito font-black title-font sm:text-4xl text-3xl">
          Ofrecemos para ti
        </h1>
        <p class="leading-relaxed font-mono mxtext-lg m-6">
          Los mejores servicios para los administradores de condominio
        </p>
      </div>
      <div class="font-mono flex flex-wrap sm:-m-4 -mx-4 md:space-y-0 space-y-6">
        <div class="py-6 px-12 md:w-1/2 flex hover:bg-sac ">
          <div class="w-16 h-16 inline-flex items-center justify-center mb-4 flex-shrink-0">
            <Tower class="invert" />
          </div>
          <div class="flex-grow px-2">
            <h2 class="text-sac-400 text-2xl title-font font-black mb-2">GESTIÓN DE TORRES</h2>
            <p class="leading-relaxed text-base text-justify	">
              El sistema permite agregar un
              número ilimitados de torres, las
              cuales estaran disponibles para
              la administración de su
              condominio, asignando una cuota
              por apartamento y porcentaje de
              mora.
            </p>
          </div>
        </div>
        <div class="py-6 px-12 md:w-1/2 flex hover:bg-sac ">
          <div class="w-16 h-16 inline-flex items-center justify-center mb-4 flex-shrink-0">
            <Owner class="invert" />
          </div>
          <div class="flex-grow px-2">
            <h2 class="text-sac-400 text-2xl title-font font-black mb-2">GESTIÓN DE PROPIETARIOS</h2>
            <p class="leading-relaxed text-base text-justify	">
              El sistema permite anexar los
              datos del propietario de cada
              apartamento de una torre que se
              encuentre administrada. Dichos
              datos permitiran el cobro de las
              cuotas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Team-->
  <div id="somos" class="container px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="font-nunito font-black title-font sm:text-4xl text-3xl">
        Nuestro Equipo
      </h1>
      <p class="leading-relaxed font-mono mxtext-lg m-6">
        Contamos con el mejor equipo de desarrolladores para brindarte una experiencia fascinante.
      </p>
    </div>
    <div class="flex items-center justify-center">
      <div class="flex items-center p-1 border border-sac-300 rounded-xl">
        <button class="px-4 py-2 text-sm font-medium text-sac-400 capitalize bg-sac-300 md:py-3 rounded-xl md:px-12">Front-End</button>
        <button class="px-4 py-2 text-sm font-medium text-sac-300 capitalize transition-colors duration-300 md:py-3 focus:outline-none hover:bg-sac hover:text-sac-400 rounded-xl md:px-12">Backend</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// import AnimatedComponent from "../components/AnimatedComponent.vue";
import Tower from "../icons/tower.svg";
import Owner from "../icons/owner.svg";
export default {
  components: {
    // AnimatedComponent,
    Tower,
    Owner,
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
