<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ScInputIcon from "../components/Input/ScInputIcon.vue";
import ScMailIcon from "../components/icons/ScMailIcon.vue";
import ScInput from "../components/Input/ScInput.vue";
import ScLockIcon from "../components/icons/ScLockIcon.vue";
import ScButton from "../components/Button/ScButton.vue";
import ScText from "../components/Text/ScText.vue";
import ScButtonLink from "../components/Button/ScButtonLink.vue";
import Swal from "sweetalert2";

const router = useRouter();
const emailValidationAlertMessage = ref("");
const passwordValidationAlertMessage = ref("");
// const email = ref("");
// const password = ref("");
const emailValidationHandler = (e) => {
  emailValidationAlertMessage.value = e.target.value;
};

const submitHandler = () => {
  Swal.fire("Hello");
  router.push({ name: "dashboard" });
};

const handleRedirect = () => {
  router.push({ name: "register" });
};
</script>
<template>
  <form
    class="border border-gray-700 w-11/12 sm:w-3/5 md:w-2/5 lg:w-2/6 px-4 py-5 rounded-md m-auto mt-48"
    @submit.prevent="submitHandler"
  >
    <ScText tag="h1" class="font-bold text-2xl mb-5">Login</ScText>
    <ScInputIcon>
      <template #input>
        <ScInput
          class="pl-8"
          type="email"
          v-model.lazy="emailValidationHandler"
          placeholder="dyangeltk17@gmail.com"
          value="dyangeltk17@gmail.com"
          required
        />
      </template>
      <template #icon>
        <ScMailIcon
          width="15"
          height="15"
          class="absolute top-1/4 bottom-1/4 left-2"
        />
      </template>
    </ScInputIcon>
    <ScText class="text-sm text-red-500 mb-4 block">{{
      emailValidationAlertMessage
    }}</ScText>
    <ScInputIcon>
      <template #input>
        <ScInput class="pl-8" type="password" value="123456" />
      </template>
      <template #icon>
        <ScLockIcon
          width="15"
          height="15"
          class="absolute top-1/4 bottom-1/4 left-2"
        />
      </template>
    </ScInputIcon>
    <ScText class="text-sm text-red-500 mb-4 block">{{
      passwordValidationAlertMessage
    }}</ScText>
    <ScButton type="submit">Iniciar sesion</ScButton>
    <div class="mt-4 m-auto">
      <ScText class="text-sm">¿Aún no tiene cuenta? </ScText
      ><ScButtonLink
        type="button"
        class="text-sky-700 text-sm"
        @click="handleRedirect"
        >Crear una cuenta</ScButtonLink
      >
    </div>
  </form>
</template>
