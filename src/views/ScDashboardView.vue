<template>
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Social Security Number</span>
    <input class="border-slate-200 placeholder- contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
    <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
      We need this to steal your identity.
    </p>
    <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
  </label>
  <input type="text" class="text-red-800  focus:ring-green-600 focus-within:ring-green-700">
  <textarea class="caret-blue-500 focus:caret-indigo-500"></textarea>
</form>
</template>
