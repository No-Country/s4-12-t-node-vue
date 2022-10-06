<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
  },
});
</script>
<template>
  <input :type="type" class="border p-1 w-full rounded-md" />
</template>
