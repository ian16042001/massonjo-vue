<template>
  <div class="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow">
    <img  :src="after" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"  class="block w-full select-none pointer-events-none">
    <div class="absolute inset-0 overflow-hidden" :style="{ width: percent + '%' }">
      <img :src="before" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"  class="block w-full select-none pointer-events-none">
    </div>
    <input type="range" v-model="percent" min="0" max="100"
           class="absolute left-0 right-0 bottom-2 mx-auto w-[90%]" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({ before: String, after: String })
const percent = ref(50)
</script>
