<template>
  <div>

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

    <section class="container py-12">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 class="text-2xl font-bold mb-3">Votre expert plombier chauffagiste</h2>
          <p class="text-gray-700">
            Installations, rénovations et dépannages – je m'engage à fournir des solutions durables et efficaces
            pour tous vos besoins en plomberie et chauffage.
          </p>
          <div class="mt-6 flex gap-3">
            <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
            <router-link to="/galerie-photos" class="btn-ghost">Voir les réalisations</router-link>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
          <div class="card text-center">
            <div class="text-4xl">⚡</div>
            <div class="mt-2 font-semibold">Réactivité</div>
          </div>
          <div class="card text-center">
            <div class="text-4xl">🏅</div>
            <div class="mt-2 font-semibold">10+ ans d'expérience</div>
          </div>
          <div class="card text-center">
            <div class="text-4xl">✅</div>
            <div class="mt-2 font-semibold">Travail soigné</div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUI SUIS-JE -->
    <PresentationSection />

    <section class="container py-12">
      <h2 class="text-2xl font-bold mb-6 text-center">Les Services De Votre Plombier chauffagiste Près De Annemasse</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard title="Plomberie sanitaire" to="/plomberie-sanitaire"
                     img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/salle-bain0.webp">
          Installation, rénovation et maintenance d'équipements sanitaires.
          En tant que plombier qualifié, je m’occupe de tous vos travaux de plomberie sanitaire. Que ce soit pour l'installation de nouveaux équipements, la rénovation de votre salle de bains ou la réparation de fuites, je vous garantis des interventions rapides et efficaces. Mon objectif est de vous garantir des solutions durables et adaptées à vos besoins spécifiques.
        </ServiceCard>
        <ServiceCard title="Systèmes de chauffage" to="/chauffage"
                     img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chauffage.webp">
          Chaudière, radiateurs, optimisation thermique et confort.
          Je suis également spécialisé dans les systèmes de chauffage. Que vous souhaitiez installer une nouvelle chaudière, remplacer un radiateur ou optimiser votre système thermique, je vous accompagne à chaque étape du projet, de la conception à la livraison. Mon expertise vous assure des installations de chauffage conformes aux normes et un confort thermique optimal.
        </ServiceCard>
        <ServiceCard title="Pompes à chaleur" to="/pompe-a-chaleur"
                     img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/pompe.webp">
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

const slides = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau1.webp?alt=media&token=355f482f-cdd8-42b1-bca7-bdc664f78467', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Salle de bains rénovée', caption: '' },
  { src: 'https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/images%2Fbandeau2.webp?alt=media&token=45f73e76-a061-4ad6-a91e-52fcb70cef44', alt: 'MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Système de chauffage', caption: '' },
]

const partners = [
  { name: 'partenaire0', logo: 'https://www.cedeo.fr/_next/image?url=https%3A%2F%2Fwww.cedeo.fr%2Fsites%2Fdefault%2Ffiles%2Flogo%2Flogo_cedeo_nouv.png&w=1920&q=75', url: 'https://www.cedeo.fr/' },
  { name: 'partenaire2', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire2.webp', url: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.richardson.fr/&ved=2ahUKEwjhzIiz8PeGAxVGVaQEHUXJBIwQFnoECAYQAQ&usg=AOvVaw2T0S56pPqwvOdJYjHLoM7b' },
  { name: 'partenaire1', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire1.webp', url: 'https://www.novasanit.fr/' },
  { name: 'partenaire3', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/partenaire3.webp', url: 'https://www.comptoirdesfers.com/' },
  { name: 'partenaire6', logo: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/PUM-PLASTIQUE.jpg', url: 'https://www.mypum.fr/' },

]
</script>
