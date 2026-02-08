<template>
  <div>
    <TopBar v-if="!isAdminRoute && !isCompanyInfoRoute"/>
    <NavBar v-if="!isAdminRoute && !isCompanyInfoRoute" />

    <main :class="isAdminRoute || isCompanyInfoRoute ? '' : 'py-8'">
      <router-view />
    </main>

    <ScrollToTop v-if="!isAdminRoute && !isCompanyInfoRoute" />
    <FooterBar v-if="!isAdminRoute && !isCompanyInfoRoute" />
    <CookieBanner v-if="!isAdminRoute && !isCompanyInfoRoute" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import TopBar from './components/TopBar.vue'
import CookieBanner from '@/components/CookieBanner.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

const route = useRoute()

// Masquer NavBar/Footer sur les routes admin
const isAdminRoute = computed(() => {
  return route.path.startsWith('/admin')
})

const isCompanyInfoRoute = computed(() => {
  return route.path.startsWith('/presentation-mcs')
})
</script>