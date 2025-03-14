<script setup lang="ts">
import {
  type ToastRootEmits,
  type ToastRootProps,
  useForwardPropsEmits,
} from "reka-ui";

const props = defineProps<
  ToastRootProps & {
    onOpenChange?: (value: boolean) => void;
  }
>();

console.log("PROPS", props);

const emits = defineEmits<ToastRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <ToastRoot
    v-slot="{ remaining }"
    v-bind="forwarded"
    @update:open="onOpenChange"
  >
    {{ remaining }}
    <slot />
  </ToastRoot>
</template>
