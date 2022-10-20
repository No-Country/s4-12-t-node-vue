<template>
  <div><h1 class="text-center font-mono mt-5">Datos del condominio</h1></div>
  <div class="px-60 dashboard">
    <form class="m-10 border-2 p-8 drop-shadow-md">
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Rif</label
        >
        <input
          type="text"
          id="base-input"
          class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div class="mb-6">
        <label
          for="base-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Nombre</label
        >
        <input
          type="text"
          id="base-input"
          class="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Direccion</label
        >
        <input
          type="text"
          id="small-input"
          class="block p-2 w-full rounded-lg border sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="text-center mt-20">Mensualidad inicial</div>

      <div>
        <label
          for="small-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Monto</label
        >
        <input
          type="number"
          id="small-input"
          class="block p-2 w-full rounded-lg border sm:text-xs focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <button
          class="rounded-lg bg-gray-800 text-white p-3 mt-10 ml-auto block"
        >
          Registrar
        </button>
      </div>
    </form>
  </div>
</template>

<script></script>

<style scoped>
.dashboard {
  background-color: #f7f7f7;
}
</style>
