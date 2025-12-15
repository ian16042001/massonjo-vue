<template>

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
            <router-link to="/plombier-chauffagiste-galerie-photos" class="btn-ghost">Voir les réalisations</router-link>
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

  <section class="container py-12 inset-0 bg-gradient-to-br from-primary/10 to-purple-200 rounded-2xl shadow-lg px-6 md:px-12">
    <div class="grid md:grid-cols-3 gap-8 items-center ">
      <div class="md:col-span-1 flex justify-center">
        <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"  class="h-48 w-48 md:h-56 md:w-56 rounded-full ring-2 ring-primary/20 bg-white p-4 object-contain" />
      </div>
      <div class="md:col-span-2">
        <h2 class="text-2xl font-bold mb-3">QUI SUIS-JE ?</h2>
        <!-- <p class="text-gray-700 leading-relaxed">
          Artisan plombier chauffagiste basé à Reignier-Ésery, j’accompagne les particuliers et les professionnels
          pour leurs projets d’<strong>installation</strong>, de <strong>rénovation</strong> et de <strong>dépannage</strong>.
          Mon objectif : des installations fiables, esthétiques et durables, avec un conseil honnête et un suivi soigné.
        </p> -->

        <p style="text-align: left;">Plombier chauffagiste expérimenté, je suis votre partenaire de confiance pour tous vos besoins en plomberie et chauffage.<br>
      Titulaire d’un CAP et d'un BEP en Plomberie et Chauffage, j'ai acquis une solide formation en soudure cuivre et acier auprès de GAZ DE FRANCE. Cette expertise me permet de vous garantir des prestations de qualité, répondant aux normes les plus strictes du secteur.</p>

        <p style="text-align: left;">Fort de <strong>plus de 10 ans d'expérience</strong>, je suis à même de réaliser différents travaux, allant de l'installation de systèmes de chauffage à la plomberie générale. Mon savoir-faire et mon professionnalisme sont à votre service pour assurer votre confort et votre sécurité.</p>

        <p style="text-align: left;">Je travaille en collaboration avec des <strong>fournisseurs réputés</strong>, garantissant des matériaux et des équipements fiables et durables. Vous pouvez ainsi avoir l'assurance que chaque intervention est réalisée avec des produits de qualité, assurant la pérennité de vos installations.</p>

        <p style="text-align: left;">En plus des grandes installations, je réalise également du <span style="font-size:20px;"><strong>dépannage</strong></span>&nbsp;plomberie et les&nbsp;<strong>petits bricolages</strong> d'appoint et la recherche de fuites. Quelle que soit votre demande, je m'engage à intervenir rapidement pour résoudre vos soucis quotidiens et prévenir tout dommage potentiel à votre habitation.</p>
        
        <ul class="mt-5 grid sm:grid-cols-2 gap-3 text-gray-700">
          <li class="flex items-center gap-2"><span class="text-accent">✔</span> Dépannage rapide</li>
          <li class="flex items-center gap-2"><span class="text-accent">✔</span> Devis clair et gratuit</li>
          <li class="flex items-center gap-2"><span class="text-accent">✔</span> Matériaux de qualité</li>
          <li class="flex items-center gap-2"><span class="text-accent">✔</span> Respect des délais</li>
        </ul>
        <!-- <div class="mt-6 flex gap-3">
          <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
          <a href="tel:+33750972601" class="btn-ghost">Appeler</a>
        </div> -->
      </div>
    </div>
  </section>
</template>
