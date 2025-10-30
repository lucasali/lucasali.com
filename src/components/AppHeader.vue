<script lang="ts" setup>
import { motion } from 'motion-v'
import Github from '~icons/carbon/logo-github'
import ToggleMode from './ToggleMode.vue'
import Button from './ui/Button.vue'

function openGitHub() {
  window.open('https://github.com/lucasali', '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <motion.header class="sticky top-0 z-10 flex items-center justify-end px-4 py-2">
    <div class="flex items-center">
      <Button size="icon" variant="ghost" aria-label="GitHub" @click="openGitHub()">
        <Github />
      </Button>

      <ToggleMode />
    </div>
  </motion.header>
</template>
