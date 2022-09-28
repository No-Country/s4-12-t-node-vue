<script setup>
import ScInputIcon from "../components/Input/ScInputIcon.vue";
import ScMailIcon from "../components/icons/ScMailIcon.vue";
import ScInput from "../components/Input/ScInput.vue";
</script>
<template>
  <form>
    <h5>Registrate</h5>
    <ScInputIcon>
      <ScInput />
      <ScMailIcon width="15" height="15" />
    </ScInputIcon>
    <ScInputIcon>
      <ScInput type="password" />
      <ScMailIcon width="15" height="15" />
    </ScInputIcon>
  </form>
</template>
