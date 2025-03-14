<script setup lang="ts">
import { type ToastTitleProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastTitleProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastTitle v-bind="delegatedProps" :class="props.class">
    <slot />
  </ToastTitle>
</template>
