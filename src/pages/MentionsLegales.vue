<template>
  <div class="container max-w-4xl px-4 py-10">
    <!-- logo header -->
    <div class="flex items-center gap-4 mb-8">
      <router-link to="/" class="shrink-0">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa"
          alt="Logo Massonjo Chauffage Sanitaire"
          class="h-20 w-20 rounded-2xl ring-2 ring-primary/20 bg-white p-2"
        />
      </router-link>
      <div>
        <h1 class="text-2xl font-bold text-primary">Mentions légales & RGPD</h1>
        <p class="text-sm text-gray-600">Massonjo Chauffage Sanitaire – Reignier-Ésery</p>
      </div>
    </div>

    <!-- content cards -->
    <div class="space-y-6">
      <!-- <Card title="1. Hébergeur">
        <p>OVH – SAS<br>
        2 rue Kellermann – 59100 Roubaix – France<br>
        Tél&nbsp;: 09 72 10 10 07</p>
      </Card> -->

      <Card title="1. Éditeur du site">
        <ul class="list-none space-y-2">
          <li><strong>Nom – Prénom&nbsp;:</strong> MASSONJO JACOB ILONGO</li>
          <li><strong>Forme juridique&nbsp;:</strong> EI – Entreprise individuelle</li>
          <li><strong>Enseigne&nbsp;:</strong> Massonjo Chauffage Sanitaire</li>
          <li><strong>Adresse&nbsp;:</strong> 189 Rue des Moineaux, 74930 Reignier-Ésery, France</li>
          <li><strong>Téléphone&nbsp;:</strong> <a href="tel:+33750972601" class="text-primary hover:underline">07 50 97 26 01</a></li>
          <li><strong>E-mail&nbsp;:</strong> <a href="mailto:massonjoetfils@gmail.com" class="text-primary hover:underline">massonjoetfils@gmail.com</a></li>
          <li><strong>Directeur de publication&nbsp;:</strong> Jacob MASSONJO</li>
          <li><strong>SIREN&nbsp;:</strong> 929 112 332 | <strong>SIRET&nbsp;:</strong> 929 112 332 00010 | <strong>TVA&nbsp;:</strong> FR 07 929 112 332</li>
        </ul>
      </Card>

      <!-- <Card title="2. Cookies">
        <p>Aucun cookie de suivi n’est déposé sans votre consentement. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
      </Card> -->

      <Card title="6. Cookies & traceurs">
        <p>
          Un bandeau vous informe de l’utilisation des cookies dès la première connexion. Vous pouvez choisir d’accepter ou de refuser les cookies autres que ceux strictement nécessaires au fonctionnement du site.
        </p>
        <p class="mt-2">
          Vous pouvez modifier votre choix à tout moment en cliquant sur l’icône 🍪 en bas à droite de l’écran.
        </p>
      </Card>

      <Card title="3. Droits RGPD">
        <p>Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition aux données vous concernant. Pour les exercer, adressez-vous à&nbsp;:</p>
        <p class="mt-2">
          <strong>Massonjo Chauffage Sanitaire</strong><br>
          189 Rue des Moineaux, 74930 Reignier-Ésery<br>
          ou par e-mail&nbsp;: <a href="mailto:massonjoetfils@gmail.com" class="text-primary hover:underline">massonjoetfils@gmail.com</a>
        </p>
      </Card>

      <Card title="4. Propriété intellectuelle">
        <p>L’ensemble des contenus (textes, images, logo, graphiques) est la propriété exclusive de Massonjo Chauffage Sanitaire, sauf mention contraire. Toute reproduction ou redistribution, totale ou partielle, est interdite sans autorisation écrite.</p>
      </Card>

      <Card title="5. Responsabilité">
        <p>Massonjo Chauffage Sanitaire s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l’absence d’erreurs ou d’omissions. L’utilisateur est responsable de l’utilisation des informations fournies.</p>
      </Card>


    </div>

    <!-- back home -->
    <div class="mt-10 text-center">
      <router-link to="/" class="btn-ghost">← Retour accueil</router-link>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/Card.vue'  
</script>