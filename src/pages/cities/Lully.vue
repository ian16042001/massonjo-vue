<template>

      <!-- Carousel -->
    <section class="container py-6">
      <Carousel :images="slides" />
      <h1 class="text-3xl md:text-3xl font-extrabold leading-tight text-center pt-3 text-primary">PLOMBIER CHAUFFAGISTE À LULLY</h1>
      <h1 class="text-3xl md:text-3xl font-extrabold leading-tight text-center pt-3 text-primary">MASSONJO CHAUFFAGE SANITAIRE</h1>
      <div class="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
        <p>
          Votre expert plombier chauffagiste dédié à l'excellence dans tous vos projets d'installation et de maintenance.

          Je suis spécialisé dans les installations de pompes à chaleur et je m'engage à fournir des solutions durables et efficaces pour tous vos besoins en plomberie et chauffage.

          Que ce soit pour une nouvelle installation, une réparation urgente ou un entretien régulier, je suis là pour garantir une réalisation impeccable et des performances optimales de vos systèmes.

          Confiez-moi vos projets pour bénéficier d'une expertise reconnue et d'un service clientèle exceptionnel.
        </p>
      </div>
    </section>

  <HeroSection city="Lully" />

      <!-- QUI SUIS-JE -->
  <PresentationSection />

</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
// import ServiceCard from '@/components/ServiceCard.vue'
import Carousel from '@/components/Carousel.vue'
import PresentationSection from '@/components/PresentationSection.vue'
// import PartnersSection from '@/components/PartnersSection.vue'

const slides = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau1.webp?alt=media&token=355f482f-cdd8-42b1-bca7-bdc664f78467', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Salle de bains rénovée', caption: '' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau2.webp?alt=media&token=45f73e76-a061-4ad6-a91e-52fcb70cef44', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Système de chauffage', caption: '' },
]

// const partners = [
//   { name: 'partenaire0', logo: 'https://www.cedeo.fr/_next/image?url=https%3A%2F%2Fwww.cedeo.fr%2Fsites%2Fdefault%2Ffiles%2Flogo%2Flogo_cedeo_nouv.png&w=1920&q=75', url: 'https://www.cedeo.fr/' },
//   { name: 'partenaire2', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire2.webp', url: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.richardson.fr/&ved=2ahUKEwjhzIiz8PeGAxVGVaQEHUXJBIwQFnoECAYQAQ&usg=AOvVaw2T0S56pPqwvOdJYjHLoM7b' },
//   { name: 'partenaire1', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire1.webp', url: 'https://www.novasanit.fr/' },
//   { name: 'partenaire3', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire3.webp', url: 'https://www.comptoirdesfers.com/' },
//   { name: 'partenaire6', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/PUM-PLASTIQUE.jpg', url: 'https://www.mypum.fr/' },

// ]
</script>