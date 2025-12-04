// // src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router'

// const Home = () => import('../pages/Home.vue')
// const Plomberie = () => import('../pages/Plomberie.vue')
// const Chauffage = () => import('../pages/Chauffage.vue')
// const PompeChaleur = () => import('../pages/PompeChaleur.vue')
// const Galerie = () => import('../pages/Galerie.vue')
// const Mentions = () => import('../pages/MentionsLegales.vue')
// const Contact = () => import('../pages/Contact.vue')

// // Your canonical production URL (used for canonical + OG url)
// const SITE_URL = 'https://www.massonjo-chauffage-sanitaire.fr'

// const router = createRouter({
//   history: createWebHistory(),
//   scrollBehavior() { return { top: 0 } },
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home,
//       meta: {
//         title: 'Accueil',
//         description:
//           "Plombier chauffagiste à Reignier-Ésery. Installations, rénovations et dépannages en Haute-Savoie."
//       }
//     },
//     {
//       path: '/plomberie-sanitaire',
//       name: 'plomberie',
//       component: Plomberie,
//       meta: {
//         title: 'Plomberie sanitaire',
//         description:
//           "Installation et rénovation de plomberie sanitaire à Reignier-Ésery, Annemasse et Haute-Savoie."
//       }
//     },
//     {
//       path: '/chauffage',
//       name: 'chauffage',
//       component: Chauffage,
//       meta: {
//         title: 'Chauffage',
//         description:
//           "Chaudières, radiateurs, plancher chauffant : installation et optimisation en Haute-Savoie."
//       }
//     },
//     {
//       path: '/pompe-a-chaleur',
//       name: 'pompe',
//       component: PompeChaleur,
//       meta: {
//         title: 'Pompe à chaleur',
//         description:
//           "Installation et maintenance de pompes à chaleur (PAC) à Reignier-Ésery et environs."
//       }
//     },
//     {
//       path: '/galerie-photos',
//       name: 'galerie',
//       component: Galerie,
//       meta: {
//         title: 'Galerie photos',
//         description:
//           "Réalisations en plomberie, chauffage et pompes à chaleur en Haute-Savoie."
//       }
//     },
//     {
//       path: '/mentions-legales',
//       name: 'mentions',
//       component: Mentions,
//       meta: {
//         title: 'Mentions légales',
//         description: "Informations légales et politique de confidentialité (RGPD)."
//       }
//     },
//     {
//       path: '/avis-contact',
//       name: 'contact',
//       component: Contact,
//       meta: {
//         title: 'Avis & Contact',
//         description:
//           "Contactez MCS et découvrez les avis clients. Devis gratuits et réponse rapide."
//       }
//     },
//     { path: '/:pathMatch(.*)*', redirect: '/' }
//   ]
// })

// function upsertMeta(selector, attrs) {
//   let el = document.querySelector(selector)
//   if (!el) {
//     el = document.createElement('meta')
//     // set a sensible default attribute to ensure future selects work
//     if (attrs.name) el.setAttribute('name', attrs.name)
//     if (attrs.property) el.setAttribute('property', attrs.property)
//     document.head.appendChild(el)
//   }
//   Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
//   return el
// }

// function upsertCanonical(href) {
//   let link = document.querySelector("link[rel='canonical']")
//   if (!link) {
//     link = document.createElement('link')
//     link.setAttribute('rel', 'canonical')
//     document.head.appendChild(link)
//   }
//   link.setAttribute('href', href)
// }

// router.afterEach((to) => {
//   const baseTitle = to.meta?.title ? `${to.meta.title} – MCS` : 'MCS'
//   const desc = to.meta?.description || 'Plombier chauffagiste à Reignier-Ésery et Haute-Savoie.'

//   // Title
//   document.title = baseTitle

//   // Meta description
//   upsertMeta("meta[name='description']", { name: 'description', content: desc })

//   // Canonical
//   const url = SITE_URL + (to.fullPath || to.path || '/')
//   upsertCanonical(url)

//   // Open Graph
//   upsertMeta("meta[property='og:title']", { property: 'og:title', content: baseTitle })
//   upsertMeta("meta[property='og:description']", { property: 'og:description', content: desc })
//   upsertMeta("meta[property='og:url']", { property: 'og:url', content: url })

//   // Twitter
//   upsertMeta("meta[name='twitter:title']", { name: 'twitter:title', content: baseTitle })
//   upsertMeta("meta[name='twitter:description']", { name: 'twitter:description', content: desc })
// })

// export default router


// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const Home            = () => import('../pages/Home.vue')
const Plomberie       = () => import('../pages/Plomberie.vue')
const Chauffage       = () => import('../pages/Chauffage.vue')
const PompeChaleur    = () => import('../pages/PompeChaleur.vue')
const Galerie         = () => import('../pages/Galerie.vue')
const Mentions        = () => import('../pages/MentionsLegales.vue')
const Contact         = () => import('../pages/Contact.vue')
const Services        = () => import('../pages/Services.vue')

// ---- new city pages ----
const PersJussy       = () => import('../pages/cities/PersJussy.vue')
const Thones          = () => import('../pages/cities/Thones.vue')
const LaRocheSurForon = () => import('../pages/cities/LaRocheSurForon.vue')
const Bonneville      = () => import('../pages/cities/Bonneville.vue')
const Annemasse       = () => import('../pages/cities/Annemasse.vue')
const Gaillard        = () => import('../pages/cities/Gaillard.vue')
const SaintJulien     = () => import('../pages/cities/SaintJulien.vue')
const CranvesSales    = () => import('../pages/cities/CranvesSales.vue')
const MonnetierMornex = () => import('../pages/cities/MonnetierMornex.vue')
const ArthazPontNotreDame = () => import('../pages/cities/ArthazPontNotreDame.vue')
const Nangy           = () => import('../pages/cities/Nangy.vue')
const VetrazMonthoux  = () => import('../pages/cities/VetrazMonthoux.vue')
const LaMuraz         = () => import('../pages/cities/LaMuraz.vue')
const Cornier         = () => import('../pages/cities/Cornier.vue')
const Bonne           = () => import('../pages/cities/Bonne.vue')
const Scientrier      = () => import('../pages/cities/Scientrier.vue')
const Entrembieres    = () => import('../pages/cities/Entrembieres.vue')
const ContamineSurArve= () => import('../pages/cities/ContamineSurArve.vue')
const Fillinges       = () => import('../pages/cities/Fillinges.vue')
const Arbusigny       = () => import('../pages/cities/Arbusigny.vue')
const Douvaine        = () => import('../pages/cities/Douvaine.vue')
const Mieussy         = () => import('../pages/cities/Mieussy.vue')
const Charvonnex      = () => import('../pages/cities/Charvonnex.vue')
const Lully           = () => import('../pages/cities/Lully.vue')
const BonsEnChablais  = () => import('../pages/cities/BonsEnChablais.vue')
const Copponex        = () => import('../pages/cities/Copponex.vue')
const Ballaison       = () => import('../pages/cities/Ballaison.vue')
const LaTour          = () => import('../pages/cities/LaTour.vue')
const Neyden          = () => import('../pages/cities/Neyden.vue')
const Ayse            = () => import('../pages/cities/Ayse.vue')
const Etaux           = () => import('../pages/cities/Etaux.vue')


