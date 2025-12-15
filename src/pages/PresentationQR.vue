<template>
  <section class="bg-white border-y">
    <div class="container max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8 items-center">

      <!-- LEFT : logo + tag-line -->
      <div class="md:col-span-1 text-center md:text-left">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa"
          alt="Massonjo Chauffage Sanitaire"
          class="h-24 w-24 rounded-2xl ring-2 ring-primary/20 bg-white p-2 mx-auto md:mx-0"
        />
        <h1 class="mt-4 text-2xl font-bold text-primary">Massonjo Chauffage Sanitaire</h1>
        <p class="text-gray-600">Plombier chauffagiste • Reignier-Ésery, Annemasse & Haute-Savoie</p>
      </div>

      <!-- MIDDLE : licence + contact -->
      <div class="md:col-span-1 space-y-3 text-sm">
        <h2 class="font-semibold text-gray-800">Informations légales</h2>
        <ul class="space-y-1 text-gray-600">
          <li><strong>SIREN :</strong> 989 096 854</li>
          <li><strong>SIRET :</strong> 989 096 854 00017</li>
          <li><strong>TVA :</strong> FR 46 989 096 854</li>
          <li><strong>Activité :</strong> 4322A - Travaux d'installation d'eau et de gaz en tous locaux</li>
          <li><strong>Forme :</strong> Société à responsabilité limitée (SARL)</li>
        </ul>

        <h2 class="font-semibold text-gray-800 mt-4">Contact & horaires</h2>
        <ul class="space-y-1 text-gray-600">
          <li>📍 189 Rue des Moineaux, 74930 Reignier-Ésery</li>
          <li>📞 <a href="tel:+33750972601" class="text-primary hover:underline">07 50 97 26 01</a></li>
          <li>✉️ <a href="mailto:massonjoetfils@gmail.com" class="text-primary hover:underline">massonjoetfils@gmail.com</a></li>
          <li>🕒 Lundi-samedi : 08 h-18 h</li>
        </ul>
      </div>

      <!-- RIGHT : values + CTA -->
      <div class="md:col-span-1 space-y-4 text-center md:text-left">
        <h2 class="font-semibold text-gray-800">Nos Services</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-1">
          <li>Plomberie Sanitaire</li>
          <li>Chauffage</li>
          <li>Pompe à Chaleur</li>
        </ul>
         <RouterLink to="/plombier-chauffagiste-services" class="text-primary font-semibold hover:underline">plus →</RouterLink>

        <div class="mt-6 flex gap-3 justify-center md:justify-start">
          <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
          <a href="tel:+33750972601" class="btn-ghost">Appeler (07 50 97 26 01)</a>
        </div>
      </div>
    </div>
  </section>
</template>