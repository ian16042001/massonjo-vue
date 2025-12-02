<template>
    <section class="container py-12 inset-0 bg-gradient-to-br from-primary/10 to-purple-200 rounded-2xl shadow-lg px-6 md:px-12">

  <div class="container justify-center justify-items-center  ">
    <h1 class="text-3xl font-bold mb-4 text-center">PLOMBIER À REIGNIER-ÉSERY </h1>
    <div class="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
      <p class="max-w-3xl text-gray-700 text-center  ">
        Installation, rénovation, dépannage et maintenance de vos équipements sanitaires : salles de bains, cuisines,
        robinetterie, chauffe-eau, recherche de fuites.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-8 mt-8 items-start">
      <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/avant%20apres.png?alt=media&token=d18366ea-73af-4b7e-8e62-1855e2565bfd" class="rounded-2xl shadow" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie -- Avant/Après" />
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Prestations</h2>
        <ul class="list-disc pl-5 space-y-1 text-gray-700">
          <li>Installation complète de salles de bains et cuisines</li>
          <li>Remplacement d'équipements sanitaires</li>
          <li>Recherche et réparation de fuites</li>
          <li>Dépannage rapide</li>
        </ul>
        <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
        <a class="btn-ghost ml-2" href="tel:+33750972601">📞 07 50 97 26 01</a>
      </div>
    </div>
  </div>
  </section>


    <section class="container py-12">
      <h2 class="text-2xl font-bold mb-6 text-center">REMPLACEMENT D’ÉQUIPEMENTS SANITAIRES À PROXIMITÉ D'ANNECY</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <ServiceCard2 title="MEUBLES SANITAIRES" to=""
                img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/salle-de-bains.webp?alt=media&token=ba580d7a-b7c2-4ea0-8f54-0955210cd5cc">
          Vous souhaitez moderniser votre salle de bains ou votre cuisine ? Je vous accompagne dans le choix et l'installation de meubles sanitaires adaptés à vos besoins et à votre pièce. Profitez aussi de mon savoir-faire pour optimiser votre confort et votre rangement.
        </ServiceCard2>
        <ServiceCard2 title="INSTALLATION DE SALLES DE BAINS " to=""
                img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/sanitaire.webp?alt=media&token=15fcb97a-6972-4945-994a-cfac54592006">
          Confiez-moi la création de salles de bains autour de Monnetier-Mornex. De la pose de la baignoire à l'installation de la douche italienne, en passant par la mise en place des vasques, je vous propose un service clé en main pour un résultat répondant à vos besoins spécifiques.
        </ServiceCard2>
        <ServiceCard2 title="INSTALLATION DE CUISINES " to=""
              img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/cuisien.webp?alt=media&token=2803f4f1-2be3-453b-836c-eb6acc9bcd5e">
          La cuisine est un lieu central de votre habitation. Je m'engage à installer vos équipements de cuisine avec soin et précision. Que ce soit pour les éviers, les robinets ou les systèmes de plomberie spécifiques, chaque détail est pris en compte pour une utilisation optimale.
        </ServiceCard2>
        <ServiceCard2 title="RECHERCHE DE FUITES" to=""
              img="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/fuite.webp?alt=media&token=4fd4eb24-d939-4e78-9bcf-597932fe5d2f">
          Les fuites peuvent causer des dégâts importants si elles ne sont pas rapidement détectées et réparées. En tant qu'expert en plomberie près de Fillinges, j'effectue des investigations minutieuses pour localiser les fuites, minimisant ainsi les dommages et les coûts.
        </ServiceCard2>
      </div>
    </section>
</template>

<script setup>
import ServiceCard2 from '@/components/ServiceCard2.vue'

</script>
