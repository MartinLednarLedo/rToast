<script setup lang="ts">
const { toast } = useToast();
</script>

<template>
  <RToaster />

  <button
    :style="{ position: 'fixed', right: '2rem', top: '2rem' }"
    @click="toast({ title: 'Toast' })"
  >
    Create toast
  </button>
</template>
