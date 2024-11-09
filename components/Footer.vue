<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="py-3 text-center text-sm text-gray-500">
    <p>Built with Vue.js, Nuxt, and TailwindCSS</p>
    <p class="flex items-center justify-center gap-1">
      <Icon name="ph:heart-fill" class="size-4 text-red-500" />
      <span>Last updated {{ currentYear }}</span>
    </p>
  </footer>
</template>
