<template>
  <div class="container py-12 space-y-12">
    <!-- Hero Section -->
    <section class="text-center">
      <h1 class="text-4xl md:text-5xl font-black leading-tight text-primary mb-6">
        Services Plomberie Chauffage
      </h1>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-700 mb-8 max-w-3xl mx-auto">
        Tous vos travaux de plomberie, chauffage et rénovation à Reignier-Ésery, Annemasse et Haute-Savoie
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Changement mitigeur évier lavabo, création salle de bain, pose pompe à chaleur, réparation fuite, 
        changement chaudière cumulus radiateur, rénovation complète plomberie chauffage.
      </p>
    </section>

    <!-- Services Grid -->
    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Plomberie -->
      <div class="group bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Plomberie Sanitaire</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li>• Changement mitigeur évier et lavabo</li>
          <li>• Réparation de fuite urgente</li>
          <li>• Pose appareil sanitaire et meuble</li>
          <li>• Changement compteur d'eau</li>
          <li>• Changement WC et pose bâti-support</li>
        </ul>
        <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center  gap-2 px-4  mr-5"
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
        <!-- <RouterLink to="/contact" class="text-primary font-semibold hover:underline">Devis gratuit →</RouterLink> -->
        <RouterLink to="/plomberie-sanitaire" class="text-primary font-semibold hover:underline">En savoir plus →</RouterLink>

      </div>

      <!-- Chauffage -->
      <div class="group bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Chauffage</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li>• Changement de chaudière</li>
          <li>• Changement de radiateur</li>
          <li>• Changement réseau chauffage</li>
          <li>• Changement cumulus chauffe-eau</li>
        </ul>
        <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center  gap-2 px-4  mr-5"
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
        <!-- <RouterLink to="/contact" class="text-primary font-semibold hover:underline">Devis gratuit →</RouterLink> -->
        <RouterLink to="/plombier-chauffagiste-chauffage" class="text-primary font-semibold hover:underline">En savoir plus →</RouterLink>
      </div>

      <!-- Pompes à Chaleur -->
      <div class="group bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Pompe à Chaleur</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li>• Pose pompe à chaleur air/eau</li>
          <li>• Installation PAC gainable</li>
          <li>• Remplacement système ancien</li>
          <!-- <li>• Aides MaPrimeRénov'</li> -->
        </ul>
        <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center  gap-2 px-4  mr-5"
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
        <RouterLink to="/plombier-chauffagiste-pompe-a-chaleur" class="text-primary font-semibold hover:underline">En savoir plus →</RouterLink>
      </div>

      <!-- Rénovation -->
      <div class="group bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20">
          <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Rénovation Complète</h3>
        <ul class="space-y-2 text-gray-600 mb-6">
          <li>• Création salle de bain sur mesure</li>
          <li>• Rénovation plomberie complète</li>
          <li>• Modernisation réseau chauffage</li>
          <li>• Remplacement tous équipements</li>
          <li>• Travaux toutes pièces</li>
        </ul>
        <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center  gap-2 px-4  mr-5"
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
        <RouterLink to="/avis-contact" class="text-primary font-semibold hover:underline">Devis gratuit →</RouterLink>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="text-center bg-primary/5 rounded-3xl p-12">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Besoin d'un plombier chauffagiste ?</h3>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Intervention rapide à Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux. Installation, réparation, maintenance de plomberie, chauffage, pompe à chaleur. 
        Devis gratuit sous 24h pour changement mitigeur, chaudière, pompe à chaleur.
      </p>
              <a
          href="tel:+33750972601"
          class="btn-ghost flex items-center gap-2 px-4 py-2 mr-10"
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
      <RouterLink 
        to="/avis-contact" 
        class="inline-flex items-center bg-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Obtenir un devis gratuit
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
// import { useHead } from '@vueuse/head'

// useHead({
//   title: 'Services Plombier Chauffagiste - Massonjo Chauffage Sanitaire',
//   meta: [
//     {
//       name: 'description',
//       content: 'Changement mitigeur évier lavabo, création salle de bain, pose pompe à chaleur, changement chaudière cumulus radiateur, réparation fuite, plomberie chauffage rénovation à Reignier-Ésery Haute-Savoie. Devis gratuit 24h.'
//     },
//     { name: 'keywords', content: 'plombier Reignier, chauffagiste Haute-Savoie, changement mitigeur évier lavabo, création salle de bain, pose pompe à chaleur, changement chaudière cumulus, réparation fuite, plomberie, chauffage, rénovation' },
//     { name: 'robots', content: 'index, follow' }
//   ],
//   script: [{
//     type: 'application/ld+json',
//     children: JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "LocalBusiness",
//       "name": "Massonjo Chauffage Sanitaire",
//       "description": "Services complets plomberie chauffage Haute-Savoie",
//       "url": "https://www.massonjo-chauffage-sanitaire.fr/services",
//       "telephone": "+33-6-XX-XX-XX-XX",
//       "serviceType": ["Plombier", "Chauffagiste", "Pompe à chaleur"],
//       "areaServed": ["Reignier-Ésery", "Haute-Savoie", "Annemasse"]
//     })
//   }]
// })
</script>
