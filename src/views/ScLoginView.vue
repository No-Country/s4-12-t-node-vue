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
import AuthService from "../services/auth.service";
// import store from "../store/index";
import { useStore } from "vuex";

const router = useRouter();
const emailValidationAlertMessage = ref("");
const passwordValidationAlertMessage = ref("");
const email = ref("");
const password = ref("");
// const emailValidationHandler = (e) => {
//   emailValidationAlertMessage.value = e.target.value;
// };

const store = useStore();

const submitHandler = async () => {
  const resp = await AuthService.login(email.value, password.value);
  if (resp) {
    store.commit("auth/updateUser", resp.data.admin);
    AuthService.setAccessToken(resp.token);
    router.push({ path: "dashboard" });
  }
};

const handleRedirect = () => {
  router.push({ name: "register" });
};
</script>
<template>
  <div class="container py-8 sm:py-16 lg:py-16 md:py-16 xl:py-12 mx-auto flex flex-wrap items-center">
    <div class="lg:w-1/2 md:w-1/2 md:pr-16 lg:pr-0 pr-0 justify-center hidden md:block sm:block lg:block xl:block">
      <img alt="heroe-sac" class="-mt-4 lg:w-5/6 w-full lg:h-auto object-cover object-center" src="../assets/login.gif">
    </div>
    <div class="lg:w-1/2 md:w-1/2 px-8 py-14 flex flex-col md:ml-auto w-full">
      <form
        class="border border-sac-300 px-4 py-5 rounded-md m-auto"
        @submit.prevent="submitHandler"
      >
        <ScText tag="h1" class="font-bold text-2xl mb-5">Login</ScText>
        <ScInputIcon>
          <template #input>
            <ScInput
              class="pl-8"
              type="email"
              v-model="email"
              placeholder="ejemplo@email.com"
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
            <ScInput class="pl-8" v-model="password" type="password" />
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
            class="text-sac-200 text-sm"
            @click="handleRedirect"
            >Crear una cuenta</ScButtonLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
