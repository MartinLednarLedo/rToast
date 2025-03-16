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
@use "@/assets/css/rToast/close.scss";
</style>
