<script setup lang="ts">
import type { Transition } from 'motion-v'
import { useDark, useToggle } from '@vueuse/core'
import { AnimatePresence, motion } from 'motion-v'
import Moon from '~icons/lucide/moon-star'
import Sun from '~icons/lucide/sun'
import Button from '@/components/ui/Button.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const variants = {
  visible: { opacity: 1, scale: 1, filter: 'blur(0)' },
  hidden: { opacity: 0, scale: 0.5, filter: 'blur(4px)' },
}

const transition: Transition = {
  duration: 0.1,
  ease: 'easeOut',
}
</script>

<template>
  <Button size="icon" variant="outline" @click="toggleDark()">
    <AnimatePresence :initial="false" mode="wait">
      <motion.div
        v-if="isDark"
        key="sun"
        :variants="variants"
        :transition="transition"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Sun />
      </motion.div>
      <motion.div
        v-else
        key="moon"
        :variants="variants"
        :transition="transition"
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Moon />
      </motion.div>
    </AnimatePresence>
  </Button>
</template>
