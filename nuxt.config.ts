// https://nuxt.com/docs/api/configuration/nuxt-config
// Rebuild trigger 3
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'fr', file: 'fr.json', name: 'Français' },
      { code: 'nl', file: 'nl.json', name: 'Nederlands' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  }
})