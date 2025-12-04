<template>
  <footer class="bg-gray-100 border-t mt-10">
    <div class="container py-10 grid md:grid-cols-3 gap-8">
      <!-- Branding -->
      <div>
        <img
          alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie"
          src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa"
          class="h-20 w-20 mb-3 object-contain"
        />
        <h4 class="font-semibold mb-3 text-lg">Massonjo Chauffage Sanitaire</h4>
        <p class="text-gray-700 max-w-xs">
          Plombier chauffagiste à Reignier-Ésery et Haute-Savoie. Installation, dépannage, entretien.
        </p>
      </div>

      <!-- Navigation Links -->
      <div>
        <h4 class="font-semibold mb-3 text-lg">Liens utiles</h4>
        <ul class="space-y-2">
          <li>
            <router-link to="/" class="hover:text-primary transition">Accueil</router-link>
          </li>
          <li>
            <router-link to="/plombier-chauffagiste-services" class="hover:text-primary transition">Nos Services</router-link>
          </li>
          <li>
            <router-link to="/avis-contact" class="hover:text-primary transition">Avis & Contact</router-link>
          </li>
          <li>
            <router-link to="/mentions-legales" class="hover:text-primary transition">Législation & RGPD</router-link>
          </li>
          <li class="text-gray-500 text-sm mt-4">© 2025 Massonjo Chauffage Sanitaire</li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div>
        <h4 class="font-semibold mb-3 text-lg">Contact</h4>
        <address class="not-italic space-y-2 text-gray-700">
          <p>📍 189 Rue des Moineaux, 74930 Reignier-Ésery</p>
          <p>📞 <a href="tel:+33750972601" class="hover:underline">07 50 97 26 01</a></p>
          <p>✉️ <a href="mailto:massonjoetfils@gmail.com" class="hover:underline">massonjoetfils@gmail.com</a></p>
        </address>
        <!-- Add social icons if available -->
      </div>
    </div>
  </footer>
</template>
