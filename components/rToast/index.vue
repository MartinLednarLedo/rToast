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

const emits = defineEmits<ToastRootEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :duration="2000"
    class="c-toast"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>
