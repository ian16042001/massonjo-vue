<template>
  <div class="space-y-4">
    <!-- <h2 class="text-xl font-semibold text-primary">Avis clients Google</h2> -->
    <div class="flex items-center mb-3">
      <div class="logo-container mr-3">
        <img src="https://firebasestorage.googleapis.com/v0/b/massonjo-c0679.firebasestorage.app/o/Logo%2Flogo.png?alt=media&token=eaa675b9-9b39-4e29-b3b2-a9ae9fae87aa" alt="MCS - Massonjo Chauffage Sanitaire, plombier chauffagiste à Reignier-Ésery et Haute-Savoie - Logo" class="logo" />
      </div>
      <h2 class="text-xl font-semibold text-primary">Notre localisation</h2>
    </div>
    <!-- Iframe responsive -->
    <div class="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.702941159209!2d6.278618677118659!3d46.13674687109289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6102beaa340a859d%3A0xdfef6fde7f003ea!2sMassonjo%20chauffage%20sanitaire%20MCS!5e0!3m2!1sfr!2sfr!4v1765828311067!5m2!1sfr!2sfr"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Avis Google Massonjo Chauffage Sanitaire"
        class="google-reviews-iframe"
      ></iframe>
    </div>

    <!-- CTA vers la review box Google -->
    <div class="text-center">
      <a
        href="https://g.page/r/CeoD8Of99v4NEBM/review"
        target="_blank"
        rel="noopener"
        class="btn-primary"
      >
        Laisser un avis ⭐
      </a>
    </div>
  </div>
</template>

<style scoped>
/* cache la scrollbar interne de l’iframe */
.google-reviews-iframe {
  scrollbar-width: none; /* Firefox */
}
.google-reviews-iframe::-webkit-scrollbar {
  display: none; /* Chrome / Safari */
}
.map-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.map-container {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.logo-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 4px;
  border: 1px solid #e9ecef;
}
</style>