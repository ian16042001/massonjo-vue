<template>
  <section class="py-1 bg-white border-y">
    <div class="text-center text-sm text-gray-500 mb-3">Zone d’intervention</div>

    <div class="relative px-4">
      <!-- scroll-hint  -->
      <div
        v-if="!scrolled"
        class="absolute right-0 top-0 h-full flex items-center pr-4 pointer-events-none text-gray-400"
      >
        <span class="mr-2 text-xs hidden sm:inline">défilez</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div v-if="!scrolled" class="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white pointer-events-none" />

      <!-- scrollable strip  -->
      <div
        ref="strip"
        class="flex gap-4 overflow-x-auto pb-3 scrollbar-hide"
        @scroll="onScroll"
      >
        <CityCard v-for="(city, i) in cities" :key="i" :name="city" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CityCard from '@/components/CityCard.vue'

defineProps({
  cities: {
    type: Array,
    default: () => [
      "Annemasse","La Roche-sur-Foron","Gaillard", "Pers-Jussy","Monnetier-Mornex","Fillinges","Bonneville", "Arthaz-Pont-Notre-Dame", "Nangy", "Vetrazmonthoux", "La muraz", "cornier", "Bonne", "Scientrier", "Entrembieres", "Contaminé-Sur-Arve", "Cranves-Sales","Arbusigny", "Douvaine", "Mieussy", "Charvonnex", "Lully", "Bons-en-Chablais", "Copponex", "Ballaison", "La tour", "Neyden", "Ayse", "Étaux"



    ]
  }
})

const strip = ref(null)
const scrolled = ref(false)

function onScroll () {
  scrolled.value = strip.value.scrollLeft > 10
}
</script>

<style scoped>
/* completely hidden scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE 10+ */
  scrollbar-width: none;     /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;             /* Chrome / Safari */
}
</style>