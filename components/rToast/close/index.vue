<script setup lang="ts">
import { PhX } from "@phosphor-icons/vue";
import type { ToastCloseProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

const props = defineProps<
  ToastCloseProps & {
    class?: HTMLAttributes["class"];
  }
>();
</script>

<template>
  <ToastClose v-bind="props" class="c-toast__close">
    <PhX class="c-ico" />
  </ToastClose>
</template>

<style lang="scss" scoped>
button {
  all: unset;
}

.c-toast__close {
  & {
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    font-size: 1.5rem;
  }

  &:hover {
    & {
      opacity: 1;
    }
  }
}
</style>
