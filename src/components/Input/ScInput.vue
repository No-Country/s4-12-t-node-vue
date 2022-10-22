<script setup>
defineProps({
  type: {
    type: String,
    required: false,
    default: "text",
  },
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border focus:border-sac p-1 w-full rounded-md"
  />
</template>
