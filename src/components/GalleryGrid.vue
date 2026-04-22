<template>
  <div>
    <!-- Photo Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(photo, i) in photos"
        :key="i"
        class="relative group overflow-hidden rounded-2xl cursor-pointer"
        @click="openLightbox(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt || 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie'"
          class="w-full h-60 object-cover transition group-hover:scale-105"
        />
        <!-- Optional hover overlay hint -->
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
          <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6L10 14"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Lightbox Overlay -->
    <Teleport to="body">
      <div
  v-if="lightboxIndex !== null"
  class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
  @click.self="closeLightbox"
  @keydown.escape="closeLightbox"
  @keydown.left="navigate(-1)"
  @keydown.right="navigate(1)"
  tabindex="0"
  ref="lightboxEl"

      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          @click="closeLightbox"
          aria-label="Fermer"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <!-- Prev button -->
        <button
          v-if="photos.length > 1"
          class="absolute left-4 text-white/80 hover:text-white p-2"
          @click="navigate(-1)"
          aria-label="Précédent"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="photos[lightboxIndex].src"
          :alt="photos[lightboxIndex].alt || 'MCS - Massonjo Chauffage Sanitaire'"
          class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
        />

        <!-- Next button -->
        <button
          v-if="photos.length > 1"
          class="absolute right-4 text-white/80 hover:text-white p-2"
          @click="navigate(1)"
          aria-label="Suivant"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <!-- Counter -->
        <p class="absolute bottom-4 text-white/60 text-sm">
          {{ lightboxIndex + 1 }} / {{ photos.length }}
        </p>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// defineProps({ photos: { type: Array, default: () => [] } })

const lightboxIndex = ref(null)
const lightboxEl = ref(null)

async function openLightbox(i) {
  lightboxIndex.value = i
  await nextTick()
  lightboxEl.value?.focus()
}

function closeLightbox() {
  lightboxIndex.value = null
}

const props = defineProps({ photos: { type: Array, default: () => [] } })

function navigate(dir) {
  lightboxIndex.value = (lightboxIndex.value + dir + props.photos.length) % props.photos.length
}
</script>