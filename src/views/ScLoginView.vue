<script setup>
import { ref, watch } from "vue";
import ScInputIcon from "../components/Input/ScInputIcon.vue";
import ScMailIcon from "../components/icons/ScMailIcon.vue";
import ScInput from "../components/Input/ScInput.vue";
import ScLockIcon from "../components/icons/ScLockIcon.vue";
import ScButton from "../components/Button/ScButton.vue";
import ScText from "../components/Text/ScText.vue";

const messageValidation = ref("");
const email = ref("");
const password = ref("");
const handleVaditation = (e) => {};
watch(email, (newEmail) => {
  console.log(newEmail);
});
</script>
<template>
  <form class="border border-gray-700 w-4/12 px-4 py-5 rounded-md m-auto">
    <ScText tag="h1" class="font-bold text-2xl mb-5">Login</ScText>
    <ScInputIcon>
      <template #input>
        <ScInput
          class="pl-8"
          type="email"
          v-model="email"
          :value="email"
          placeholder="dyangeltk17@gmail.com"
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
    <ScText class="text-sm text-red-500 mb-4 block"
      >Hay un error con el email</ScText
    >
    <ScInputIcon>
      <template #input>
        <ScInput class="pl-8" type="password" />
      </template>
      <template #icon>
        <ScLockIcon
          width="15"
          height="15"
          class="absolute top-1/4 bottom-1/4 left-2"
        />
      </template>
    </ScInputIcon>
    <ScText class="text-sm text-red-500 mb-4 block"
      >Hay un error con el password</ScText
    >
    <ScButton type="submit">Iniciar sesion</ScButton>
  </form>
</template>
