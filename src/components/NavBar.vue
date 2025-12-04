<template>
  <header class="bg-white/90 backdrop-blur sticky top-0 z-40 border-b">
    <!-- top row : logo + desktop nav -->
    <div class="container flex items-center justify-between py-4">
      <router-link to="/" class="flex items-center gap-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa"
          alt="MCS"
          class="h-20 w-20"
        />
        <span class="font-bold text-lg">Massonjo Chauffage Sanitaire</span>
      </router-link>

      <!-- desktop nav -->
      <div class="hidden md:flex items-center gap-4">
        <nav class="flex items-center gap-6">
          <router-link to="/" class="hover:text-primary">Accueil</router-link>
          <router-link to="/plombier-chauffagiste-services" class="hover:text-primary">Services</router-link>
          <router-link to="/plomberie-sanitaire" class="hover:text-primary">Plomberie</router-link>
          <router-link to="/plombier-chauffagiste-chauffage" class="hover:text-primary">Chauffage</router-link>
          <router-link to="/pompe-a-chaleur" class="hover:text-primary">Pompe à chaleur</router-link>
          <router-link to="/plombier-chauffagiste-galerie-photos" class="hover:text-primary">Galerie</router-link>
          <router-link to="/avis-contact" class="btn-primary">Devis / Contact</router-link>
        </nav>

        <!-- CALL BUTTON -->
        <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center gap-2 px-4 py-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="font-semibold">07 50 97 26 01</span>
        </a>
      </div>

      <!-- mobile burger -->
      <button @click="open = !open" class="md:hidden btn-ghost">Menu</button>
    </div>

    <!-- mobile drawer -->
    <div v-if="open" class="md:hidden border-t bg-white">
      <div class="container py-3 flex flex-col gap-3">
        <router-link @click="open = false" to="/">Accueil</router-link>
        <router-link @click="open = false" to="/plombier-chauffagiste-services">Services</router-link>
        <router-link @click="open = false" to="/plomberie-sanitaire">Plomberie</router-link>
        <router-link @click="open = false" to="/plombier-chauffagiste-chauffage">Chauffage</router-link>
        <router-link @click="open = false" to="/pompe-a-chaleur">Pompe à chaleur</router-link>
        <router-link @click="open = false" to="/plombier-chauffagiste-galerie-photos">Galerie</router-link>
        <router-link @click="open = false" to="/avis-contact" class="btn-primary w-full text-center">Devis / Contact</router-link>

        <!-- mobile call button -->
        <a
          href="tel:+33750972601"
          class="btn-ghost w-full text-center flex items-center justify-center gap-2 mt-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span class="font-semibold">07 50 97 26 01</span>
        </a>
      </div>
    </div>

    <!-- city strip -->
    <CityBanner />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import CityBanner from '@/components/CityBanner.vue'

const open = ref(false)
</script>