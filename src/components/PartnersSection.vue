<template>
  <section class="bg-white py-12 border-t">
    <div class="container">
      <h2 class="text-2xl font-bold mb-6 text-center">Partenaires & Marques</h2>
      <p class="text-gray-700 mb-6 text-center">Des marques reconnues pour des installations fiables et durables.</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div v-for="(p, i) in partners" :key="i"
             class="flex items-center justify-center rounded-2xl border bg-white py-4 px-3 hover:shadow transition">
          <template v-if="p.logo">
            <a :href="p.url" target="_blank" rel="noopener noreferrer">
              <img :src="p.logo" :alt="p.name" class="h-8 object-contain" />
            </a>
          </template>
          <template v-else>
            <span class="font-medium text-gray-700">{{ p.name }}</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  partners: {
    type: Array,
    default: () => [
      { name: 'Atlantic' },
      { name: 'Daikin' },
      { name: 'De Dietrich' },
      { name: 'Grohe' },
    ]
  }
})
</script>
