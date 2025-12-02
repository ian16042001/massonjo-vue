// src/composables/useCookies.js
export const COOKIE_LEVEL = {
  NECESSARY: 'necessary',   // always allowed
  ANALYTICS: 'analytics',
  MARKETING: 'marketing'
}

export function setCookie (name, value, days = 365) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`
}

export function getCookie (name) {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1]
}

export function deleteCookie (name) {
  document.cookie = `${name}=; Max-Age=0; path=/`
}