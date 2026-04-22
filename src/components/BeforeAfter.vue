<!-- !! OLD VERSION -->
<!-- <template>
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
</script> -->

<!-- !! NEW VERSION -->
 <template>
  <div
    class="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow select-none"
    ref="container"
  >
    <!-- After image (base layer) -->
    <img :src="after" alt="..." class="block w-full pointer-events-none" draggable="false" />

    <!-- Before image (clipped layer) -->
    <div class="absolute inset-0 overflow-hidden" :style="{ width: percent + '%' }">
      <img :src="before" alt="..." class="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" />
    </div>

    <!-- Divider line -->
    <div class="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none" :style="{ left: percent + '%' }" />

    <!-- Drag handle -->
    <div
      class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center pointer-events-none"
      :style="{ left: percent + '%' }"
    >
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3"/>
      </svg>
    </div>

    <!-- Hint overlay -->
    <Transition name="hint-fade">
      <div
        v-if="showHint"
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <!-- Left arrow -->
        <div class="flex items-center gap-3 bg-black/50 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
          <svg class="w-4 h-4 animate-hint-left" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Glisser pour comparer</span>
          <svg class="w-4 h-4 animate-hint-right" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </div>
      </div>
    </Transition>

    <!-- Range input -->
    <input
      type="range"
      v-model="percent"
      min="0" max="100"
      class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      @input="onInteract"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ before: String, after: String })
const percent = ref(50)
const showHint = ref(true)

function onInteract() {
  showHint.value = false
}
</script>

<style scoped>
.hint-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hint-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@keyframes nudge-left {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-4px); }
}
@keyframes nudge-right {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}
.animate-hint-left  { animation: nudge-left  1s ease-in-out infinite; }
.animate-hint-right { animation: nudge-right 1s ease-in-out infinite; }
</style>