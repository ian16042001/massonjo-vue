<template>
  <div class="container justify-center justify-items-center">
    <h1 class="text-3xl font-bold mb-4 text-center">CHAUFFAGISTE À REIGNIER-ÉSERY</h1>
    <div class="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
      <p class="max-w-3xl text-gray-700 text-center">
        Installation et optimisation de systèmes de chauffage : chaudières, radiateurs, planchers chauffants,
        régulation et entretien.
      </p>
    </div>

    <div class="mt-8 grid md:grid-cols-2 gap-8 items-center flex-row-reverse">
      <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chauffage-maison.webp" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie -- Chauffage" />
      <div>
        <h2 class="text-xl font-semibold mb-2">Confort thermique optimal</h2>
        <p class="text-gray-700">
          Je propose une étude de faisabilité détaillée pour choisir le modèle, l’emplacement et les matériaux nécessaires à votre projet thermique.

J’interviens pour l’installation, la réparation et l’entretien de divers modèles de chauffage, notamment les chaudières, les ballons d’eau chaude...

Que vous soyez un particulier ou un professionnel, je vous garantis des équipements écologiques et performants qui correspondent le plus à vos besoins et à votre budget.
        </p>
        <router-link to="/avis-contact" class="btn-primary mt-4 inline-flex">Demander un devis</router-link>
      </div>
    </div>
  </div>

    <section class="container py-12">
      <h2 class="text-2xl font-bold mb-6 text-center">INSTALLATION DE CHAUDIÈRES GAZ À CONDENSATION À PROXIMITÉ D'ANNECY</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard2 title="QU'EST-CE QU'UNE CHAUDIÈRE GAZ À CONDENSATION ? " to=""
                img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chaudiere.webp">
          Une chaudière gaz à condensation est un système de chauffage performant qui assure à la fois le chauffage de votre logement et la production d'eau chaude sanitaire.

          Son fonctionnement repose sur une technologie avancée qui utilise la vapeur d'eau contenue dans les fumées de combustion pour optimiser l'efficacité énergétique.
        </ServiceCard2>
        <ServiceCard2 title="COMMENT FONCTIONNE UNE CHAUDIÈRE À GAZ CONDENSATION ?  " to=""
                img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chaudiere1.webp">
          
          <ul>
            <li>Combustion en brûlant du gaz pour générer de la chaleur</li>
            <li>Transmission de la chaleur produite via un liquide caloporteur vers vos émetteurs de chaleur : radiateurs, planchers chauffants, points d'eau chaude...</li>
            <li>Récupération des fumées de combustion par la chaudière qui seront transformées en vapeur d'eau</li>
            <li>Augmentation de la température du fluide caloporteur</li>
            <li>Évacuation de l'eau de condensation via un raccordement au conduit d'évacuation des eaux usées</li>
          </ul>
        </ServiceCard2>
        <ServiceCard2 title="LES AVANTAGES DE LA CHAUDIÈRE À GAZ CONDENSATION  " to=""
              img="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chaudiere2.webp">
          Efficacité énergétique : grâce à l'utilisation de la vapeur d'eau contenue dans les fumées, la chaudière gaz à condensation assure un rendement supérieur à celui des chaudières traditionnelles, permettant de réaliser des économies d'énergie significatives
          Confort optimal : ce système assure une production constante et fiable de chaleur et d'eau chaude sanitaire, garantissant ainsi votre confort au quotidien
          Respect de l'environnement en réduisant la consommation de gaz et les émissions de CO2
        </ServiceCard2>
      </div>
    </section>

    <div class="container justify-items-center">
      <div class="mt-8 grid md:grid-cols-2 gap-8 items-center flex-row-reverse">
        <div>
          <h2 class="text-xl font-semibold mb-2">AUTRES SERVICES DE CHAUFFAGE</h2>
          <p class="text-gray-700">
              Je m'occupe du déplacement des chaudières en toute sécurité, en respectant les normes en vigueur.

              Cette intervention permet d’optimiser l’agencement des lieux et d’améliorer la distribution de la chaleur. 

              Mes services couvrent aussi le remplacement de ballons d'eau chaude près de Pers-Jussy.

              Si votre équipement est vétuste ou inefficace, je vous propose des solutions adaptées à vos besoins et à votre budget, garantissant une production d'eau chaude fiable et économique.
          </p>
          <router-link to="/avis-contact" class="btn-primary mt-4 inline-flex">Demander un devis</router-link>
        </div>
        <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/chaudiere0.webp" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"  />
        
      </div>
    </div>

  
</template>


<script setup>
import ServiceCard2 from '@/components/ServiceCard2.vue'

</script>