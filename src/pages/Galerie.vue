<template>
  <div class="container">
    <h1 class="text-3xl font-bold mb-6 text-center">Galerie photos de votre plombier chauffagiste à Reignier-Ésery </h1>

    <div class=" grid md:grid-cols-2 gap-8 items-center mb-5">
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
      <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/galeri2.webp" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie -- AC" />

    </div>

    <GalleryGrid :photos="photos" />

    <h2 class="text-2xl font-bold mt-12 mb-4">Avant / Après</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <BeforeAfter
        before="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Favant%25204.webp?alt=media&token=bb0a9c5d-a15d-4a80-a025-d52a86216bd2"
        after="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fapres%25204.webp?alt=media&token=ac4db266-c06f-4f7a-a138-69d5a550e4c3" />
      <BeforeAfter
        before="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/avant%201.jpg"
        after="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/apres%201.jpg" />
      <BeforeAfter
        before="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/avant%202.jpg"
        after="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/apres%202.jpg" />
      <BeforeAfter
        before="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/avant%203.jpg"
        after="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/Galerie/apres%203.jpg" />
    </div>
  </div>
</template>

<script setup>
import GalleryGrid from '@/components/GalleryGrid.vue'
import BeforeAfter from '@/components/BeforeAfter.vue'

const photos = [
  { src: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/galeri5.webp', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Plombier chauffagiste à Reignier-Ésery' },
  { src: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/galeri1.webp', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Douche à Reignier-Ésery' },
  { src: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/galeri3.webp', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Équipement sanitaire' },
  { src: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/galeri4.webp', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Rénovation salle de bains' },
]
</script>
