<template>
  <section class="container py-12 inset-0 bg-gradient-to-br from-primary/10 to-purple-200 rounded-2xl shadow-lg px-6 md:px-12">
  <div class="container justify-center justify-items-center">
    <h1 class="text-3xl font-bold mb-4 text-center">POMPE À CHALEUR (PAC) À REIGNIER-ÉSERY</h1>
    <div class="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
      <p class="max-w-3xl text-gray-700 text-center">
        Solutions énergétiques performantes et écologiques. Installation complète et maintenance de pompes à chaleur.
      </p>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-3 text-gray-700">
        <h2 class="text-xl font-semibold">Optez pour une solution de chauffage écologique en Haute-Savoie</h2>
        <!-- <ul class="list-disc pl-5">
          <li>Économies d'énergie et réduction des émissions de CO₂</li>
          <li>Confort toute l'année</li>
          <li>Subventions et aides disponibles</li>
        </ul> -->
        <P>
          MCS  à Reignier-Ésery vous propose des solutions de chauffage écologiques et économiques pour améliorer le confort de votre logement tout en respectant l'environnement.

          Je m’occupe de l’installation complète de pompes à chaleur, assurant un fonctionnement efficace de votre système.

          Profitez d’une énergie renouvelable et d’un confort optimal toute l’année grâce à des solutions thermiques sur mesure. 
        </P>
      <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
      <a class="btn-ghost ml-2" href="tel:+33750972601">📞 07 50 97 26 01</a>
      </div>
      <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe-chaleur.webp?alt=media&token=8b4862d4-81d0-4a8b-849b-94f3d9245b14" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"  />

    </div>
  </div>
  </section>



      <section class="container py-12">
      <h2 class="text-2xl font-bold mb-6 text-center">INSTALLATION DE POMPES À CHALEUR À PROXIMITÉ D'ANNEMASSE</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard2 title="QU'EST-CE QU'UNE POMPE À CHALEUR ?  " to=""
                img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe0.webp?alt=media&token=88f38b39-3058-4063-841c-60a5ceabd6d8" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie">
          Une pompe à chaleur (PAC) est un système de chauffage innovant qui utilise les ressources naturelles pour chauffer votre logement et, dans certains cas, produire de l'eau chaude sanitaire. Son fonctionnement repose sur un principe simple et efficace : extraire l'énergie de l'extérieur et la transférer à l'intérieur de votre habitation.
        </ServiceCard2>
        <ServiceCard2 title="FONCTIONNEMENT DE LA POMPE À CHALEUR  " to=""
                img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe1.webp?alt=media&token=ead47b3f-dca8-436f-a98a-3ea9a79eed8d" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie">
          
          La pompe à chaleur puise de l'énergie dans l'air, le sol ou l'eau à l'extérieur de votre habitation. Cette énergie est ensuite injectée à l'intérieur de votre logement via un radiateur, un plancher chauffant ou un ventilo-convecteur, selon le type d'installation choisi. Grâce à ce processus, la PAC génère plus d'énergie qu'elle n'en consomme, ce qui la rend particulièrement efficace et économique.
        </ServiceCard2>
        <ServiceCard2 title="LES AVANTAGES DE LA POMPE À CHALEUR  " to=""
              img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe2.webp?alt=media&token=4a243eae-ad8a-4ffd-a035-4503b814703d" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie">
          Économies d'énergie : en utilisant l'énergie gratuite et renouvelable de la nature, la pompe à chaleur permet de réaliser jusqu'à 60 % d'économies sur votre facture de chauffage
          Respect de l'environnement : la PAC réduit considérablement les émissions de CO2, contribuant ainsi à la protection de l'environnement
          Confort optimal : ce système assure une chaleur constante et agréable dans votre logement, tout en étant silencieux et discret
        </ServiceCard2>

        <ServiceCard2 title="POURQUOI CHOISIR UNE POMPE À CHALEUR ? " to=""
              img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/pompe3.webp?alt=media&token=be703dcc-6933-406e-89ad-c7efeccf46af" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie">
          Performance énergétique : la pompe à chaleur est l'une des solutions de chauffage les plus performantes du marché, avec un coefficient de performance (COP) élevé
          Retour sur investissement : bien que l'installation d'une PAC représente un investissement initial, les économies réalisées sur le long terme en font une option très rentable
          Subventions et aides financières sont disponibles pour l'installation de pompes à chaleur.
        </ServiceCard2>
      </div>
    </section>
</template>


<script setup>
import ServiceCard2 from '@/components/ServiceCard2.vue'

</script>