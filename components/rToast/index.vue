<script setup lang="ts">
import type { RToastProps } from "../../composables/useToast";
import { type ToastRootEmits, useForwardPropsEmits } from "reka-ui";
import { rToastStyles } from "./rToast.styles";

const props = withDefaults(defineProps<RToastProps>(), {
  duration: 5000,
  withProgressBar: false,
  onOpenChange: undefined,
  class: "",
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const emits = defineEmits<ToastRootEmits>();

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <ToastRoot
    v-slot="{ remaining }"
    v-bind="forwarded"
    :class="rToastStyles({ intent: props.variant, class: props.class })"
    @update:open="onOpenChange"
  >
    <slot />

    <div
      v-if="withProgressBar"
      class="c-toast__progress-bar"
      :style="{ width: `${(remaining / props.duration) * 100 - 3}%` }"
    />
  </ToastRoot>
</template>
