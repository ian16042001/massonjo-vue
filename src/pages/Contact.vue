<template>
  <div class="container max-w-5xl px-4 py-10 space-y-10">
    <!-- TOP ROW : FORM + CARD + MAP -->
    <div class="grid md:grid-cols-2 gap-10">
      <div>
        <h1 class="text-3xl font-bold mb-3">Avis & Contact</h1>
        <p class="text-gray-700 mb-6">Expliquez votre besoin et recevez un devis rapidement.</p>
        <ContactForm />

      </div>

      <div class="space-y-4">
        <div class="card text-center">
        <router-link to="/reservation" class="btn-primary mt-4 inline-block">Faites une réservation en ligne</router-link>
<p class="mb-2">ou contactez-nous directement.</p>
          <h2 class="text-lg font-bold text-primary">Horaires</h2>
          <p class="mt-2">Du lundi au samedi : 08 h – 18 h</p>
          <a href="tel:+33750972601" class="btn-ghost mt-3 inline-flex">
            📞 07 50 97 26 01
          </a>
        </div>

        <!-- Google Map -->
        <MapComponent />
        <!-- <a
          class="btn-ghost inline-flex w-full justify-center"
          target="_blank"
          href="https://www.google.fr/maps/place/189+Rue+des+Moineaux,+74930+Reignier-Ésery,+France"
        >
          Voir sur Google Maps
        </a> -->
      </div>
    </div>

    <!-- BOTTOM ROW : QR CODE + LIVE REVIEWS -->
  
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import MapComponent from '@/components/MapComponent.vue'
</script>