// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/style/main.scss"],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
    {
      path: '~/sections',
      extensions: ['.vue'],
    },
  ]
})
