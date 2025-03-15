<script setup lang="ts">
import { PhInfo } from "@phosphor-icons/vue";
import { isVNode } from "vue";

const { toasts } = useToast();
</script>

<template>
  <RToastProvider>
    <RToast v-for="toast in toasts" :key="toast.id" v-bind="toast">
      <PhInfo v-if="toast.variant === 'info'" />

      <RToastTitle v-if="toast.title">
        {{ toast.title }}
      </RToastTitle>

      <template v-if="toast.description">
        <RToastDescription v-if="isVNode(toast.description)">
          <component :is="toast.description" />
        </RToastDescription>
        <RToastDescription v-else>
          {{ toast.description }}
        </RToastDescription>
      </template>

      <RToastClose />

      <component :is="toast.action" />
    </RToast>

    <RToastViewport />
  </RToastProvider>
</template>
