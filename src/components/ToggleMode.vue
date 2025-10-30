<script setup lang="ts">
import type { Transition } from 'motion-v'
import { useDark, useToggle } from '@vueuse/core'
import { AnimatePresence, motion } from 'motion-v'
import Moon from '~icons/carbon/moon'
import Sun from '~icons/carbon/sun'
import Button from '@/components/ui/Button.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const variants = {
  visible: { opacity: 1, scale: 1, filter: 'blur(0)' },
  hidden: { opacity: 0, scale: 0.25, filter: 'blur(4px)' },
}

const transition: Transition = {
  type: 'spring',
  duration: 0.3,
  bounce: 0,
}
</script>

<template>
  <Button size="icon" variant="ghost" aria-label="Toggle dark mode" @click="toggleDark()">
    <AnimatePresence mode="popLayout" :initial="false">
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
