<!-- src/components/CookieBanner.vue -->
<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="translate-y-full opacity-0"
    leave-active-class="transition duration-300"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="visible"
      class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg"
    >
      <div class="container flex flex-col md:flex-row md:items-center gap-4">
        <div class="text-sm">
          <strong>Cookies 🍪</strong>
          <p>
            Nous utilisons des cookies techniques nécessaires au bon
            fonctionnement du site et, si vous acceptez, des cookies
            d’analyse pour améliorer votre expérience.
          </p>
        </div>

        <div class="ml-auto flex gap-2">
          <button @click="refuse" class="btn-ghost">Refuser</button>
          <button @click="accept" class="btn-primary">Accepter</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { setCookie, getCookie } from '@/composables/useCookies'

const visible = ref(false)

onMounted(() => {
  const choice = getCookie('cookie_consent')
  if (!choice) visible.value = true
  else if (choice === 'accepted') injectGTM()
})

function accept () {
  setCookie('cookie_consent', 'accepted', 365)
  visible.value = false
  injectGTM()
}

function refuse () {
  setCookie('cookie_consent', 'refused', 365)
  visible.value = false
  // GTM is NOT injected
}

/* ----------  Google Tag Manager  ---------- */
function injectGTM () {
  // 1. <head> part
  const gtmHead = document.createElement('script')
  gtmHead.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJMD9H89');`
  document.head.appendChild(gtmHead)

  // 2. <body> (noscript) part
  const noscript = document.createElement('noscript')
  noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJMD9H89"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`
  document.body.appendChild(noscript)
}
</script>