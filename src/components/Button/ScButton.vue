<template>
  <button
    :class="[$attrs.class ? $attrs.class : 'bg-slate-800']"
    class="text-white p-2 rounded-sm w-full font-bold"
  >
    <slot></slot>
  </button>
</template>
