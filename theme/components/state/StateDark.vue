<script setup>
import { isDark } from '#/theme/composables/state'

</script>

<template>
  <button class="p-2 text-xl" @click="isDark = !isDark" aria-label="Toggle dark mode">
    <div class="i-carbon-moon" v-show="isDark"></div>
    <div class="i-ion-ios-sunny" v-show="!isDark"></div>
  </button>
</template>
