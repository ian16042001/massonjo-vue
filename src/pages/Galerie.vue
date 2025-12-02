<template>
  <div class="container">
    <h1 class="text-3xl font-bold mb-6 text-center">Galerie photos de votre plombier chauffagiste à Reignier-Ésery </h1>

    <div class="container grid md:grid-cols-2 gap-8 items-center mb-5 bg-gradient-to-br from-primary/10 to-purple-200 rounded-2xl shadow-lg px-6 md:px-12 py-6">
      <div class="space-y-3 text-gray-700">
        <h2 class="text-xl font-semibold">Découvrez en images les réalisations de Massonjo Chauffage Sanitaire en Haute-Savoie </h2>
        <!-- <ul class="list-disc pl-5">
          <li>Économies d'énergie et réduction des émissions de CO₂</li>
          <li>Confort toute l'année</li>
          <li>Subventions et aides disponibles</li>
        </ul> -->
        <P>
          Parcourez la galerie photos de MCS à Reignier-Ésery et découvrez toutes mes réalisations.
        </P>
      </div>
      <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/galeri2.webp?alt=media&token=a8677bb4-7809-4b3d-a3b7-23057d985409" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie -- AC" />

    </div>

    <GalleryGrid :photos="photos" />

    <h2 class="text-2xl font-bold mt-12 mb-4">Avant / Après</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <BeforeAfter
        before="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Favant%25204.webp?alt=media&token=bb0a9c5d-a15d-4a80-a025-d52a86216bd2"
        after="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fapres%25204.webp?alt=media&token=ac4db266-c06f-4f7a-a138-69d5a550e4c3" />
      <BeforeAfter
        before="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/avant%201.jpg?alt=media&token=94b30964-003d-4d36-9599-e08b59b11c5e"
        after="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/apres%201.jpg?alt=media&token=46b566f8-d1b6-423e-8a97-5fed1c1f34bd" />
      <BeforeAfter
        before="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/avant%202.jpg?alt=media&token=bfa43e5d-ae43-45b7-8db9-670475f5212d"
        after="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/apres%202.jpg?alt=media&token=dcd319d2-be64-40c0-b2d5-caf80d31bfa4" />
      <BeforeAfter
        before="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/avant%203.jpg?alt=media&token=5014a2f2-0029-4a33-920b-ed860f255c81"
        after="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/apres%203.jpg?alt=media&token=a1a737d5-082e-4762-98ee-c92f6f04eba6" />
    </div>
  </div>
</template>

<script setup>
import GalleryGrid from '@/components/GalleryGrid.vue'
import BeforeAfter from '@/components/BeforeAfter.vue'

const photos = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/galeri5.webp?alt=media&token=f1d661a0-8254-4d1b-9d45-5469fb104ca4', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Plombier chauffagiste à Reignier-Ésery' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/galeri1.webp?alt=media&token=db878671-6968-43ab-aa36-d4f18fcb9f47', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Douche à Reignier-Ésery' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/galeri3.webp?alt=media&token=ea57d930-d187-4c98-ba2f-0a7bfbb96343', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Équipement sanitaire' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/galeri4.webp?alt=media&token=53595f15-2fe6-4980-9586-eac875092988', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Rénovation salle de bains' },
]
</script>
