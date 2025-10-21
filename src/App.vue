<template>
  <div>
    <TopBar />
    <NavBar />

    <main class="py-8">
      <router-view />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import TopBar from './components/TopBar.vue'
</script>
