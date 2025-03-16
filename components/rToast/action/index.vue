<script setup lang="ts">
import { ToastAction, type ToastActionProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastActionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastAction v-bind="delegatedProps" class="c-toast__action">
    <slot />
  </ToastAction>
</template>

<style lang="scss" scoped>
@use "@/assets/css/rToast/action.scss";
</style>
