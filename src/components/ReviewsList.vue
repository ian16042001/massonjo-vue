<template>
  <section class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-xl font-semibold">Avis clients</h3>
      <div v-if="stats.count > 0" class="text-sm text-gray-600">
        <span class="inline-flex items-center gap-1">
          <StarRow :value="stats.avg" />
          <span class="ml-1">{{ stats.avg.toFixed(1) }}/5 · {{ stats.count }} avis</span>
        </span>
      </div>
    </div>

    <div v-if="!loaded" class="text-gray-500">Chargement des avis…</div>
    <div v-else-if="reviews.length === 0" class="text-gray-500">Aucun avis pour le moment.</div>

    <div v-else class="space-y-4">
      <article v-for="r in reviews" :key="r.id || r.createdAt || Math.random()" class="card">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h4 class="font-semibold">{{ r.name || 'Client' }}</h4>
            <div v-if="formatDate(r.createdAt)" class="text-sm text-gray-500">{{ formatDate(r.createdAt) }}</div>
          </div>
          <StarRow :value="Number(r.rating) || 0" />
        </div>
        <p class="mt-3 whitespace-pre-line text-gray-800">{{ r.message }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import StarRow from './StarRow.vue'

const reviews = ref([])
const loaded = ref(false)

const fetchReviews = async () => {
  try {
    // fetch the static JSON file; bust caches
    const res = await fetch(`/data/reviews.json?ts=${Date.now()}`, { cache: 'no-store' })
    let data = []
    try { data = await res.json() } catch { data = [] }
    reviews.value = Array.isArray(data) ? data : []
  } catch (e) {
    reviews.value = []
    console.error('Failed to load reviews.json', e)
  } finally {
    loaded.value = true
  }
}

onMounted(fetchReviews)

const stats = computed(() => {
  const arr = reviews.value
  const count = Array.isArray(arr) ? arr.length : 0
  const avg = count ? arr.reduce((s, r) => s + (Number(r.rating) || 0), 0) / count : 0
  return { count, avg }
})

const formatDate = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  // guard against Invalid Date
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
