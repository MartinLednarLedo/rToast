<script setup lang="ts">
import { type ToastCloseProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastCloseProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastClose v-bind="delegatedProps"> X </ToastClose>
</template>
