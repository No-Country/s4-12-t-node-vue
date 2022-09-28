<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    validated(value) {
      return ["text", "number", "search"].includes(value);
    },
    default: "text",
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
});
</script>
<template>
  <input class="border-neutral-400 p-4"  :type="type" :required="required" :placeholder="placeholder" />
</template>
