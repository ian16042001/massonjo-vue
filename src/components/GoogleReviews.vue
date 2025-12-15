<template>
  <section class="card">
    <h2 class="text-xl font-bold text-primary mb-4">Avis clients Google</h2>

    <div v-if="pending" class="text-gray-500">Chargement des avis…</div>
    <div v-else-if="error" class="text-red-600">Impossible de charger les avis.</div>
    <div v-else-if="!reviews.length" class="text-gray-500">Aucun avis pour le moment.</div>

    <ul v-else class="space-y-4">
      <li v-for="r in reviews" :key="r.id" class="border-b pb-4 last:border-0">
        <div class="flex items-start justify-between">
          <div>
            <p class="font-semibold">{{ r.author }}</p>
            <div class="text-sm text-gray-500">{{ r.date }}</div>
          </div>
          <StarRow :value="r.rating" />
        </div>
        <p class="mt-2 whitespace-pre-line text-gray-800">{{ r.text }}</p>
      </li>
    </ul>

    <div class="mt-6 text-center">
      <a
        :href="reviewUrl"
        target="_blank"
        class="btn-primary"
      >
        ⭐ Laisser un avis
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StarRow from '@/components/StarRow.vue'

const PLACE_ID = 'ChIJeducxcBzjEcR80tnRyUuCmE' // <-- your Place ID
const reviewUrl = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`

const reviews = ref([])
const pending = ref(true)
const error   = ref(false)

onMounted(async () => {
  try {
    // public JSON feed (no API key)
    const url = `https://www.google.com/maps/preview/reviews/list?authuser=0&hl=fr&gl=fr&pb=!1m2!1y${PLACE_ID}!2y0!2m2!1y10!2y0!3e1`
    const res = await fetch(url)
    const text = await res.text()

    // Google returns weird )]}' prefix + JSON lines
    const json = JSON.parse(text.slice(4))
    const data = json[0][2] // path to reviews array

    reviews.value = data.map(r => ({
      id:     r[0],
      author: r[1][0][0],
      text:   r[3],
      rating: r[4],
      date:   new Date(r[2] * 1000).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    }))
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    pending.value = false
  }
})
</script>