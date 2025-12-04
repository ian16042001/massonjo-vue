<template>
  <RouterLink
    :to="route"
    class="shrink-0 rounded-2xl bg-primary/5 text-primary
           px-4 py-2 text-sm font-medium whitespace-nowrap
           hover:bg-primary/10 transition"
  >
    {{ name }}
  </RouterLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ name: String })

/* slugify :  La Roche-sur-Foron → la-roche-sur-foron */
const route = computed(() =>
  '/plombier-chauffagiste-' +
  props.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-')            // space → -
    .replace(/[^a-z0-9\-]/g, '')     // remove odd chars
)
</script>