<template>
  <button
    v-if="show"
    ref="button"
    class="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl bg-primary text-white flex items-center justify-center text-xl font-bold hover:bg-primary/90 active:scale-95 transition-all duration-300 border-3 border-white/80 shadow-primary/50 backdrop-blur-sm"
    :class="{ show: show }"
    @click="scrollToTop"
    title="Retour en haut"
    aria-label="Retour en haut de page"
  >
    ⬆
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const button = ref(null)
const show = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  show.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // initial check
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
button.show {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>