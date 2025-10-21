<template>
  <div class="container grid md:grid-cols-2 gap-10">
    <div>
      <h1 class="text-3xl font-bold mb-3">Avis & Contact</h1>
      <p class="text-gray-700 mb-6">Expliquez votre besoin et recevez un devis rapidement.</p>
      <ContactForm />

      <!-- Reviews -->
      <!-- <ReviewsList />
      <ReviewForm /> -->
    </div>
    <div class="space-y-4">
      <div class="card">
        <h3 class="font-semibold">Téléphone</h3>
        <a class="block mt-1 hover:underline" href="tel:+33750972601">07 50 97 26 01</a>
      </div>
      <div class="card">
        <h3 class="font-semibold">Adresse</h3>
        <p class="mt-1">189 Rue des Moineaux, 74930 Reignier-Ésery</p>
        <a class="btn-ghost mt-3 inline-flex" target="_blank"
           href="https://www.google.fr/maps/place/189+Rue+des+Moineaux,+74930+Reignier-Esery,+France">
          Voir sur Google Maps
        </a>
      </div>
    </div>
  </div>

  <div class="container grid md:grid-cols-2 gap-10">
    <div>

      <ReviewsList />
      <!-- <ReviewForm /> -->
    </div>
    <div class="space-y-4">
      <ReviewForm />
    </div>
  </div>
</template>

<script setup>
import ContactForm from '@/components/ContactForm.vue'
import ReviewsList from '@/components/ReviewsList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
</script>
