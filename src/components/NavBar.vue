<template>
  <header class="bg-white/90 backdrop-blur sticky top-0 z-40 border-b">
    <div class="container flex items-center justify-between py-4">
      <router-link to="/" class="flex items-center gap-2">
        <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="Logo" class="h-20 w-20" />
        <span class="font-bold text-lg">Massonjo Chauffage Sanitaire</span>
      </router-link>
      <button @click="open = !open" class="md:hidden btn-ghost">Menu</button>
      <nav class="hidden md:flex items-center gap-6">
        <router-link to="/" class="hover:text-primary">Accueil</router-link>
        <router-link to="/plomberie-sanitaire" class="hover:text-primary">Plomberie</router-link>
        <router-link to="/chauffage" class="hover:text-primary">Chauffage</router-link>
        <router-link to="/pompe-a-chaleur" class="hover:text-primary">Pompe à chaleur</router-link>
        <router-link to="/galerie-photos" class="hover:text-primary">Galerie</router-link>
        <router-link to="/avis-contact" class="btn-primary">Devis / Contact</router-link>
      </nav>
    </div>
    <div v-if="open" class="md:hidden border-t bg-white">
      <div class="container py-3 flex flex-col gap-2">
        <router-link @click="open=false" to="/">Accueil</router-link>
        <router-link @click="open=false" to="/plomberie-sanitaire">Plomberie</router-link>
        <router-link @click="open=false" to="/chauffage">Chauffage</router-link>
        <router-link @click="open=false" to="/pompe-a-chaleur">Pompe à chaleur</router-link>
        <router-link @click="open=false" to="/galerie-photos">Galerie</router-link>
        <router-link @click="open=false" to="/avis-contact" class="btn-primary w-full text-center">Devis / Contact</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
