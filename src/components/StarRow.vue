<template>
  <div class="flex items-center gap-1" aria-label="Note">
    <span v-for="i in 5" :key="i" :class="i <= rounded ? 'text-primary' : 'text-gray-300'">★</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ value: { type: Number, default: 0 } })
const rounded = computed(() => Math.round(props.value || 0))
</script>
