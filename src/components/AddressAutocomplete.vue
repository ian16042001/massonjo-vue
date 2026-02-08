<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
    <div class="relative">
      <textarea
        v-model="form.address"
        @input="onAddressInput"
        @keydown.down.prevent="moveDown"
        @keydown.up.prevent="moveUp"
        @keydown.enter.prevent="selectHighlighted"
        @blur="hideSuggestionsDelayed"
        rows="2"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F26440] focus:border-transparent"
        placeholder="Commencez à taper votre adresse..."
      ></textarea>
      
      <!-- Liste des suggestions -->
      <ul v-if="suggestions.length > 0 && showSuggestions" 
          class="absolute z-50 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
        <li v-for="(suggestion, index) in suggestions" 
            :key="index"
            @mousedown.prevent="selectAddress(suggestion)"
            class="px-4 py-3 cursor-pointer hover:bg-orange-50 border-b border-gray-100 last:border-0"
            :class="{ 'bg-orange-100': index === highlightedIndex }"
        >
          <div class="font-medium text-gray-900">{{ suggestion.formatted }}</div>
          <div class="text-sm text-gray-500">{{ suggestion.city }}, {{ suggestion.postcode }}</div>
        </li>
      </ul>
    </div>
    
    <!-- Loader -->
    <div v-if="loading" class="mt-2 text-sm text-gray-500 flex items-center gap-2">
      <span class="animate-spin">⏳</span> Recherche...
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const form = ref({
  address: props.modelValue || ''
})

const suggestions = ref([])
const showSuggestions = ref(false)
const loading = ref(false)
const highlightedIndex = ref(-1)

let debounceTimer = null

// Clé API Geoapify
const GEOAPIFY_API_KEY = import.meta.env.VITE_GEOAPIFY_KEY || '691dcbb32ee8477f8412555e513184c4'

function onAddressInput() {
  emit('update:modelValue', form.value.address)
  
  clearTimeout(debounceTimer)
  
  if (form.value.address.length < 3) {
    suggestions.value = []
    showSuggestions.value = false
    return
  }
  
  debounceTimer = setTimeout(() => {
    fetchSuggestions()
  }, 300)
}

async function fetchSuggestions() {
  if (form.value.address.length < 3 || !GEOAPIFY_API_KEY) return
  
  loading.value = true
  
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?` +
      `text=${encodeURIComponent(form.value.address)}&` +
      `filter=countrycode:fr&` +
      `lang=fr&` +
      `limit=5&` +
      `apiKey=${GEOAPIFY_API_KEY}`
    )
    
    const data = await response.json()
    
    if (data.features) {
      suggestions.value = data.features.map(feature => ({
        formatted: feature.properties.formatted,
        city: feature.properties.city,
        postcode: feature.properties.postcode
      }))
      showSuggestions.value = true
      highlightedIndex.value = -1
    }
  } catch (error) {
    console.error('Erreur autocomplétion:', error)
  } finally {
    loading.value = false
  }
}

function selectAddress(suggestion) {
  form.value.address = suggestion.formatted
  emit('update:modelValue', suggestion.formatted)
  suggestions.value = []
  showSuggestions.value = false
}

function moveDown() {
  if (highlightedIndex.value < suggestions.value.length - 1) {
    highlightedIndex.value++
  }
}

function moveUp() {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--
  }
}

function selectHighlighted() {
  if (highlightedIndex.value >= 0) {
    selectAddress(suggestions.value[highlightedIndex.value])
  }
}

function hideSuggestionsDelayed() {
  setTimeout(() => {
    showSuggestions.value = false
  }, 200)
}

watch(() => props.modelValue, (newVal) => {
  form.value.address = newVal || ''
})
</script>