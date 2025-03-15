<script setup lang="ts">
import type { ToastTitleProps } from "reka-ui";
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
  <ToastTitle
    v-bind="delegatedProps"
    :class="props.class"
    class="c-toast__title"
  >
    <slot />
  </ToastTitle>
</template>

<style lang="scss" scoped>
.c-toast__title {
  grid-area: title;
  font-weight: 600;
  color: inherit;
  font-size: 1.5rem;
  padding-bottom: 0.4rem;
}
</style>
