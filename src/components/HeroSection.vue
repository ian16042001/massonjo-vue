<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-200"></div>
    <div class="relative container py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-3xl md:text-5xl font-extrabold leading-tight">
          Plombier chauffagiste à Reignier-Ésery
        </h1>
        <p class="mt-4 text-lg text-gray-700">
          Installations & dépannages – Plomberie, chauffage et pompes à chaleur. Conseils & devis gratuits.
        </p>
        <div class="mt-6 flex gap-3">
          <router-link to="/avis-contact" class="btn-primary">Demander un devis</router-link>
          <a href="tel:+33750972601" class="btn-ghost">Appeler</a>
        </div>
      </div>
      <div class="md:justify-self-end">
        <img src="https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/130801/image.webp" alt="" class="rounded-2xl shadow-lg w-full max-w-xl">
      </div>
    </div>
  </section>
</template>
