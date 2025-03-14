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
  margin-bottom: 5px;
  font-weight: 500;
  color: black;
  font-size: 15px;
}
</style>