const SITE_URL = 'https://www.massonjo-chauffage-sanitaire.fr'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() { return { top: 0 } },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Plombier Reignier-Ésery', description: 'Plombier chauffagiste à Reignier-Ésery. Installations, rénovations et dépannages en Haute-Savoie, Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux.. Devis gratuit 24 h.' }
    },
    {
      path: '/plomberie-sanitaire',
      name: 'plomberie',
      component: Plomberie,
      meta: { title: 'Plomberie Fillinges & Reignier', description: 'Installation et rénovation plomberie sanitaire à Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux. Devis gratuit.' }
    },
    {
      path: '/plombier-chauffagiste-chauffage',
      name: 'chauffage',
      component: Chauffage,
      meta: { title: 'Chauffagiste Reignier-Ésery', description: 'Chaudières, radiateurs, planchers chauffants : installation et entretien en Haute-Savoie, Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux.' }
    },
    {
      path: '/plombier-chauffagiste-pompe-a-chaleur',
      name: 'pompe',
      component: PompeChaleur,
      meta: { title: 'Plombier Chauffagiste - Pompe à chaleur Gaillard', description: 'Installation et maintenance de pompes à chaleur à Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux. Devis PAC gratuit.' }
    },
    {
      path: '/plombier-chauffagiste-galerie-photos',
      name: 'galerie',
      component: Galerie,
      meta: { title: 'Plombier Chauffagiste Galerie photos', description: 'Réalisations en plomberie, chauffage et pompes à chaleur en Haute-Savoie, Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux.' }
    },
    {
      path: '/mentions-legales',
      name: 'mentions',
      component: Mentions,
      meta: { title: 'Mentions légales', description: 'Informations légales et politique de confidentialité (RGPD). Plombier Chauffagiste' }
    },
    {
      path: '/avis-contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'Avis & Contact', description: 'Contactez MCS et découvrez les avis clients. Devis gratuits et réponse rapide.' }
    },
    {
      path: '/plombier-chauffagiste-services',
      name: 'services',
      component: Services,
      meta: { title: 'Services Plombier Chauffagiste', description: 'Service complet de plomberie et chauffage à Reignier-Ésery, Annemasse, La Roche-sur-Foron, Gaillard, Pers-Jussy, Monnetier-Mornex, Fillinges, Bonneville, Arthaz-Pont-Notre-Dame, Nangy, Vétraz-Monthoux, La Muraz, Cornier, Bonne, Scientrier, Entrembières, Contamine-sur-Arve, Cranves-Sales, Arbusigny, Douvaine, Mieussy, Charvonnex, Lully, Bons-en-Chablais, Copponex, Ballaison, La Tour, Neyden, Ayse, Étaux. Installation, réparation, maintenance de plomberie, chauffage, pompe à chaleur. Devis gratuit 24h en Haute-Savoie.' }
    },
    // ----- city landing pages -----
    
    { path: '/plombier-chauffagiste-pers-jussy',          name: 'persjussy',       component: PersJussy,       meta: { title: 'Plombier Chauffagiste Pers-Jussy',          description: 'Plombier chauffagiste à Pers-Jussy (74). Dépannage 24 h, devis gratuit, installation et rénovation.' } },
    { path: '/plombier-chauffagiste-thones',              name: 'thones',          component: Thones,          meta: { title: 'Plombier Chauffagiste Thônes',              description: 'Plombier chauffagiste à Thônes – réparation fuite, chauffe-eau, chaudière. Intervention rapide en Haute-Savoie.' } },
    { path: '/plombier-chauffagiste-la-roche-sur-foron',  name: 'laroche',         component: LaRocheSurForon, meta: { title: 'Plombier Chauffagiste La Roche-sur-Foron', description: 'Plombier chauffagiste à La Roche-sur-Foron – entretien chaudière, radiateur, devis gratuit.' } },
    { path: '/plombier-chauffagiste-bonneville',          name: 'bonneville',      component: Bonneville,      meta: { title: 'Plombier Chauffagiste Bonneville',          description: 'Plombier chauffagiste à Bonneville (74). Installation sanitaire, chaudière, dépannage.' } },
    { path: '/plombier-chauffagiste-annemasse',           name: 'annemasse',       component: Annemasse,       meta: { title: 'Plombier Chauffagiste Annemasse',           description: 'Plombier chauffagiste à Annemasse – devis gratuit en 24 h, plomberie, chauffage, pompe à chaleur.' } },
    { path: '/plombier-chauffagiste-gaillard',            name: 'gaillard',        component: Gaillard,        meta: { title: 'Pompe à chaleur Gaillard',     description: 'Installation pompe à chaleur à Gaillard – PAC air/eau, entretien, devis gratuit.' } },
    { path: '/plombier-chauffagiste-saint-julien-en-genevois', name: 'saintjulien', component: SaintJulien,  meta: { title: 'Plombier Chauffagiste Saint-Julien-en-Genevois', description: 'Plombier chauffagiste à Saint-Julien-en-Genevois – dépannage rapide, devis gratuit, chauffage.' } },
    { path: '/plombier-chauffagiste-cranves-sales',       name: 'cranves',         component: CranvesSales,    meta: { title: 'Plombier Chauffagiste Cranves-Sales',       description: 'Plombier chauffagiste à Cranves-Sales (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-monnetier-mornex',    name: 'monnetiermornex', component: MonnetierMornex, meta: { title: 'Plombier Chauffagiste Monnetier-Mornex',    description: 'Plombier chauffagiste à Monnetier-Mornex (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-arthaz-pont-notre-dame', name: 'arthaz',         component: ArthazPontNotreDame, meta: { title: 'Plombier Chauffagiste Arthaz-Pont-Notre-Dame', description: 'Plombier chauffagiste à Arthaz-Pont-Notre-Dame (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-nangy',               name: 'nangy',           component: Nangy,           meta: { title: 'Plombier Chauffagiste Nangy',               description: 'Plombier chauffagiste à Nangy (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-vetraz-monthoux',      name: 'vetrazmonthoux',  component: VetrazMonthoux,  meta: { title: 'Plombier Chauffagiste Vétraz-Monthoux',      description: 'Plombier chauffagiste à Vétraz-Monthoux (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-la-muraz',            name: 'lamuraz',         component: LaMuraz,         meta: { title: 'Plombier Chauffagiste La Muraz',            description: 'Plombier chauffagiste à La Muraz (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-cornier',             name: 'cornier',         component: Cornier,         meta: { title: 'Plombier Chauffagiste Cornier',             description: 'Plombier chauffagiste à Cornier (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-bonne',               name: 'bonne',           component: Bonne,           meta: { title: 'Plombier Chauffagiste Bonne',               description: 'Plombier chauffagiste à Bonne (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-scientrier',          name: 'scientrier',      component: Scientrier,      meta: { title: 'Plombier Chauffagiste Scientrier',          description: 'Plombier chauffagiste à Scientrier (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-entrembieres',        name: 'entrembieres',    component: Entrembieres,    meta: { title: 'Plombier Chauffagiste Entrembières',        description: 'Plombier chauffagiste à Entrembières (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-contamine-sur-arve',  name: 'contamine',       component: ContamineSurArve,meta: { title: 'Plombier Chauffagiste Contamine-sur-Arve',  description: 'Plombier chauffagiste à Contamine-sur-Arve (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-fillinges',            name: 'fillinges',       component: Fillinges,       meta: { title: 'Plombier Chauffagiste Fillinges',           description: 'Plombier chauffagiste à Fillinges (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-arbusigny',           name: 'arbusigny',       component: Arbusigny,       meta: { title: 'Plombier Chauffagiste Arbusigny',           description: 'Plombier chauffagiste à Arbusigny (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-douvaine',            name: 'douvaine',        component: Douvaine,        meta: { title: 'Plombier Chauffagiste Douvaine',            description: 'Plombier chauffagiste à Douvaine (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-mieussy',             name: 'mieussy',         component: Mieussy,         meta: { title: 'Plombier Chauffagiste Mieussy',             description: 'Plombier chauffagiste à Mieussy (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-charvonnex',          name: 'charvonnex',      component: Charvonnex,      meta: { title: 'Plombier Chauffagiste Charvonnex',          description: 'Plombier chauffagiste à Charvonnex (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-lully',               name: 'lully',           component: Lully,           meta: { title: 'Plombier Chauffagiste Lully',               description: 'Plombier chauffagiste à Lully (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-bons-en-chablais',   name: 'bonsenchablais',  component: BonsEnChablais,  meta: { title: 'Plombier Chauffagiste Bons-en-Chablais',   description: 'Plombier chauffagiste à Bons-en-Chablais (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-copponex',            name: 'copponex',        component: Copponex,        meta: { title: 'Plombier Chauffagiste Copponex',            description: 'Plombier chauffagiste à Copponex (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-ballaison',           name: 'ballaison',       component: Ballaison,       meta: { title: 'Plombier Chauffagiste Ballaison',           description: 'Plombier chauffagiste à Ballaison (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-la-tour',             name: 'latour',          component: LaTour,          meta: { title: 'Plombier Chauffagiste La Tour',             description: 'Plombier chauffagiste à La Tour (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-neyden',              name: 'neyden',          component: Neyden,          meta: { title: 'Plombier Chauffagiste Neyden',              description: 'Plombier chauffagiste à Neyden (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-ayse',                name: 'ayse',            component: Ayse,            meta: { title: 'Plombier Chauffagiste Ayse',                description: 'Plombier chauffagiste à Ayse (74). Installation, dépannage, devis clair.' } },
    { path: '/plombier-chauffagiste-etaux',               name: 'etaux',           component: Etaux,           meta: { title: 'Plombier Chauffagiste Étaux',               description: 'Plombier chauffagiste à Étaux (74). Installation, dépannage, devis clair.' } },

    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

// ------- existing meta & canonical helpers – unchanged -------
function upsertMeta(selector, attrs) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
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
  document.title = baseTitle
  upsertMeta("meta[name='description']", { name: 'description', content: desc })
  upsertMeta("meta[property='og:title']", { property: 'og:title', content: baseTitle })
  upsertMeta("meta[property='og:description']", { property: 'og:description', content: desc })
  upsertMeta("meta[name='twitter:title']", { name: 'twitter:title', content: baseTitle })
  upsertMeta("meta[name='twitter:description']", { name: 'twitter:description', content: desc })
  upsertCanonical(SITE_URL + (to.fullPath || to.path || '/'))
})

export default router