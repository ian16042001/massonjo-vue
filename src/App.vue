<template>
  <div>
    <TopBar />
    <NavBar />

    <main class="py-8">
      <router-view />
    </main>

    <FooterBar />
        <!-- cookie banner -->
    <CookieBanner />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import TopBar from './components/TopBar.vue'
import CookieBanner from '@/components/CookieBanner.vue'
</script>
