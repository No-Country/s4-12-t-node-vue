<template>
  <section class="text-sac-300 body-font">
    <div class="px-5 py-5 mx-auto">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font text-paleta-sac-300 lg:w-1/3 lg:mb-0 mb-4"
      >
        Datos del Condominio
      </h1>
    </div>
  <div class="sm:px-60 md:px-60 lg:px-60 xl:px-60dashboard">
    <form class="border border-sac-300 px-4 py-5 rounded-md m-auto">
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-sac-300"
          >Rif</label
        >
        <input
          type="text"
          id="base-input"
          class="border text-sm rounded-lg focus:ring-sac focus:border-sac block w-full p-2.5"
        />
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-sac-300"
          >Nombre</label
        >
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border text-sm rounded-lg focus:ring-sac focus:border-sac block w-full p-2.5"
        />
      </div>
      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-sac-300"
          >Direccion</label
        >
        <input
          type="text"
          id="small-input"
          class="block p-2 w-full rounded-lg border sm:text-xs focus:ring-sac focus:border-sac"
        />
      </div>

      <div class="text-center mt-20">Mensualidad inicial</div>

      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-sac-300"
          >Monto</label
        >
        <input
          type="number"
          id="small-input"
          class="block p-2 w-full rounded-lg border sm:text-xs focus:ring-sac focus:border-sac"
        />
      </div>
      <div>
        <button
          class="rounded-lg bg-sac-300 text-white p-3 mt-10 ml-auto block"
        >
          Registrar
        </button>
      </div>
    </form>
    </div>
  </section>
</template>

<script></script>

