<template>
  <div class="relative overflow-hidden rounded-2xl shadow">
    <div class="relative w-full h-[260px] md:h-[420px]">
      <div class="absolute inset-0 flex transition-transform duration-700 ease-out"
           :style="{ transform: `translateX(-${current * 100}%)` }">
        <div v-for="(slide, i) in images" :key="i" class="min-w-full h-full relative">
          <img :src="slide.src" :alt="slide.alt || `Slide ${i+1}`"
               class="w-full h-full object-cover" />
          <div v-if="slide.caption" class="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-4 text-sm md:text-base">
            {{ slide.caption }}
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="prev" class="absolute left-2 top-1/2 -translate-y-1/2 btn-ghost px-3 py-2">‹</button>
    <button @click="next" class="absolute right-2 top-1/2 -translate-y-1/2 btn-ghost px-3 py-2">›</button> -->
    <div class="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
      <button v-for="(s, i) in images" :key="i"
              class="h-2 w-2 rounded-full transition"
              :class="i === current ? 'bg-white' : 'bg-white/50'"
              @click="go(i)"></button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
const props = defineProps({
  images: { type: Array, default: () => [] },
  autoplay: { type: Boolean, default: true },
  interval: { type: Number, default: 4000 }
})
const current = ref(0)
let timer = null
const next = () => { current.value = (current.value + 1) % props.images.length }
const prev = () => { current.value = (current.value - 1 + props.images.length) % props.images.length }
const go = (i) => { current.value = i }
const start = () => { if (!props.autoplay || props.images.length <= 1) return; stop(); timer = setInterval(next, props.interval) }
const stop = () => { if (timer) clearInterval(timer); timer = null }
onMounted(() => start())
onBeforeUnmount(() => stop())
watch(() => props.autoplay, () => { stop(); start() })
</script>
