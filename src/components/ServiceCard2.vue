<template>
  <article class="card h-full flex flex-col ">
    <img v-if="img" :src="img" class="rounded-xl mb-4 w-full object-cover max-h-48" :alt="alt || 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie' ">
    <h3 class="font-semibold text-lg">{{ title }}</h3>
    <p class="text-sm text-gray-600 mt-2 flex-1"><slot /></p>
    <!-- <router-link :to="to" class="mt-4 btn-ghost w-fit">Lire la suite</router-link> -->
  </article>
</template>
<script setup>
defineProps({ title: String, img: String, to: String, alt: String })
</script>
