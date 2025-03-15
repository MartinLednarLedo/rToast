<script setup lang="ts">
import type { ToastDescriptionProps } from "reka-ui";
import { computed, type HTMLAttributes } from "vue";

const props = defineProps<
  ToastDescriptionProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <ToastDescription
    :class="props.class"
    v-bind="delegatedProps"
    class="c-toast__description"
  >
    <slot />
  </ToastDescription>
</template>

<style lang="scss" scoped>
.c-toast__description {
  grid-area: description;
  color: inherit;
  font-size: 1.3rem;
  line-height: 1.3;
}
</style>
