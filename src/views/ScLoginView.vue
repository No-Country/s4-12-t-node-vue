<script setup>
import ScInputIcon from "../components/Input/ScInputIcon.vue";
import ScMailIcon from "../components/icons/ScMailIcon.vue";
import ScInput from "../components/Input/ScInput.vue";
import ScLockIcon from "../components/icons/ScLockIcon.vue";
</script>
<template>
  <form class="border border-gray-700 w-4/12 p-2">
    <h5>Registrate</h5>
    <ScInputIcon>
      <template #input>
        <ScInput />
      </template>
      <template #icon>
        <ScMailIcon width="15" height="15" />
      </template>
    </ScInputIcon>
    <ScInputIcon>
      <template #input>
        <ScInput type="password" />
      </template>
      <template #icon>
        <ScLockIcon width="15" height="15" />
      </template>
    </ScInputIcon>
  </form>
</template>
