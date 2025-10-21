<template>
  <footer class="bg-gray-100 border-t mt-10">
    <div class="container py-10 grid md:grid-cols-3 gap-8">
      <div>
        <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS" class="h-20 w-20 mb-3"/>
        <h4 class="font-semibold mb-3">Massonjo Chauffage Sanitaire</h4>
        <p>Plombier chauffagiste à Reignier-Ésery et Haute-Savoie.</p>
      </div>
      <div>
        <h4 class="font-semibold mb-3">Liens</h4>
        <ul class="space-y-2">
          <li><router-link to="/mentions-legales" class="hover:text-primary">Législation & RGPD</router-link></li>
           <li>© 2025 Massonjo Chauffage Sanitaire</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold mb-3">Contact</h4>
        <p>📍 189 Rue des Moineaux, 74930 Reignier-Ésery</p>
        <p>📞 <a href="tel:+33750972601" class="hover:underline">07 50 97 26 01</a></p>
        <p>✉️ <a href="mailto:massonjoetfils@gmail.com" class="hover:underline">massonjoetfils@gmail.com</a></p>

      </div>
    </div>
  </footer>
</template>
