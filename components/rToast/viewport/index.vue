<script setup lang="ts">
import type { ToastViewportProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastViewportProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastViewport
    v-bind="delegatedProps"
    :class="props.class"
    class="c-toast-viewport"
  />
</template>

<style lang="scss" scoped>
@use "@/assets/css/rToast/viewport.scss";
@use "@/assets/css/rToast/root.scss";
</style>
