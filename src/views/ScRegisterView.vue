<script setup>
import ScInput from "../components/Input/ScInput.vue";
import ScText from "../components/Text/ScText.vue";
import ScLabel from "../components/Label/ScLabel.vue";
import ScButton from "../components/Button/ScButton.vue";
import { useRouter } from "vue-router";
// import { ref } from "vue";

// const names = ref("");
// const lastname = ref("");
// const age = ref("");
// const file = ref({});
// const route = useRoute();
const router = useRouter();

const handleSubmit = () => {
  router.push({ path: "login" });
};
</script>
<template>
  <form
    class="border border-gray-700 w-2/4 px-4 py-5 rounded-md m-auto my-20"
    @submit.prevent="handleSubmit"
  >
    <ScText tag="h1" class="text-center mb-5 text-2xl font-bold"
      >Formulario de registro</ScText
    >
    <ScLabel class="input-required">Nombres</ScLabel>
    <ScInput class="mb-5" v-model="names" placeholder="Ingresa tus nombres" />
    <!-- <ScText>Debe ingresar su nombre</ScText> -->
    <ScLabel class="input-required">Apellidos</ScLabel>
    <ScInput class="mb-5" placeholder="Ingresa tus apellidos" />
    <ScLabel>Edad</ScLabel>
    <ScInput class="mb-5" placeholder="Ingresa tu edad" />
    <ScLabel class="input-required">Correo</ScLabel>
    <ScInput class="mb-5" type="text" placeholder="Ingresa tu correo" />
    <ScLabel class="input-required">Contraseña</ScLabel>
    <ScInput class="mb-5" type="password" placeholder="Ingresa tu contraseña" />
    <ScLabel class="input-required">Validar contraseña</ScLabel>
    <ScInput
      class="mb-5"
      type="password"
      placeholder="Escribe de nuevo tu contraseña"
    />
    <ScLabel>Perfil : </ScLabel>
    <ScInput type="file" class="mb-5" />
    <ScButton type="submit" class="">Registrar</ScButton>
  </form>
</template>
