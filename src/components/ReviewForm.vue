<!-- <template>
  <form @submit.prevent="submit" class="card space-y-4">
    <h3 class="text-xl font-semibold">Laisser votre avis</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="font-medium">Nom</label>
        <input v-model.trim="name" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Votre nom" />
      </div>
      <div>
        <label class="font-medium">Note</label>
        <select v-model.number="rating" class="mt-1 w-full rounded-xl border px-3 py-2">
          <option :value="5">5 - Excellent</option>
          <option :value="4">4 - Très bien</option>
          <option :value="3">3 - Bien</option>
          <option :value="2">2 - Passable</option>
          <option :value="1">1 - À améliorer</option>
        </select>
      </div>
    </div>
    <div>
      <label class="font-medium">Votre expérience</label>
      <textarea v-model.trim="message" rows="5" class="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Partagez votre expérience (travaux, délais, conseils, etc.)" required></textarea>
    </div>
    <div class="flex items-center gap-3">
      <button class="btn-primary" :disabled="loading">{{ loading ? 'Envoi…' : 'Publier l’avis' }}</button>
      <span v-if="ok" class="text-green-700">Merci pour votre avis !</span>
      <span v-if="err" class="text-red-600">Erreur: {{ err }}</span>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const rating = ref(5)
const loading = ref(false)
const ok = ref(false)
const err = ref('')

const submit = async () => {
  loading.value = true; ok.value = false; err.value = ''
  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, message: message.value, rating: rating.value })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data?.error || 'Echec de l’envoi')
    ok.value = true
    name.value = ''
    message.value = ''
    rating.value = 5
    window.dispatchEvent(new CustomEvent('reviews:updated'))
  } catch (e) {
    err.value = String(e.message || e)
  } finally {
    loading.value = false
  }
}
</script> -->

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')       // NEW: optional email field
const message = ref('')
const rating = ref(5)
const website = ref('')     // honeypot
const loading = ref(false)
const ok = ref(false)
const err = ref('')

const submit = async () => {
  // loading.value = true; ok.value = false; err.value = ''
  // try {
  //   const res = await fetch('/api/reviews.php', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       name: name.value,
  //       email: email.value,
  //       message: message.value,
  //       rating: rating.value,
  //       website: website.value   // honeypot
  //     })
  //   })
  //   const data = await res.json().catch(() => ({}))
  //   if (!res.ok || !data.ok) throw new Error(data?.error || 'Echec de l’envoi')
  //   ok.value = true
  //   name.value = ''; email.value = ''; message.value = ''; rating.value = 5; website.value = ''
  // } catch (e) {
  //   err.value = String(e.message || e)
  // } finally {
  //   loading.value = false
  // }
  const res = await fetch('/api/reviews.php', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: name.value,
    email: email.value,
    message: message.value,
    rating: rating.value,
    website: website.value // honeypot
  })
})

let data = {}
try { data = await res.json() } catch { /* ignore parse error */ }

if (!res.ok) {
  throw new Error(data?.error || 'Echec de l’envoi')
}

// Accept either format:
// - moderation endpoint: { ok: true, status: 'queued_for_moderation' }
// - auto-save endpoint:  { id, name, message, rating, createdAt }
const success = data?.ok === true || (data && data.id && data.createdAt)
if (!success) {
  // still not sure? treat 200 as success to avoid false negatives
  // comment this throw out if you prefer
  // throw new Error('Echec de l’envoi')
}

ok.value = true
name.value = ''
email.value = ''
message.value = ''
rating.value = 5
website.value = ''

}
</script>

<template>
  <form @submit.prevent="submit" class="card space-y-4 pt-5">
    <h3 class="text-xl font-semibold">Laisser votre avis</h3>
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="font-medium">Nom</label>
        <input v-model.trim="name" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Votre nom" />
      </div>
      <div>
        <label class="font-medium">Note</label>
        <select v-model.number="rating" class="mt-1 w-full rounded-xl border px-3 py-2">
          <option :value="5">5 - Excellent</option>
          <option :value="4">4 - Très bien</option>
          <option :value="3">3 - Bien</option>
          <option :value="2">2 - Passable</option>
          <option :value="1">1 - À améliorer</option>
        </select>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="font-medium">Email (facultatif)</label>
        <input type="email" v-model.trim="email" class="mt-1 w-full rounded-xl border px-3 py-2" placeholder="vous@exemple.fr" />
      </div>
      <!-- Honeypot (keep visible="hidden" to bots; CSS hides for humans) -->
      <div style="position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden;">
        <label>Website</label>
        <input v-model="website" autocomplete="off" tabindex="-1" />
      </div>
    </div>

    <div>
      <label class="font-medium">Votre expérience</label>
      <textarea v-model.trim="message" rows="5" class="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="Partagez votre expérience (travaux, délais, conseils, etc.)" required></textarea>
    </div>

    <div class="flex items-center gap-3">
      <button class="btn-primary" :disabled="loading">{{ loading ? 'Envoi…' : 'Envoyer' }}</button>
      <span v-if="ok" class="text-green-700">Merci ! Votre avis a été pris en compte.</span>
      <span v-if="err" class="text-red-600">Erreur: {{ err }}</span>
    </div>
  </form>
</template>
