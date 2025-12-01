<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="(photo, i) in photos" :key="i" class="relative group overflow-hidden rounded-2xl">
      <img :src="photo.src" :alt="photo.alt || 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie' " class="w-full h-60 object-cover transition group-hover:scale-105">
    </div>
  </div>
</template>
<script setup>
defineProps({ photos: { type: Array, default: () => [] } })
</script>
