<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { Motion } from 'motion-v'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [corner-shape:squircle]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-2xl px-3',
        lg: 'h-11 rounded-2xl px-8',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
}

// eslint-disable-next-line vue/define-macros-order
withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <Motion as-child :initial="{ scale: 1 }" :while-press="{ scale: 0.95 }">
    <component :is="as" :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')">
      <slot />
    </component>
  </Motion>
</template>
