<template>
  <div>

<!-- <CityBanner /> -->


    <!-- Carousel -->
    <section class="container py-6">
      <Carousel :images="slides" />
      <h1 class="text-3xl md:text-3xl font-extrabold leading-tight text-center pt-3 text-primary">PLOMBIER CHAUFFAGISTE À REIGNIER-ÉSERY</h1>
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

    <HeroSection city="Reignier-Ésery" />



    <!-- QUI SUIS-JE -->
    <PresentationSection />

    <section class="container py-12">
      <h2 class="text-2xl font-bold mb-6 text-center">Les Services De Votre Plombier chauffagiste Près De Annemasse</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard title="Plomberie sanitaire" to="/plomberie-sanitaire"
                     img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/salle-bain0.webp?alt=media&token=5e4e6014-b275-448d-ac01-c9bdef4ddd1e">
          Installation, rénovation et maintenance d'équipements sanitaires.
          En tant que plombier qualifié, je m’occupe de tous vos travaux de plomberie sanitaire. Que ce soit pour l'installation de nouveaux équipements, la rénovation de votre salle de bains ou la réparation de fuites, je vous garantis des interventions rapides et efficaces. Mon objectif est de vous garantir des solutions durables et adaptées à vos besoins spécifiques.
        </ServiceCard>
        <ServiceCard title="Systèmes de chauffage" to="/chauffage"
                     img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/chauffage.webp?alt=media&token=8f3e2d4a-9c3b-4d2e-9f3e-2d4a9c3b4d2e">
          Chaudière, radiateurs, optimisation thermique et confort.
          Je suis également spécialisé dans les systèmes de chauffage. Que vous souhaitiez installer une nouvelle chaudière, remplacer un radiateur ou optimiser votre système thermique, je vous accompagne à chaque étape du projet, de la conception à la livraison. Mon expertise vous assure des installations de chauffage conformes aux normes et un confort thermique optimal.
        </ServiceCard>
        <ServiceCard title="Pompes à chaleur" to="/pompe-a-chaleur"
                     img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe.webp?alt=media&token=0418a997-c664-4b95-af6e-b9b74245996a">
          Solutions écologiques et économiques pour votre logement.
          La pompe à chaleur (PAC) est une solution de chauffage écologique et économique. En tant qu’expert, je vous propose l’installation et la maintenance de pompes à chaleur pour chauffer votre logement et produire de l’eau chaude sanitaire. Optez pour une PAC pour réduire votre facture énergétique
        </ServiceCard>
      </div>
    </section>

    <PartnersSection :partners="partners" />

    <section class="container py-12">
      <div class="card">
        <h3 class="text-xl font-bold mb-2">Zone d'intervention</h3>
        <p>
          Pour réaliser tous vos travaux de plomberie et de chauffage, je me déplace dans un rayon de 40 km autour de Reignier-Ésery : Cornier, Pers-Jussy, Monnetier-Mornex, Arthaz-Pont-Notre-Dame, Nangy, La Roche-sur-Foron, Arbusigny, Etaux, Annemasse, Fillinges, Saint-Pierre-en-Faucigny, Bonneville, Etrembières, Collonges-sous-Salève, Saint-Julien-en-Genevois, Bonne-sur-Menoge, Gaillard, Vétraz-Monthoux, Cranves-Sales...
        </p>
          <div class="mt-6 flex gap-3">
            <router-link to="/avis-contact" class="btn-primary">Me contacter</router-link>
          </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import Carousel from '@/components/Carousel.vue'
import PresentationSection from '@/components/PresentationSection.vue'
import PartnersSection from '@/components/PartnersSection.vue'
// import CityBanner from '@/components/CityBanner.vue'

const slides = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau1.webp?alt=media&token=355f482f-cdd8-42b1-bca7-bdc664f78467', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Salle de bains rénovée', caption: '' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau2.webp?alt=media&token=45f73e76-a061-4ad6-a91e-52fcb70cef44', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Système de chauffage', caption: '' },
]

const partners = [
  { name: 'partenaire0', logo: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/partmer4.png?alt=media&token=6a1dd375-5ac1-4006-b4fd-6156a8be5316', url: 'https://www.cedeo.fr/' },
  { name: 'partenaire2', logo: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/partenaire2.webp?alt=media&token=69dc7a0e-b58c-498e-8290-cea819477e3a', url: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.richardson.fr/&ved=2ahUKEwjhzIiz8PeGAxVGVaQEHUXJBIwQFnoECAYQAQ&usg=AOvVaw2T0S56pPqwvOdJYjHLoM7b' },
  { name: 'partenaire1', logo: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/partenaire1.webp?alt=media&token=71315f40-5440-4a15-829e-89eb8c26c255', url: 'https://www.novasanit.fr/' },
  { name: 'partenaire3', logo: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/partenaire3.webp?alt=media&token=88f23a84-36f4-43de-8b49-5b9e83be68c7', url: 'https://www.comptoirdesfers.com/' },
  { name: 'partenaire6', logo: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/PUM-PLASTIQUE.jpg?alt=media&token=64c5ab01-e3db-4fec-8d2b-7cc7fa2f6295', url: 'https://www.mypum.fr/' },

]
</script>
