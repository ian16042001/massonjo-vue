<template>
  <div class="card">
    <h2 v-if="title" class="text-lg font-semibold text-primary mb-3">{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup>
defineProps({ title: String })
</script>