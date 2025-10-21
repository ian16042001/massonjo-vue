// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../pages/Home.vue')
const Plomberie = () => import('../pages/Plomberie.vue')
const Chauffage = () => import('../pages/Chauffage.vue')
const PompeChaleur = () => import('../pages/PompeChaleur.vue')
const Galerie = () => import('../pages/Galerie.vue')
const Mentions = () => import('../pages/MentionsLegales.vue')
const Contact = () => import('../pages/Contact.vue')

// Your canonical production URL (used for canonical + OG url)
const SITE_URL = 'https://www.massonjo-chauffage-sanitaire.fr'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() { return { top: 0 } },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Accueil',
        description:
          "Plombier chauffagiste à Reignier-Ésery. Installations, rénovations et dépannages en Haute-Savoie."
      }
    },
    {
      path: '/plomberie-sanitaire',
      name: 'plomberie',
      component: Plomberie,
      meta: {
        title: 'Plomberie sanitaire',
        description:
          "Installation et rénovation de plomberie sanitaire à Reignier-Ésery, Annemasse et Haute-Savoie."
      }
    },
    {
      path: '/chauffage',
      name: 'chauffage',
      component: Chauffage,
      meta: {
        title: 'Chauffage',
        description:
          "Chaudières, radiateurs, plancher chauffant : installation et optimisation en Haute-Savoie."
      }
    },
    {
      path: '/pompe-a-chaleur',
      name: 'pompe',
      component: PompeChaleur,
      meta: {
        title: 'Pompe à chaleur',
        description:
          "Installation et maintenance de pompes à chaleur (PAC) à Reignier-Ésery et environs."
      }
    },
    {
      path: '/galerie-photos',
      name: 'galerie',
      component: Galerie,
      meta: {
        title: 'Galerie photos',
        description:
          "Réalisations en plomberie, chauffage et pompes à chaleur en Haute-Savoie."
      }
    },
    {
      path: '/mentions-legales',
      name: 'mentions',
      component: Mentions,
      meta: {
        title: 'Mentions légales',
        description: "Informations légales et politique de confidentialité (RGPD)."
      }
    },
    {
      path: '/avis-contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Avis & Contact',
        description:
          "Contactez MCS et découvrez les avis clients. Devis gratuits et réponse rapide."
      }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

function upsertMeta(selector, attrs) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    // set a sensible default attribute to ensure future selects work
    if (attrs.name) el.setAttribute('name', attrs.name)
    if (attrs.property) el.setAttribute('property', attrs.property)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
  return el
}

function upsertCanonical(href) {
  let link = document.querySelector("link[rel='canonical']")
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

router.afterEach((to) => {
  const baseTitle = to.meta?.title ? `${to.meta.title} – MCS` : 'MCS'
  const desc = to.meta?.description || 'Plombier chauffagiste à Reignier-Ésery et Haute-Savoie.'

  // Title
  document.title = baseTitle

  // Meta description
  upsertMeta("meta[name='description']", { name: 'description', content: desc })

  // Canonical
  const url = SITE_URL + (to.fullPath || to.path || '/')
  upsertCanonical(url)

  // Open Graph
  upsertMeta("meta[property='og:title']", { property: 'og:title', content: baseTitle })
  upsertMeta("meta[property='og:description']", { property: 'og:description', content: desc })
  upsertMeta("meta[property='og:url']", { property: 'og:url', content: url })

  // Twitter
  upsertMeta("meta[name='twitter:title']", { name: 'twitter:title', content: baseTitle })
  upsertMeta("meta[name='twitter:description']", { name: 'twitter:description', content: desc })
})

export default router
