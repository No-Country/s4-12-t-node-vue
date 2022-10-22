<template>
  <button
    :class="[$attrs.class ? $attrs.class : 'bg-sac-300']"
    class="text-white p-2 rounded w-full font-bold"
  >
    <slot></slot>
  </button>
</template>
